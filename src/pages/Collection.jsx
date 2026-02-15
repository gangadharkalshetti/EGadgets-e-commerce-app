import React, { useState } from "react";
import { Link } from "react-router-dom";

const productsData = [
  {
    _id: "1",
    name: "iPhone 15",
    category: "Mobile",
    price: 79999,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    stock: 10,
  },
  {
    _id: "2",
    name: "Gaming Laptop",
    category: "Laptop",
    price: 65000,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    stock: 5,
  },
  {
    _id: "3",
    name: "Wireless Headphones",
    category: "Accessories",
    price: 4999,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRamLnwDelASvv7zQNLkPgMHnJGZeZZi6j96w&s",
    stock: 8,
  },
  {
    _id: "4",
    name: "Smart Watch",
    category: "Accessories",
    price: 8999,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ636PhXxiD9tR_N5AY6dZjjdj-ZgrnRgkioQ&s",
    stock: 0,
  },
];

const Collection = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (name) => {
    alert(`${name} added to cart 🛒`);
  };

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  // Filter logic
  const filteredProducts = productsData.filter((product) => {
    return (
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || product.category === category)
    );
  });

  return (
    <section className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-10">
          Our Premium Collection
        </h1>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-10">
          <input
            type="text"
            placeholder="Search products..."
            className="px-4 py-2 border rounded-lg w-full md:w-1/2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="px-4 py-2 border rounded-lg w-full md:w-1/4"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Mobile">Mobile</option>
            <option value="Laptop">Laptop</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
              >
                <Link to={`/product/${product._id}`}>
                  <div className="overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-56 w-full object-cover group-hover:scale-110 transition duration-300"
                    />
                  </div>
                </Link>

                <div className="p-4">
                  <h3 className="text-lg font-semibold group-hover:text-blue-600">
                    {product.name}
                  </h3>

                  <p className="text-gray-500 mt-1">
                    Category: {product.category}
                  </p>

                  <p className="text-blue-600 font-bold mt-2">
                    ₹ {product.price}
                  </p>

                  <p className="mt-1">
                    {product.stock > 0 ? (
                      <span className="text-green-600 text-sm">
                        In Stock
                      </span>
                    ) : (
                      <span className="text-red-600 text-sm">
                        Out of Stock
                      </span>
                    )}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => addToCart(product.name)}
                      disabled={product.stock === 0}
                      className={`flex-1 py-2 rounded-lg text-white ${
                        product.stock === 0
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-blue-600 hover:bg-blue-700"
                      }`}
                    >
                      Add to Cart
                    </button>

                    <button
                      onClick={() => toggleWishlist(product._id)}
                      className="px-3 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg"
                    >
                      {wishlist.includes(product._id) ? "❤️" : "🤍"}
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No products found.
            </p>
          )}
        </div>

      </div>
    </section>
  );
};

export default Collection;

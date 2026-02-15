import React, { useState } from "react";
import { Link } from "react-router-dom";

const productsData = [
  {
    _id: "1",
    name: "iPhone 15",
    category: "Mobile",
    price: 79999,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    _id: "2",
    name: "Gaming Laptop",
    category: "Laptop",
    price: 65000,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    _id: "3",
    name: "Wireless Headphones",
    category: "Accessories",
    price: 4999,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRamLnwDelASvv7zQNLkPgMHnJGZeZZi6j96w&s",
  },
  {
    _id: "4",
    name: "Smart Watch",
    category: "Accessories",
    price: 8999,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ636PhXxiD9tR_N5AY6dZjjdj-ZgrnRgkioQ&s",
  },
];

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  // Filter logic
  let filteredProducts = productsData.filter((product) => {
    return (
      (selectedCategory === "All" ||
        product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Sorting logic
  if (sortOption === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  const categories = ["All", "Mobile", "Laptop", "Accessories"];

  return (
    <section className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Shop by Category
        </h2>

        {/* Filters Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">

          {/* Category Buttons */}
          <div className="flex gap-4 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full font-medium transition ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white"
                    : "bg-white shadow"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <input
            type="text"
            placeholder="Search product..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border px-4 py-2 rounded-lg w-60"
          />

          {/* Sort */}
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border px-4 py-2 rounded-lg"
          >
            <option value="">Sort By</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden group"
              >
                <Link to={`/product/${product._id}`}>
                  <div className="overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-56 w-full object-cover group-hover:scale-110 transition duration-300"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold group-hover:text-blue-600">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mt-2">
                      ₹ {product.price}
                    </p>
                    <p className="text-sm text-gray-400">
                      {product.category}
                    </p>
                  </div>
                </Link>

                <div className="p-4 pt-0">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No products found 😔
            </p>
          )}
        </div>

      </div>
    </section>
  );
};

export default Category;

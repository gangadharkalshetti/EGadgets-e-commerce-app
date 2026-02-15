import React, { useState } from "react";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      _id: "1",
      name: "iPhone 15",
      price: 79999,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
    {
      _id: "2",
      name: "Smart Watch",
      price: 8999,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ636PhXxiD9tR_N5AY6dZjjdj-ZgrnRgkioQ&s",
    },
  ]);

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item._id !== id));
  };

  const moveToCart = (id) => {
    alert("Moved to cart 🛒");
    removeFromWishlist(id);
    // Later connect with cart logic
  };

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          ❤️ My Wishlist
        </h1>

        {wishlistItems.length === 0 ? (
          <p className="text-gray-500 text-lg">
            Your wishlist is empty.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {wishlistItems.map((item) => (
              <div
                key={item._id}
                className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <Link to={`/product/${item._id}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-52 w-full object-cover"
                  />
                </Link>

                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-700">
                    {item.name}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    ₹ {item.price}
                  </p>

                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => moveToCart(item._id)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
                    >
                      Move to Cart
                    </button>

                    <button
                      onClick={() => removeFromWishlist(item._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                      Remove
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Wishlist;

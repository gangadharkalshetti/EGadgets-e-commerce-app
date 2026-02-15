import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  
  const product = {
    _id: id,
    name: "iPhone 17 Pro",
    price: 129999,
    description:
      "Experience next-generation performance with the latest A17 chip, stunning display, and pro-level camera system.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    stock: 10,
  };

  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    alert(`Added ${quantity} item(s) to cart 🛒`);
    
  };

  const addToWishlist = () => {
    alert("Added to wishlist ❤️");
  };

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-2xl shadow-lg grid md:grid-cols-2 gap-10">

       
        <div className="flex justify-center items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0o08y_igEMmNG_kKE1aOSOVx2x-tcvKPvoQ&s"
            alt={product.name}
            className="w-full max-w-md rounded-xl shadow-md"
          />
        </div>

        
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {product.name}
          </h1>

          <p className="text-2xl text-blue-600 font-semibold mb-4">
            ₹ {product.price}
          </p>

          <p className="text-gray-600 mb-6">
            {product.description}
          </p>

          <p className="mb-4">
            Status:{" "}
            {product.stock > 0 ? (
              <span className="text-green-600 font-medium">
                In Stock
              </span>
            ) : (
              <span className="text-red-600 font-medium">
                Out of Stock
              </span>
            )}
          </p>

          {product.stock > 0 && (
            <div className="mb-6">
              <label className="mr-3 font-medium">Quantity:</label>
              <input
                type="number"
                min="1"
                max={product.stock}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-20 border rounded px-3 py-2"
              />
            </div>
          )}

          <div className="flex gap-4">
            <button
              // onClick={addToCart}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Add to Cart
            </button>

            <button
              // onClick={addToWishlist}
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold"
            >
              ❤️ Wishlist
            </button>
          </div>

        </div>
      </div>
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-2xl shadow-lg grid md:grid-cols-2 gap-10">

       
        <div className="flex justify-center items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCviK0LoI4jJWN7W5Dl4DE-Mpc5cFHv6IirQ&s"
            alt={product.name}
            className="w-full max-w-md rounded-xl shadow-md"
          />
        </div>

        
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Laptop
          </h1>

          <p className="text-2xl text-blue-600 font-semibold mb-4">
            ₹ {product.price}
          </p>

          <p className="text-gray-600 mb-6">
            {product.description}
          </p>

          <p className="mb-4">
            Status:{" "}
            {product.stock > 0 ? (
              <span className="text-green-600 font-medium">
                In Stock
              </span>
            ) : (
              <span className="text-red-600 font-medium">
                Out of Stock
              </span>
            )}
          </p>

          {product.stock > 0 && (
            <div className="mb-6">
              <label className="mr-3 font-medium">Quantity:</label>
              <input
                type="number"
                min="1"
                max={product.stock}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-20 border rounded px-3 py-2"
              />
            </div>
          )}

          <div className="flex gap-4">
            <button
              // onClick={addToCart}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Add to Cart
            </button>

            <button
              // onClick={addToWishlist}
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold"
            >
              ❤️ Wishlist
            </button>
          </div>

        </div>
      </div>
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-2xl shadow-lg grid md:grid-cols-2 gap-10">

       
        <div className="flex justify-center items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbT9VQsYgjyF2ga1lUWTXEDckFcDwUoPW-Rw&s"
            alt={product.name}
            className="w-full max-w-md rounded-xl shadow-md"
          />
        </div>

        
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            phone
          </h1>

          <p className="text-2xl text-blue-600 font-semibold mb-4">
            ₹ {product.price}
          </p>

          <p className="text-gray-600 mb-6">
            {product.description}
          </p>

          <p className="mb-4">
            Status:{" "}
            {product.stock > 0 ? (
              <span className="text-green-600 font-medium">
                In Stock
              </span>
            ) : (
              <span className="text-red-600 font-medium">
                Out of Stock
              </span>
            )}
          </p>

          {product.stock > 0 && (
            <div className="mb-6">
              <label className="mr-3 font-medium">Quantity:</label>
              <input
                type="number"
                min="1"
                max={product.stock}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-20 border rounded px-3 py-2"
              />
            </div>
          )}

          <div className="flex gap-4">
            <button
              // onClick={addToCart}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Add to Cart
            </button>

            <button
              // onClick={addToWishlist}
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold"
            >
              ❤️ Wishlist
            </button>
          </div>

        </div>
      </div>
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-2xl shadow-lg grid md:grid-cols-2 gap-10">

       
        <div className="flex justify-center items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZBuJULev7XyxT7oEEgArV-Dn_OSS9I0vw7Q&s"
            alt={product.name}
            className="w-full max-w-md rounded-xl shadow-md"
          />
        </div>

        
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Headphone
          </h1>

          <p className="text-2xl text-blue-600 font-semibold mb-4">
            ₹ {product.price}
          </p>

          <p className="text-gray-600 mb-6">
            {product.description}
          </p>

          <p className="mb-4">
            Status:{" "}
            {product.stock > 0 ? (
              <span className="text-green-600 font-medium">
                In Stock
              </span>
            ) : (
              <span className="text-red-600 font-medium">
                Out of Stock
              </span>
            )}
          </p>

          {product.stock > 0 && (
            <div className="mb-6">
              <label className="mr-3 font-medium">Quantity:</label>
              <input
                type="number"
                min="1"
                max={product.stock}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-20 border rounded px-3 py-2"
              />
            </div>
          )}

          <div className="flex gap-4">
            <button
              // onClick={addToCart}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Add to Cart
            </button>

            <button
              // onClick={addToWishlist}
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold"
            >
              ❤️ Wishlist
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Product;

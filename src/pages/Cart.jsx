import React, { useState } from "react";

const Cart = () => {
  // Temporary dummy cart data (later connect with Redux / backend)
  const [cartItems, setCartItems] = useState([
    {
      _id: "1",
      name: "iPhone 15",
      price: 79999,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
    {
      _id: "2",
      name: "Gaming Laptop",
      price: 65000,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    },
  ]);

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item._id !== id));
  };

  const updateQuantity = (id, qty) => {
    setCartItems(
      cartItems.map((item) =>
        item._id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          🛒 Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-lg">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex flex-col md:flex-row items-center justify-between border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-700">
                      {item.name}
                    </h2>
                    <p className="text-gray-500">₹ {item.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item._id, Number(e.target.value))
                    }
                    className="w-16 border rounded px-2 py-1"
                  />

                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* Total Section */}
            <div className="flex justify-between items-center mt-8">
              <h2 className="text-xl font-semibold">
                Total: ₹ {totalPrice}
              </h2>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

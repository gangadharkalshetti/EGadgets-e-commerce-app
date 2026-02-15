import React from 'react'
import { Link } from "react-router-dom";

function Hero() {
  return (
     <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Discover The Latest <span className="text-blue-500">Tech Gadgets</span>
          </h1>

          <p className="text-gray-300 text-lg mb-8">
            Shop smart. Shop fast. Upgrade your lifestyle with the newest
            electronics at unbeatable prices.
          </p>

          <div className="flex gap-4">
            <Link
              to="/products"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition duration-300"
            >
              Shop Now
            </Link>

            <Link
              to="/about"
              className="border border-gray-400 hover:bg-gray-700 px-6 py-3 rounded-lg font-semibold transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-photo/elevated-view-laptop-blank-paper-succulent-plant-black-surface_23-2147956470.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Electronic Gadgets"
            className="rounded-xl shadow-2xl w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
};
export default Hero
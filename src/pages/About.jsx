import React from 'react'

function About() {
  return (
     <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-10">
        
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About E-Gadgets
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed mb-6 text-center">
          Welcome to <span className="font-semibold text-blue-600">E-Gadgets</span>, 
          your one-stop destination for the latest and most innovative electronic products.
          We are passionate about bringing cutting-edge technology to your fingertips.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              🚀 Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to provide high-quality gadgets at affordable prices. 
              We aim to deliver a seamless shopping experience with fast delivery, 
              secure payments, and trusted customer support.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              💡 Why Choose Us?
            </h2>
            <ul className="text-gray-600 space-y-2">
              <li>✔ 100% Genuine Products</li>
              <li>✔ Fast & Secure Delivery</li>
              <li>✔ Easy Returns & Refunds</li>
              <li>✔ 24/7 Customer Support</li>
            </ul>
          </div>

        </div>

        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            ⚡ Our Vision
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We envision becoming a leading online electronics store by constantly 
            upgrading our product range and delivering exceptional customer satisfaction.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About
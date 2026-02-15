import React, { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Sidram Anil Alasande",
    email: "Sidramalsande04@.com",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }

    alert("Profile Updated Successfully ✅");
    // Later connect this to backend API
  };

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          👤 My Profile
        </h1>

        <form onSubmit={handleUpdate} className="space-y-6">

          <div>
            <label className="block text-gray-600 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-2">New Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter new password"
              value={user.password}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-2">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm new password"
              value={user.confirmPassword}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
          >
            Update Profile
          </button>

        </form>

        <div className="mt-10 border-t pt-6">
          <Link
            to="/orders"
            className="text-blue-600 font-semibold hover:underline"
          >
            📦 View My Orders
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Profile;

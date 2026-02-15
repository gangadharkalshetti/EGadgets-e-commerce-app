import React from "react";

const orders = [
  {
    _id: "ORD12345",
    date: "2026-02-10",
    total: 84999,
    status: "Delivered",
    items: [
      { name: "iPhone 15", quantity: 1 },
      { name: "Wireless Headphones", quantity: 1 },
    ],
  },
  {
    _id: "ORD67890",
    date: "2026-02-12",
    total: 65000,
    status: "Pending",
    items: [{ name: "Gaming Laptop", quantity: 1 }],
  },
];

const Orders = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          📦 My Orders
        </h1>

        {orders.length === 0 ? (
          <p className="text-gray-500">You have no orders yet.</p>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order._id}
                className="border rounded-xl p-6 hover:shadow-md transition"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-700">
                      Order ID: {order._id}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      Date: {order.date}
                    </p>
                  </div>

                  <div className="mt-3 md:mt-0">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  {order.items.map((item, index) => (
                    <p key={index} className="text-gray-600">
                      • {item.name} × {item.quantity}
                    </p>
                  ))}
                </div>

                <div className="text-right font-semibold text-gray-800">
                  Total: ₹ {order.total}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Orders;

"use client";

import Layout from "@/src/adminPanel/Layout";

export default function List() {
  return (
    <Layout>
    <div className="p-4 md:p-6 space-y-6 bg-gray-100 min-h-screen">

      {/* 🔶 Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {[
          { title: "Payment Refund", value: "490" },
          { title: "Order Cancel", value: "241" },
          { title: "Order Shipped", value: "630" },
          { title: "Order Delivering", value: "170" },
          { title: "Pending Review", value: "210" },
          { title: "Pending Payment", value: "608" },
          { title: "Delivered", value: "200" },
          { title: "In Progress", value: "656" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-4 flex justify-between items-center shadow-sm"
          >
            <div>
              <p className="text-gray-500 text-sm">{item.title}</p>
              <h2 className="text-xl font-semibold">{item.value}</h2>
            </div>
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-500">
              ⦿
            </div>
          </div>
        ))}
      </div>

      {/* 🔷 Table Section */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">

        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-semibold">All Order List</h2>
          <button className="border px-3 py-1 rounded text-sm">
            This Month
          </button>
        </div>

        {/* Table Wrapper (IMPORTANT for responsiveness) */}
        <div className="overflow-x-auto">
          <table className="min-w-[1000px] w-full text-sm">
            <thead className="bg-gray-50 text-gray-500">
              <tr>
                <th className="p-3 text-left">Order ID</th>
                <th className="p-3 text-left">Created</th>
                <th className="p-3 text-left">Customer</th>
                <th className="p-3 text-left">Priority</th>
                <th className="p-3 text-left">Total</th>
                <th className="p-3 text-left">Payment</th>
                <th className="p-3 text-left">Items</th>
                <th className="p-3 text-left">Delivery</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, i) => (
                <tr key={i} className="border-t">
                  <td className="p-3">{order.id}</td>
                  <td className="p-3">{order.date}</td>
                  <td className="p-3 text-orange-500">{order.customer}</td>
                  <td className="p-3">{order.priority}</td>
                  <td className="p-3">{order.total}</td>

                  {/* Payment */}
                  <td className="p-3">
                    <Badge type={order.payment} />
                  </td>

                  <td className="p-3">{order.items}</td>
                  <td className="p-3">{order.delivery}</td>

                  {/* Status */}
                  <td className="p-3">
                    <Badge type={order.status} />
                  </td>

                  {/* Actions */}
                  <td className="p-3 flex gap-2">
                    <ActionBtn>👁</ActionBtn>
                    <ActionBtn>✏️</ActionBtn>
                    <ActionBtn>🗑</ActionBtn>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end p-4 gap-2">
          <button className="px-3 py-1 border rounded">Prev</button>
          <button className="px-3 py-1 bg-orange-500 text-white rounded">
            1
          </button>
          <button className="px-3 py-1 border rounded">2</button>
          <button className="px-3 py-1 border rounded">3</button>
          <button className="px-3 py-1 border rounded">Next</button>
        </div>
      </div>
    </div>

    </Layout>
  );
}

const orders = [
  {
    id: "#583488/80",
    date: "Apr 23, 2024",
    customer: "Gail C. Anderson",
    priority: "Normal",
    total: "$1230",
    payment: "Unpaid",
    items: 4,
    delivery: "-",
    status: "Draft",
  },
  {
    id: "#456754/80",
    date: "Apr 20, 2024",
    customer: "Jung S. Ayala",
    priority: "Normal",
    total: "$987",
    payment: "Paid",
    items: 2,
    delivery: "-",
    status: "Packaging",
  },
  {
    id: "#578246/80",
    date: "Apr 19, 2024",
    customer: "David A. Arnold",
    priority: "High",
    total: "$1478",
    payment: "Paid",
    items: 5,
    delivery: "#D-57837678",
    status: "Completed",
  },
];

function Badge({ type }) {
  const styles = {
    Paid: "bg-green-100 text-green-600",
    Unpaid: "bg-gray-200 text-gray-600",
    Refund: "bg-blue-100 text-blue-600",
    Completed: "bg-green-100 text-green-600",
    Cancelled: "bg-red-100 text-red-600",
    Packaging: "bg-yellow-100 text-yellow-600",
    Draft: "bg-gray-200 text-gray-600",
  };

  return (
    <span className={`px-2 py-1 rounded text-xs ${styles[type]}`}>
      {type}
    </span>
  );
}

function ActionBtn({ children }) {
  return (
    <button className="bg-gray-100 px-2 py-1 rounded hover:bg-gray-200">
      {children}
    </button>
  );
}
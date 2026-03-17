"use client";

import Layout from "@/src/adminPanel/Layout";
import { FiEye, FiEdit, FiTrash2 } from "react-icons/fi";

const products = [
  {
    name: "Black T-shirt",
    size: "S, M, L, XL",
    price: "$80.00",
    stock: "486 Item Left",
    sold: "155 Sold",
    category: "Fashion",
    rating: 4.5,
    reviews: 55,
    image: "https://via.placeholder.com/40",
  },
  {
    name: "Olive Green Leather Bag",
    size: "S, M",
    price: "$136.00",
    stock: "784 Item Left",
    sold: "674 Sold",
    category: "Hand Bag",
    rating: 4.1,
    reviews: 143,
    image: "https://via.placeholder.com/40",
  },
  {
    name: "Women Golden Dress",
    size: "S, M",
    price: "$219.00",
    stock: "769 Item Left",
    sold: "180 Sold",
    category: "Fashion",
    rating: 4.4,
    reviews: 174,
    image: "https://via.placeholder.com/40",
  },
];

export default function List() {
  return (
    <Layout>
      <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
        <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-5">
            <h2 className="text-lg font-semibold text-gray-800">
              All Product List
            </h2>

            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-4 py-2 rounded-lg text-sm w-full sm:w-auto">
                Add Product
              </button>
              <select className="border border-gray-200 focus:ring-2 focus:ring-orange-100 outline-none px-3 py-2 rounded-lg text-sm w-full sm:w-auto">
                <option>This Month</option>
              </select>
            </div>
          </div>

          {/* Responsive Table */}
          <div className="w-full overflow-x-auto">
            <table className="min-w-[700px] w-full text-sm border-separate border-spacing-y-2">
              <thead>
                <tr className="text-gray-500 text-xs uppercase">
                  <th className="text-left px-3 py-2">
                    <input type="checkbox" />
                  </th>
                  <th className="text-left px-3 py-2">Product</th>
                  <th className="text-left px-3 py-2">Price</th>
                  <th className="text-left px-3 py-2">Stock</th>
                  <th className="text-left px-3 py-2">Category</th>
                  <th className="text-left px-3 py-2">Rating</th>
                  <th className="text-left px-3 py-2">Action</th>
                </tr>
              </thead>

              <tbody>
                {products.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-gray-50 hover:bg-gray-100 transition rounded-xl"
                  >
                    <td className="px-3 py-3">
                      <input type="checkbox" />
                    </td>

                    <td className="px-3 py-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          className="w-10 h-10 rounded-md"
                          alt=""
                        />
                        <div>
                          <p className="font-medium text-gray-800 whitespace-nowrap">
                            {item.name}
                          </p>
                          <p className="text-gray-400 text-xs">
                            Size: {item.size}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-3 py-3 font-medium whitespace-nowrap">
                      {item.price}
                    </td>

                    <td className="px-3 py-3 whitespace-nowrap">
                      <p>{item.stock}</p>
                      <p className="text-gray-400 text-xs">{item.sold}</p>
                    </td>

                    <td className="px-3 py-3 whitespace-nowrap">
                      {item.category}
                    </td>

                    <td className="px-3 py-3 whitespace-nowrap">
                      ⭐ {item.rating}
                      <span className="text-gray-400 text-xs ml-1">
                        ({item.reviews})
                      </span>
                    </td>

                    <td className="px-3 py-3">
                      <div className="flex gap-2">
                        <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg">
                          <FiEye size={14} />
                        </button>
                        <button className="p-2 bg-orange-100 text-orange-500 hover:bg-orange-200 rounded-lg">
                          <FiEdit size={14} />
                        </button>
                        <button className="p-2 bg-red-100 text-red-500 hover:bg-red-200 rounded-lg">
                          <FiTrash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-2 mt-6">
            <button className="px-3 py-1 border rounded text-sm">Previous</button>
            <button className="px-3 py-1 bg-orange-500 text-white rounded text-sm">
              1
            </button>
            <button className="px-3 py-1 border rounded text-sm">2</button>
            <button className="px-3 py-1 border rounded text-sm">3</button>
            <button className="px-3 py-1 border rounded text-sm">Next</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

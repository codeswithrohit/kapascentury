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
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-xl shadow-sm p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">All Product List</h2>

          <div className="flex gap-2">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm">
              Add Product
            </button>
            <select className="border px-3 py-2 rounded-lg text-sm">
              <option>This Month</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-gray-500 border-b">
              <tr>
                <th className="text-left py-3">
                  <input type="checkbox" />
                </th>
                <th className="text-left py-3">Product Name & Size</th>
                <th className="text-left py-3">Price</th>
                <th className="text-left py-3">Stock</th>
                <th className="text-left py-3">Category</th>
                <th className="text-left py-3">Rating</th>
                <th className="text-left py-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {products.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  {/* Checkbox */}
                  <td className="py-3">
                    <input type="checkbox" />
                  </td>

                  {/* Product */}
                  <td className="py-3 flex items-center gap-3">
                    <img
                      src={item.image}
                      className="w-10 h-10 rounded-md"
                      alt=""
                    />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-gray-400 text-xs">
                        Size: {item.size}
                      </p>
                    </div>
                  </td>

                  {/* Price */}
                  <td className="py-3">{item.price}</td>

                  {/* Stock */}
                  <td className="py-3">
                    <p>{item.stock}</p>
                    <p className="text-gray-400 text-xs">{item.sold}</p>
                  </td>

                  {/* Category */}
                  <td className="py-3">{item.category}</td>

                  {/* Rating */}
                  <td className="py-3">
                    ⭐ {item.rating}{" "}
                    <span className="text-gray-400 text-xs">
                      {item.reviews} Review
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="py-3">
                    <div className="flex gap-2">
                      <button className="p-2 bg-gray-100 rounded">
                        <FiEye size={14} />
                      </button>
                      <button className="p-2 bg-orange-100 text-orange-500 rounded">
                        <FiEdit size={14} />
                      </button>
                      <button className="p-2 bg-red-100 text-red-500 rounded">
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
        <div className="flex justify-end items-center gap-2 mt-4">
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
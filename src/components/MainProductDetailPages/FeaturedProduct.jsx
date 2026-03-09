"use client";

export default function FeaturedProduct() {

  const products = [
    {
      id: 1,
      name: "Designer Kurti",
      price: "₹350",
      image: "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_1_2.jpg?v=1757989103&width=480"
    },
    {
      id: 2,
      name: "Festive Saree",
      price: "₹520",
      image: "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_6_2.webp?v=1758095003&width=480"
    },
    {
      id: 3,
      name: "Anarkali Suit",
      price: "₹680",
      image: "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_7_2.webp?v=1758097443&width=480"
    }
  ];

  return (
    <div className="space-y-4 mt-4">
      {products.map((product) => (
        <div key={product.id} className="flex gap-3 items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-16 h-25 object-cover rounded"
          />

          <div>
            <p className="text-sm font-medium">{product.name}</p>
            <p className="text-gray-500 text-sm">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
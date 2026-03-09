import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "Mauve Pink Embroidered Tissue",
    price: 225,
    oldPrice: 250,
    image:
      "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_2_2.jpg?v=1757989565&width=660",
    discount: "-10%",
  },
  {
    id: 2,
    title: "Black Silk Eid Lehenga & Choli",
    price: 180,
    image:
      "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_3_2.jpg?v=1757989892&width=720",
  },
  {
    id: 3,
    title: "Light Maroon Embroidered Trouser",
    price: 310,
    image:
      "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_4_2.jpg?v=1757990041&width=720",
  },
  {
    id: 4,
    title: "Navy Blue Sequin Embroidered",
    price: 285,
    image:
      "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_5_2.jpg?v=1757990552&width=720",
    tag: "Pre-Order",
  },
  {
    id: 5,
    title: "Woven Design Organza Saree",
    price: 350,
    oldPrice: 400,
    image:
      "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_7_2.webp?v=1758097443&width=660",
    discount: "-13%",
  },
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((item, index) => (
        <ProductCard key={index} {...item} />
      ))}
    </div>
  );
}
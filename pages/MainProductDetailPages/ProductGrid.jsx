import ProductCard from "./ProductCard";

const products = [
  {
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c",
    title: "Green Embroidered Lehenga Set",
    price: 190,
  },
  {
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    title: "Embroidered Silk Blend Kurta Set",
    price: 210,
  },
  {
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    title: "Embroidered Silk Blend Kurta Set",
    price: 210,
  },
  {
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    title: "Embroidered Silk Blend Kurta Set",
    price: 210,
  },
  {
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    title: "Embroidered Silk Blend Kurta Set",
    price: 210,
  },
  {
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    title: "Embroidered Silk Blend Kurta Set",
    price: 210,
  },
  {
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    title: "Embroidered Silk Blend Kurta Set",
    price: 210,
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
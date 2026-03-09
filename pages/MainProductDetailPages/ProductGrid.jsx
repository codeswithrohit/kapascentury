import ProductCard from "./ProductCard";

const products = [
  { id: "1",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c",
    title: "Green Embroidered Lehenga Set",
    price: 190,
  },
  { id: "2",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    title: "Saree",
    price: 210,
  },
  { id: "3",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    title: "red suit",
    price: 210,
  },
  { id: "4",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    title: "pink suit",
    price: 210,
  },
  { id: "5",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    title: "black saree",
    price: 210,
  },
  { id: "6",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    title: "red top",
    price: 210,
  },
  { id: "7",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    title: "green cloths",
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
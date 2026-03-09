import { useState } from "react";

export default function ProductLeftSidebar() {

  const images = [
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8",
    "https://images.unsplash.com/photo-1585487000143-6a5f8c0cbe3f",
    "https://images.unsplash.com/photo-1617137968427-85924c800a22",
    "https://images.unsplash.com/photo-1622445275576-721325763afe"
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="flex gap-4">

      {/* Thumbnails */}
      <div className="flex flex-col gap-3">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="thumb"
            onClick={() => setMainImage(img)}
            className="w-15 h-20 object-cover cursor-pointer border rounded hover:border-black"
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1">
        <img
          src={mainImage}
          alt="main"
          className="w-full h-full md:h-[750px] object-cover rounded-lg"
        />
      </div>

    </div>
  );
}
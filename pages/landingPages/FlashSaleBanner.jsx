"use client";

import { useEffect, useState } from "react";

export default function FlashSaleBanner() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 50);

  const calculateTime = () => {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      mins: Math.floor((distance / (1000 * 60)) % 60),
      secs: Math.floor((distance / 1000) % 60),
    };
  };

  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-6 py-10">
      <div
        className="relative rounded-3xl overflow-hidden h-[180px] flex items-center justify-between px-10"
        style={{
          backgroundImage:
            "url(https://demo2-milano.myshopify.com/cdn/shop/files/fs8_sale.jpg?v=1758101571&width=1920)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 "></div>

        {/* Left Content */}
        <div className="relative text-white max-w-md">
          <h2 className="text-4xl font-serif font-semibold">
            Flash Sale now on!
          </h2>
          <p className="text-sm mt-2">
            Score Big Savings on All Your Favorites
          </p>
        </div>

        {/* Timer */}
        <div className="relative flex gap-4 text-center">
          <TimerBox value={time.days} label="DAYS" />
          <TimerBox value={time.hours} label="HOUR" />
          <TimerBox value={time.mins} label="MINS" />
          <TimerBox value={time.secs} label="SECS" />
        </div>

        {/* Right Button */}
        <div className="relative flex items-center gap-6">
          <span className="text-white text-lg">Topsale10STBL</span>

          <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
            Shop Sale
          </button>
        </div>
      </div>
    </section>
  );
}

function TimerBox({ value, label }) {
  return (
    <div>
      <div className="bg-white text-black px-4 py-2 rounded-md text-xl font-semibold">
        {value}
      </div>
      <div className="text-white text-xs mt-1">{label}</div>
    </div>
  );
}
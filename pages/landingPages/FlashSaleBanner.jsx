"use client";

import { useEffect, useState, useRef } from "react";

export default function FlashSaleBanner() {

  const targetDateRef = useRef(null);

  if (!targetDateRef.current) {
    const target = new Date();
    target.setDate(target.getDate() + 50);
    targetDateRef.current = target;
  }

  const calculateTime = () => {
    const now = new Date().getTime();
    const distance = targetDateRef.current.getTime() - now;

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
    <section className="px-4 sm:px-6 py-8 sm:py-10">
      <div
        className="relative rounded-3xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0 px-6 sm:px-8 lg:px-10 py-8 lg:py-0 min-h-[220px] lg:h-[180px]"
        style={{
          backgroundImage:
            "url(https://demo2-milano.myshopify.com/cdn/shop/files/fs8_sale.jpg?v=1758101571&width=1920)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative text-white text-center lg:text-left max-w-md">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold">
            Flash Sale now on!
          </h2>
          <p className="text-sm mt-2">
            Score Big Savings on All Your Favorites
          </p>
        </div>

        <div className="relative flex gap-3 sm:gap-4 text-center">
          <TimerBox value={time.days} label="DAYS" />
          <TimerBox value={time.hours} label="HOUR" />
          <TimerBox value={time.mins} label="MINS" />
          <TimerBox value={time.secs} label="SECS" />
        </div>

        <div className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center">
          <span className="text-white text-sm sm:text-lg font-medium">
            Topsale10STBL
          </span>

          <button className="border border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-white hover:text-black transition text-sm sm:text-base">
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
      <div className="bg-white text-black px-3 sm:px-4 py-1 sm:py-2 rounded-md text-lg sm:text-xl font-semibold">
        {value}
      </div>
      <div className="text-white text-[10px] sm:text-xs mt-1">
        {label}
      </div>
    </div>
  );
}
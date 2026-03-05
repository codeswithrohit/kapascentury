"use client";

export default function AnnouncementBar() {
  return (
    <div className="bg-[#7b0f23] text-white overflow-hidden">
      <div className="marquee-wrapper">
        <div className="marquee flex items-center gap-16 py-3 text-sm md:text-base font-medium">
          <span>✦ Order by Oct 5th For Guaranteed Diwali Delivery</span>
          <span>✦ ₹20 Duty/Tariff Fee - Learn More</span>
          <span>✦ Free Shipping On All Orders Above ₹100</span>
          <span>✦ Up to 50% Festive Sale Live Now</span>
        </div>
        {/* duplicate for smooth infinite scroll */}
        <div className="marquee flex items-center gap-16 py-3 text-sm md:text-base font-medium" aria-hidden>
          <span>✦ Order by Oct 5th For Guaranteed Diwali Delivery</span>
          <span>✦ ₹20 Duty/Tariff Fee - Learn More</span>
          <span>✦ Free Shipping On All Orders Above ₹100</span>
          <span>✦ Up to 50% Festive Sale Live Now</span>
        </div>
      </div>
      <style jsx>{`
        .marquee-wrapper {
          overflow: hidden;
          white-space: nowrap;
        }

        .marquee {
          display: inline-flex;
          gap: 3rem; /* spacing between items; keeps same gap when looping */
          align-items: center;
          transform: translateX(0);
          animation: marquee 28s linear infinite;
        }

        /* pause on hover */
        .marquee-wrapper:hover .marquee {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee { animation: none; }
        }
      `}</style>
    </div>
  );
}
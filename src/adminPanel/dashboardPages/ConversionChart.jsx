"use client";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function ConversionChart() {

  const options = {
    chart: {
      type: "radialBar",
      sparkline: { enabled: true }
    },
    plotOptions: {
      radialBar: {
        startAngle: -120,
        endAngle: 120,
        hollow: {
          size: "65%"
        },
        track: {
          background: "#e5e7eb"
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            fontSize: "18px",
            fontWeight: 600,
            offsetY: 5,
            formatter: function (val) {
              return val + "%";
            }
          }
        }
      }
    },
    colors: ["#f97316"],
  };

  const series = [65.2];

  return (
    <div className="bg-white rounded-xl shadow p-6 w-full">

      <h2 className="font-semibold text-gray-700 mb-4">
        Conversions
      </h2>

      {/* Chart */}
      <div className="flex justify-center">
        <Chart
          options={options}
          series={series}
          type="radialBar"
          height={220}
        />
      </div>

      <p className="text-center text-gray-500 -mt-6 text-sm">
        Returning Customer
      </p>

      {/* Bottom Stats */}
      <div className="flex justify-between mt-8 text-center">

        <div>
          <p className="text-gray-400 text-sm">
            This Week
          </p>
          <h3 className="font-semibold text-lg">
            23.5k
          </h3>
        </div>

        <div>
          <p className="text-gray-400 text-sm">
            Last Week
          </p>
          <h3 className="font-semibold text-lg">
            41.05k
          </h3>
        </div>

      </div>

      {/* Button */}
      <div className="mt-6">
        <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm py-2 rounded-lg">
          View Details
        </button>
      </div>

    </div>
  );
}
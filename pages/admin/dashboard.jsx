"use client";

import StatCard from "../../src/adminPanel/dashboardPages/StatCard";
import PerformanceChart from "../../src/adminPanel/dashboardPages/PerformanceChart";
import ConversionChart from "../../src/adminPanel/dashboardPages/ConversionChart";
import MapSection from "../../src/adminPanel/dashboardPages/MapSection";
import TopPagesTable from "../../src/adminPanel/dashboardPages/TopPagesTable";
import OrdersTable from "../../src/adminPanel/dashboardPages/OrdersTable";
import Layout from "../../src/adminPanel/Layout";

export default function Dashboard() {
  return (
    <Layout>
      
      <div className="space-y-6">
        
        {/* Alert */}
        <div className="bg-orange-100 text-orange-700 p-3 rounded">
          We regret to inform you that our server is currently experiencing technical difficulties.
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Total Orders" value="13,647" growth="+2.3%" />
          <StatCard title="New Leads" value="9,526" growth="+8.1%" />
          <StatCard title="Deals" value="976" growth="-0.3%" />
          <StatCard title="Booked Revenue" value="$123.6k" growth="-10.6%" />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PerformanceChart />
          <ConversionChart />
        </div>

        {/* Sessions + Top Pages */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <MapSection />
          <TopPagesTable />
        </div>

        {/* Orders */}
        <OrdersTable />

      </div>

    </Layout>
  );
}
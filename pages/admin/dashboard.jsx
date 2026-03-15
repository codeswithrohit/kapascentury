import Sidebar from "../../src/adminPanel/Sidebar";
import Navbar from "../../src/adminPanel/Navbar";
import StatCard from "../../src/adminPanel/StatCard.jsx";
import PerformanceChart from "../../src/adminPanel/PerformanceChart";
import ConversionChart from "../../src/adminPanel/ConversionChart";
import MapSection from "../../src/adminPanel/MapSection";
import TopPagesTable from "../../src/adminPanel/TopPagesTable";
import OrdersTable from "../../src/adminPanel/OrdersTable";

export default function Dashboard() {

return (

<div className="flex bg-gray-100 min-h-screen">

{/* SIDEBAR */}
<Sidebar />

{/* MAIN CONTENT */}
<div className="flex-1 ml-64">

<Navbar/>

<div className="p-6 space-y-6">

<div className="bg-orange-100 text-orange-700 p-3 rounded">
We regret to inform you that our server is currently experiencing technical difficulties.
</div>

<div className="grid md:grid-cols-4 gap-4">

<StatCard title="Total Orders" value="13,647" growth="+2.3%" />

<StatCard title="New Leads" value="9,526" growth="+8.1%" />

<StatCard title="Deals" value="976" growth="-0.3%" />

<StatCard title="Booked Revenue" value="$123.6k" growth="-10.6%" />

</div>

<PerformanceChart />

<ConversionChart />

<MapSection />

<TopPagesTable />

<OrdersTable />

</div>

</div>

</div>

);
}
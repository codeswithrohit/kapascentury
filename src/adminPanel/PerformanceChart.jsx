"use client"

import {
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend
} from "recharts"

const data = [
{month:"Jan",views:33,clicks:8},
{month:"Feb",views:64,clicks:12},
{month:"Mar",views:45,clicks:7},
{month:"Apr",views:67,clicks:18},
{month:"May",views:48,clicks:22},
{month:"Jun",views:60,clicks:12},
{month:"Jul",views:41,clicks:5},
{month:"Aug",views:43,clicks:9},
{month:"Sep",views:77,clicks:6},
{month:"Oct",views:51,clicks:28},
{month:"Nov",views:62,clicks:12},
{month:"Dec",views:66,clicks:34},
]

export default function PerformanceChart(){

return(

<div className="bg-white rounded-2xl shadow p-6 w-full">

{/* Header */}

<div className="flex items-center justify-between mb-6">

<h2 className="text-lg font-semibold text-gray-700">
Performance
</h2>

<div className="flex gap-2 text-sm">

<button className="px-3 py-1 rounded-lg border bg-gray-100">
ALL
</button>

<button className="px-3 py-1 rounded-lg border">
1M
</button>

<button className="px-3 py-1 rounded-lg border">
6M
</button>

<button className="px-3 py-1 rounded-lg border bg-gray-200">
1Y
</button>

</div>

</div>


{/* Chart */}

<ResponsiveContainer width="100%" height={320}>

<BarChart data={data} barGap={10}>

<CartesianGrid
strokeDasharray="4 4"
vertical={false}
stroke="#e5e7eb"
/>

<XAxis
dataKey="month"
tick={{fill:"#6b7280"}}
axisLine={false}
tickLine={false}
/>

<YAxis
tick={{fill:"#6b7280"}}
axisLine={false}
tickLine={false}
/>

<Tooltip
cursor={{fill:"rgba(0,0,0,0.04)"}}
/>

<Legend
iconType="circle"
/>

<Bar
dataKey="views"
name="Page Views"
fill="#f97316"
radius={[6,6,0,0]}
/>

<Line
type="monotone"
dataKey="clicks"
name="Clicks"
stroke="#22c55e"
strokeWidth={3}
dot={false}
/>

</BarChart>

</ResponsiveContainer>

</div>

)
}
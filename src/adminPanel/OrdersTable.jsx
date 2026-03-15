"use client"

import Image from "next/image"

export default function OrdersTable() {

const orders = [
{
id:"#RB5625",
date:"29 April 2024",
product:"/laptop.png",
name:"Anna M. Hines",
email:"anna.hines@mail.com",
phone:"(+1)-555-1564-261",
address:"Burr Ridge/Illinois",
payment:"Credit Card",
status:"Completed"
},
{
id:"#RB9652",
date:"25 April 2024",
product:"/camera.png",
name:"Judith H. Fritsche",
email:"judith.fritsche.com",
phone:"(+57)-305-5579-759",
address:"SULLIVAN/Kentucky",
payment:"Credit Card",
status:"Completed"
},
{
id:"#RB5984",
date:"25 April 2024",
product:"/watch.png",
name:"Peter T. Smith",
email:"peter.smith@mail.com",
phone:"(+33)-655-5187-93",
address:"Yreka/California",
payment:"PayPal",
status:"Completed"
},
{
id:"#RB3625",
date:"21 April 2024",
product:"/phone.png",
name:"Emmanuel J. Delcid",
email:"emmanuel.delicid@mail.com",
phone:"(+30)-693-5553-637",
address:"Atlanta/Georgia",
payment:"PayPal",
status:"Processing"
},
{
id:"#RB8652",
date:"18 April 2024",
product:"/laptop.png",
name:"William J. Cook",
email:"william.cook@mail.com",
phone:"(+91)-855-5446-150",
address:"Rosenberg/Texas",
payment:"Credit Card",
status:"Processing"
},
]

const getStatusColor = (status)=>{
if(status==="Completed") return "bg-green-500"
return "bg-orange-500"
}

return(

<div className="bg-white rounded-2xl shadow w-full">

{/* HEADER */}

<div className="flex items-center justify-between p-6 border-b">

<h2 className="text-lg font-semibold text-gray-700">
Recent Orders
</h2>

<button className="flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-lg text-sm hover:bg-orange-200">
+ Create Order
</button>

</div>

{/* TABLE */}

<div className="overflow-x-auto">

<table className="w-full text-sm">

<thead className="bg-gray-50 text-gray-500">

<tr>

<th className="px-6 py-4 text-left">Order ID.</th>
<th className="px-6 py-4 text-left">Date</th>
<th className="px-6 py-4 text-left">Product</th>
<th className="px-6 py-4 text-left">Customer Name</th>
<th className="px-6 py-4 text-left">Email ID</th>
<th className="px-6 py-4 text-left">Phone No.</th>
<th className="px-6 py-4 text-left">Address</th>
<th className="px-6 py-4 text-left">Payment Type</th>
<th className="px-6 py-4 text-left">Status</th>

</tr>

</thead>

<tbody>

{orders.map((order,i)=>(

<tr
key={i}
className="border-t hover:bg-gray-50 transition"
>

<td className="px-6 py-4 text-blue-600 font-medium">
{order.id}
</td>

<td className="px-6 py-4 text-gray-500">
{order.date}
</td>

<td className="px-6 py-4">

<div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">

<Image
src={order.product}
width={28}
height={28}
alt="product"
/>

</div>

</td>

<td className="px-6 py-4 font-medium">
{order.name}
</td>

<td className="px-6 py-4 text-gray-500">
{order.email}
</td>

<td className="px-6 py-4 text-gray-500">
{order.phone}
</td>

<td className="px-6 py-4 text-gray-500">
{order.address}
</td>

<td className="px-6 py-4">
{order.payment}
</td>

<td className="px-6 py-4 flex items-center gap-2">

<span className={`w-3 h-3 rounded-full ${getStatusColor(order.status)}`}></span>

<span className="text-gray-600">
{order.status}
</span>

</td>

</tr>

))}

</tbody>

</table>

</div>

{/* FOOTER */}



</div>

)
}
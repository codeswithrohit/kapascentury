export default function TopPagesTable() {

const data = [
{page:"larkon/ecommerce.html",views:465,rate:"4.4%"},
{page:"larkon/dashboard.html",views:426,rate:"20.4%"},
{page:"larkon/chat.html",views:254,rate:"12.5%"},
{page:"larkon/auth-login.html",views:3369,rate:"5.2%"},
{page:"larkon/email.html",views:985,rate:"64.2%"},
{page:"larkon/social.html",views:653,rate:"2.4%"},
{page:"larkon/blog.html",views:478,rate:"1.4%"},
]

const getRateColor = (rate)=>{
const value = parseFloat(rate)

if(value < 5) return "bg-green-100 text-green-600"
if(value < 20) return "bg-yellow-100 text-yellow-600"
return "bg-red-100 text-red-600"
}

return (

<div className="bg-white rounded-xl shadow">

{/* HEADER */}

<div className="flex items-center justify-between p-6 border-b">

<h2 className="font-semibold text-gray-700 text-lg">
Top Pages
</h2>

<button className="text-sm bg-orange-100 text-orange-600 px-3 py-1 rounded hover:bg-orange-200 transition">
View All
</button>

</div>

{/* TABLE */}

<div className="overflow-x-auto">

<table className="w-full text-sm">

<thead className="bg-gray-50 text-gray-500">

<tr>

<th className="text-left py-3 px-6 font-medium">
Page Path
</th>

<th className="text-left py-3 px-6 font-medium">
Page Views
</th>

<th className="text-left py-3 px-6 font-medium">
Exit Rate
</th>

</tr>

</thead>

<tbody>

{data.map((item,i)=>(
<tr 
key={i} 
className="border-t hover:bg-gray-50 transition"
>

<td className="py-4 px-6 text-gray-700">
{item.page}
</td>

<td className="py-4 px-6 font-medium">
{item.views}
</td>

<td className="py-4 px-6">

<span className={`px-2 py-1 rounded text-xs font-medium ${getRateColor(item.rate)}`}>
{item.rate}
</span>

</td>

</tr>
))}

</tbody>

</table>

</div>

</div>

)
}
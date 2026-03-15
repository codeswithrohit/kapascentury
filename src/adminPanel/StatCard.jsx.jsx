export default function StatCard({title,value,growth}){

return(

<div className="bg-white rounded-xl shadow p-5 flex justify-between">

<div>
<p className="text-gray-500 text-sm">{title}</p>
<h2 className="text-2xl font-bold">{value}</h2>

<p className={`text-sm ${growth.includes('-') ? "text-red-500":"text-green-500"}`}>
{growth} Last Month
</p>

</div>

<div className="bg-orange-100 h-12 w-12 rounded-lg"/>

</div>

)
}
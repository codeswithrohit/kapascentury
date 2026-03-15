export default function MapSection() {
  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="font-semibold mb-4">
        Sessions by Country
      </h2>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
        className="w-full opacity-80"
        alt="world map"
      />

      <div className="flex justify-between mt-4 text-sm text-gray-500">
        <span>This Week: <b>23.5k</b></span>
        <span>Last Week: <b>41.05k</b></span>
      </div>

    </div>
  );
}
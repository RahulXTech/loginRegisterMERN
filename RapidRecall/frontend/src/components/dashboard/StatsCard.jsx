import React from "react";

const StatsCard = ({ title, value }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <h3 className="text-gray-500 text-sm mb-2">
        {title}
      </h3>

      <h2 className="text-3xl font-bold text-gray-800">
        {value}
      </h2>
    </div>
  );
};

export default StatsCard;
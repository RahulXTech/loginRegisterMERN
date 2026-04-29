import React from "react";

const PerformanceChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">
        Subject-wise Performance
      </h2>

      <div className="space-y-4">
        <div>
          <p>JavaScript - 85%</p>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-blue-600 h-3 rounded-full w-[85%]"></div>
          </div>
        </div>

        <div>
          <p>React - 72%</p>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-green-500 h-3 rounded-full w-[72%]"></div>
          </div>
        </div>

        <div>
          <p>Node.js - 65%</p>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-purple-500 h-3 rounded-full w-[65%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;
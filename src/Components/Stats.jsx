import React from "react";

const StatsSection = () => {
  const stats = [
    { value: "6", label: "yildan beri bozorda", color: "text-red-500", dot: "bg-red-500" },
    { value: "14000", label: "Printerlar ta'mirlandi", color: "text-yellow-500", dot: "bg-yellow-500" },
    { value: "250", label: "Fikr-mulohazalar", color: "text-green-500", dot: "bg-green-500" },
  ];

  return (
    <div className="bg-white py-10 rounded-t-[50px] ">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className={`w-3 h-3 rounded-full ${stat.dot}`}></span>
            <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
            <span className="text-gray-500">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;

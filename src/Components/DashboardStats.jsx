import React from "react";
import { FiFileText, FiBookOpen, FiMessageSquare, FiUser } from "react-icons/fi";

const DashboardStats = () => {
  const stats = [
    { title: "Pending Reviews", value: 0, icon: <FiFileText />, progress: 65 },
    { title: "Courses Assigned", value: 0, icon: <FiBookOpen />, progress: 100 },
    { title: "Feedback Given", value: 0, icon: <FiMessageSquare />, progress: 78 },
    { title: "Career Guidance", value: 0, icon: <FiUser />, progress: 45 },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-700 mb-4">📊 Statistics</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition flex items-center gap-4">
            <div className="text-blue-600 text-3xl">{stat.icon}</div>
            <div>
              <h3 className="text-gray-700 font-semibold">{stat.title}</h3>
              <p className="text-3xl font-bold">{stat.value}</p>
              <div className="h-2 bg-gray-200 mt-2 rounded-full w-full">
                <div className="h-2 bg-blue-600 rounded-full" style={{ width: `${stat.progress}%` }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardStats;

import React from "react";
import { FiClipboard, FiMessageSquare, FiUser } from "react-icons/fi";
import Button from "./Button"; // Importing the Button component

const DashboardActions = () => {
  const actions = [
    { title: "Review Work", icon: <FiClipboard />, action: "Start Reviewing" },
    { title: "Provide Feedback", icon: <FiMessageSquare />, action: "View Feedback Queue" },
    { title: "Career Guidance", icon: <FiUser />, action: "Provide Guidance" },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {actions.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-6 text-center border hover:shadow-xl transition"
        >
          <div className="text-blue-600 text-3xl mb-2">{item.icon}</div>
          <h4 className="text-gray-700 font-semibold mb-3">{item.title}</h4>
          <Button>{item.action}</Button>
        </div>
      ))}
    </div>
  );
};

export default DashboardActions;

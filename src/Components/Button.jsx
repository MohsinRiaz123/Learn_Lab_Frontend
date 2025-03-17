import React from "react";

const Button = ({ children, variant = "primary", onClick }) => (
  <button
    onClick={onClick}
    className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
      variant === "outline"
        ? "border border-gray-300 text-gray-700 hover:bg-gray-200"
        : "bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:opacity-90"
    }`}
  >
    {children}
  </button>
);

export default Button;

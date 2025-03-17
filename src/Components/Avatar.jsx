import React from "react";

const Avatar = ({ src, fallback }) => (
  <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center border shadow-md">
    {src ? <img src={src} alt="User" className="h-full w-full rounded-full" /> : <span className="font-bold text-gray-700">{fallback}</span>}
  </div>
);

export default Avatar;

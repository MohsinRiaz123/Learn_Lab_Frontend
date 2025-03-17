import React from "react";
import { FiBell, FiBookOpen } from "react-icons/fi";
import Avatar from "./Avatar";
import Button from "./Button";

const Navbar = ({ activeTab, setActiveTab }) => (
  <header className="sticky top-0 z-10 bg-white px-6 py-4 flex justify-between items-center shadow-md">
    <div className="flex items-center gap-4">
      <a href="#" className="flex items-center gap-2 font-bold text-blue-600 text-xl">
        <FiBookOpen className="h-7 w-7" />
        <span>LearnLab</span>
      </a>
      <nav className="hidden md:flex items-center gap-6">
        {["dashboard", "messages"].map((tab) => (
          <button
            key={tab}
            className={`text-sm font-medium transition ${
              activeTab === tab ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-blue-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>
    </div>
    <div className="flex items-center gap-4">
      <Button variant="ghost">
        <FiBell className="h-5 w-5 text-gray-600 hover:text-blue-600 transition" />
      </Button>
      <Avatar src="/placeholder-user.jpg" fallback="JD" />
    </div>
  </header>
);

export default Navbar;

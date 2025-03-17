import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import DashboardStats from "./Components/DashboardStats";
import DashboardActions from "./Components/DashboardActions";
import RecentSubmissions from "./Components/RecentSubmissions";
import LandingFooter from "./Components/LandingFooter";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="p-6">
        {/* Statistics Section */}
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Statistics</h2>
        <DashboardStats />

        {/* Mentorship & Feedback Section */}
        <h2 className="text-2xl font-bold text-gray-700 mt-8 mb-4">Mentorship & Feedback</h2>
        <DashboardActions />


        {/* Recent Submissions Section */}
        <h2 className="text-2xl font-bold text-gray-700 mt-8 mb-4">Recent Submissions</h2>
        <RecentSubmissions />
      </main>

      {/* Footer */}
      <LandingFooter />
    </div>
  );
}

export default App;

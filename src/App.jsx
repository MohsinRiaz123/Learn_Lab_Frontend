import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUS from "./Pages/AboutUS";

function App() {
  return (
    <Router>
      <div className="font-montserrat">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUS />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUS from "./Pages/AboutUS";
import ContactUs from "./Pages/ContactUs";
import LoginPage from "./Pages/LoginPage";
import StudentSignup from "./Pages/StudentSignup";
import InstructorSignup from "./Pages/InstructorSignup";

function App() {
  return (
    <Router>
      <div className="font-montserrat">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/studentSignup" element={<StudentSignup/>} />
          <Route path="/instructorSignup" element={<InstructorSignup/>} />
          <Route path="/about" element={<AboutUS />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

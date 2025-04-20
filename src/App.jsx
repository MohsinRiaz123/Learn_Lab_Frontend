import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUS from "./Pages/AboutUS";
import ContactUs from "./Pages/ContactUs";
import LoginPage from "./Pages/LoginPage";
import StudentSignup from "./Pages/StudentSignup";
import InstructorSignup from "./Pages/InstructorSignup";
import ForgotPassword from "./Pages/ForgotPassword";
import StudentDashboardLayout from "./UI/StudentDashboardLayout";
import Dashboard from "./Pages/Student/Dashboard";
import MyProfile from "./Pages/Student/Profile";
import Reviews from "./Pages/Student/Reviews";
import QuizAttempts from "./Pages/Student/QuizAttempt";
import EnrolledCourses from "./Pages/Student/EnrolledCourses";
import Setting from "./Pages/Student/Setting";
function App() {
  return (
    <Router>
      <div className="font-montserrat">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/studentSignup" element={<StudentSignup />} />
          <Route path="/instructorSignup" element={<InstructorSignup />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/about" element={<AboutUS />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* ---------------Student dashboard Routing ------------------------- */}

          <Route path="/student" element={<StudentDashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<MyProfile />} />
            <Route path="courses" element={<EnrolledCourses />} />
            <Route path="quizzes" element={<QuizAttempts />} />
            <Route path="reviews" element={<Reviews/>} />
            <Route path="setting" element={<Setting/>} />
          
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { StudentDashboard } from "./components/Dashbord/StudentDashboard";
import { TeacherDashboard } from "./components/Dashbord/TeachersDashboard";
import { AdminDashboard } from "./components/Dashbord/AdminDashboard";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="student_dashboard" element={<StudentDashboard />} />
      <Route path="teachers_dashboard" element={<TeacherDashboard />} />
      <Route path="admins_dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;

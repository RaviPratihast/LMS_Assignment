import { useDashboard } from "../../context/DashboardContext";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const { state } = useDashboard();
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between md:flex-row gap-4 bg-blue-100 p-4 rounded-lg">
        <h1 className="font-bold">Admins Dashboard</h1>
        <button
          className="px-4 py-2 bg-blue-600 hover:bg-blue-100 hover:text-blue-600 border hover:border-blue-600 text-white rounded-lg "
          onClick={() => navigate("/login")}
        >
          Logout
        </button>
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[250px] bg-blue-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold text-blue-800">Total Students</h2>
          <p className="text-4xl text-center font-bold text-blue-600">
            {state.totalStudents}
          </p>
        </div>
        <div className="flex-1 min-w-[250px] bg-blue-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold text-blue-800">Total Teachers</h2>
          <p className="text-4xl text-center font-bold text-blue-600">
            {state.teachers}
          </p>
        </div>
        <div className="flex-1 min-w-[250px] bg-blue-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold text-blue-800">
            Today's Present Students
          </h2>
          <p className="text-4xl text-center font-bold text-blue-600">
            {state.todayPresentStudents}
          </p>
        </div>
        <div className="flex-1 min-w-[250px] bg-blue-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold text-blue-800">
            Today's Present Teachers
          </h2>
          <p className="text-4xl text-center font-bold text-blue-600">
            {state.todayPresentTeachers}
          </p>
        </div>
      </div>
    </div>
  );
};

export { AdminDashboard };

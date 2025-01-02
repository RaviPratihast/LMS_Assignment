import { useDashboard } from "../../context/DashboardContext";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TeacherDashboard = () => {
  const { state, dispatch } = useDashboard();
  const navigate = useNavigate();

  const markAttendance = (id, attendance) => {
    dispatch({ type: "MARK_ATTENDANCE", payload: { id, attendance } });
    console.log("attendance", attendance);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex md:flex-row justify-between items-center gap-4 bg-blue-100 p-4 rounded-lg">
        <h1 className="text-2xl font-bold text-blue-800">Teacher Dashboard</h1>
        <button
          className="px-4 py-2 bg-blue-600 hover:bg-blue-100 hover:text-blue-600 border hover:border-blue-600 text-white rounded-lg "
          onClick={() => navigate("/login")}
        >
          Logout
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-6 text-blue-800">
          Mark Attendance
        </h2>
        <div className="space-y-4">
          {state.students.map((student) => (
            <div
              key={student.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <span className="font-medium">{student.name}</span>
              <div className="flex space-x-2">
                <button
                  onClick={() => markAttendance(student.id, "present")}
                  className={`p-2 rounded-full ${
                    student.status === "true"
                      ? "bg-green-100 text-green-600"
                      : "hover:bg-green-100 text-gray-400"
                  }`}
                >
                  <FaCheckCircle className="w-6 h-6" />
                </button>
                <button
                  onClick={() => markAttendance(student.id, "absent")}
                  className={`p-2 rounded-full ${
                    student.status === "false"
                      ? "bg-red-100 text-red-600"
                      : "hover:bg-red-100 text-gray-400"
                  }`}
                >
                  <FaTimesCircle className="w-6 h-6" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-100 p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold text-blue-800">Syllabus Coverage</h2>
        <p className="text-4xl text-center font-bold text-blue-600">
          {state.syllabus}%
        </p>
      </div>
    </div>
  );
};

export { TeacherDashboard };

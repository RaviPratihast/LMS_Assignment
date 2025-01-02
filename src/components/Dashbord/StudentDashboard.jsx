// import React from "react";
import { useDashboard } from "../../context/DashboardContext";
import { courses } from "../../data/mockCourseData";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const { state } = useDashboard();
  const navigate = useNavigate();

  const calculateCompletion = (chapters) =>
    Math.round(
      (chapters.filter((chapter) => chapter.completed).length /
        chapters.length) *
        100
    );

  return (
    <div className="p-6 space-y-6">
      <div className="flex  justify-between md:flex-row  gap-4 bg-blue-100 p-4 rounded-lg">
        <h1 className="font-bold">Students Dashboard</h1>
        <div className="flex gap-4">
          <button
            className="px-4 py-2 bg-blue-600 hover:bg-blue-100 hover:text-blue-600 border hover:border-blue-600 text-white rounded-lg "
            onClick={() => navigate("/login")}
          >
            Logout
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 bg-blue-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold text-blue-800">Total Attendance</h2>
          <p className="text-4xl text-center font-bold text-blue-600">
            {state.attendance}%
          </p>
        </div>
        <div className="flex-1 bg-blue-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold text-blue-800">
            Total Syllabus Left
          </h2>
          <p className="text-4xl text-center font-bold text-blue-600">
            {state.syllabus}%
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex-1 min-w-[300px] bg-white shadow rounded-lg p-4 border"
          >
            <h3 className="text-lg font-bold">{course.name}</h3>
            <p className="text-gray-600">{course.description}</p>
            <p className="mt-2 text-sm">
              Completion:{" "}
              <span className="font-bold text-blue-600">
                {calculateCompletion(course.chapters)}%
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { StudentDashboard };

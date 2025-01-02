import { createContext, useReducer, useContext } from "react";
import { DashboardReducer } from "../Reducer/DashboardReducer";

const DashboardContext = createContext();
const useDashboard = () => useContext(DashboardContext);

const initialState = {
  attendance: 85,
  syllabus: 60,
  students: [
    { id: 1, name: "John Doe", attendance: 80 },
    { id: 2, name: "Jane Smith", attendance: 90 },
    { id: 3, name: "Sam Wilson", attendance: 70 },
  ],
  teachers: 10,
  totalStudents: 100,
  todayPresentStudents: 90,
  todayPresentTeachers: 8,
};

const DashboardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DashboardReducer, initialState);

  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
      {children}
    </DashboardContext.Provider>
  );
};

export { DashboardProvider, useDashboard };

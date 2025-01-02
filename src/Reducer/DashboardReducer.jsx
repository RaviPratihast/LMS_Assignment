const DashboardReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_ATTENDANCE":
      return { ...state, attendance: action.payload };

    case "UPDATE_SYLLABUS":
      return { ...state, syllabus: action.payload };

    case "MARK_ATTENDANCE": {
      const updatedStudents = state.students.map((student) =>
        student.id === action.payload.id
          ? { ...student, attendance: action.payload.attendance }
          : student
      );
      return { ...state, students: updatedStudents };
    }

    default:
      return state;
  }
};

export { DashboardReducer };

import NavBar from "../Components/NavBar.jsx";
import { Routes, Route } from "react-router-dom";
import AttendancePage from "./AttendancePage";
import StudentViewPage from "./StudentViewPage";
import EnrolStudent from "./EnrolStudent";
import DeleteExistingStudent from "./DeleteExistingStudent";
import "./HomePage.css";
import { StudentDataProvider } from "../useStudentData.jsx";
export default function HomePage() {
  return (
    <>
      <NavBar></NavBar>
      <div className="primaryContent">
        <StudentDataProvider>
          <Routes>
            <Route
              path="/attendance"
              element={<AttendancePage></AttendancePage>}
            ></Route>
            <Route
              path="/view-students"
              element={<StudentViewPage></StudentViewPage>}
            ></Route>
            <Route
              path="/enrol-student"
              element={<EnrolStudent></EnrolStudent>}
            ></Route>
            <Route
              path="/delete-student"
              element={<DeleteExistingStudent></DeleteExistingStudent>}
            ></Route>
          </Routes>
        </StudentDataProvider>
      </div>
    </>
  );
}

import NavBar from "../Components/NavBar.jsx";
import { Routes, Route } from "react-router-dom";
import AttendancePage from "./AttendancePage.jsx";
import StudentViewPage from "./StudentViewPage.jsx";
import EnrolStudent from "./EnrolStudent.jsx";
import DeleteExistingStudent from "./DeleteExistingStudent.jsx";
import "./HomePage.css";
import { StudentDataProvider } from "../useStudentData.jsx";
import TeacherProfile from "./TeacherProfile.jsx";
export default function HomePage() {
  return (
    <>
      <NavBar></NavBar>
      <div className="primaryContent">
        <StudentDataProvider>
          <Routes>
            <Route
              path="attendance"
              element={<AttendancePage></AttendancePage>}
            ></Route>
            <Route
              path="view-students"
              element={<StudentViewPage></StudentViewPage>}
            ></Route>
            <Route
              path="enrol-student"
              element={<EnrolStudent></EnrolStudent>}
            ></Route>
            <Route
              path="delete-student/*"
              element={<DeleteExistingStudent></DeleteExistingStudent>}
            ></Route>
            <Route path = "profile" element = {<TeacherProfile></TeacherProfile>}></Route>
          </Routes>
        </StudentDataProvider>
      </div>
    </>
  );
}

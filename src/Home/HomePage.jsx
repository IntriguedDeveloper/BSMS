import NavBar from "../Components/Navbar";
import {Routes, Route} from 'react-router-dom';
import AttendancePage from "./AttendancePage";
import StudentViewPage from "./StudentViewPage";
import EnrolStudent from "./EnrolStudent";
import DeleteExistingStudent from "./DeleteExistingStudent";
export default function HomePage(){
    return(
        <>
           <NavBar></NavBar> 
            <div className="primaryContent">
                <Routes>
                    <Route path="/attendance" element = {<AttendancePage></AttendancePage>}></Route>
                    <Route path = "/view-students" element = {<StudentViewPage></StudentViewPage>}></Route>
                    <Route path = "/enrol-student" element = {<EnrolStudent></EnrolStudent>}></Route>
                    <Route path = "/delete-student" element = {<DeleteExistingStudent></DeleteExistingStudent>}></Route>
                </Routes>
            </div>
        </>
    )
}
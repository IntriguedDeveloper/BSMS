import "./StudentProfile.css";
export default function StudentProfile(){
  let studentName="Jivitesh";
  let rollNo=21;
  let classname="X-C";
  let regdNo="6983/12";
  return(
    <>
    <div className="profileContainer2">
      <ol className="studentDetailList">
        <li className="detailStudents">Name: {studentName}</li>
        <li className="detailStudents">Class: {classname}</li>
        <li className="detailStudents">Roll No: {rollNo}</li>
        <li className="detailStudents">Registration No: {regdNo}</li>
      </ol>
      <button className="deleteProfileBtn">Delete Profile</button>
      </div>
    </>
  )
}
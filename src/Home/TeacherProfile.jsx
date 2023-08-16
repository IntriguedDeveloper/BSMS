import React, { useEffect, useState } from "react";
import "./TeacherProfile.css";
import { getDetails } from "../teacherDetails";

export default function TeacherProfile() {
  const [teacherName, setTeacherName] = useState("");
  const [teacherClass, setTeacherClass] = useState("");
  const [teacherEmail, setTeacherEmail] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const details = await getDetails();
        setTeacherName(details.userName);
        setTeacherClass(details.className);
        setTeacherEmail(details.userEmail);
        setIsLoading(false); // Mark loading as complete
      } catch (error) {
        console.error("Error fetching teacher details:", error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return(
      <div className="loading-spinner-container">
        <div className="loading-spinner"></div>
      </div>
    ); // Display a loading message or spinner
  }

  return (
    <>
      <div className="profile-wrapper">
        <div className="profileContainer">
          <div className="detailGroup">
            <a>Name : </a>
            <a>{teacherName}</a>
          </div>
          <div className="detailGroup">
            <a>Class : </a>
            <a>{teacherClass}</a>
          </div>
          <div className="detailGroup">
            <a>Email : </a>
            <a>{teacherEmail}</a>
          </div>
        </div>
      </div>
    </>
  );
}

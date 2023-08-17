import "./StudentProfile.css";
export default function StudentProfile({ data }) {
  return (
    <>
      <div className="profileContainer">
        {data.map((row, index) => {
          return (
            <div key={index} className="studentRow">
              {row}
            </div>
          );
        })}
        <button className="deleteProfileBtn">Delete Profile</button>
      </div>
    </>
  );
}

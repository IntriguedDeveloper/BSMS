import React from "react";
import "./StudentViewPage.css";
export default function StudentViewPage() {
  return (
    <>
      <div className="viewContainer">
        <div className="primaryGrid">
        <div className="rowTitle">
            <div className="column">Roll no.</div>
            <div className="column">Names</div>
          </div>
          <div className="row">
            <div className="column">1.</div>
            <div className="column">Ankit Raj</div>
          </div>
          {/* Add more student rows */}
          <div className="row">
            <div className="column">2.</div>
            <div className="column">Jane Smith</div>
          </div>
          {/* Add more student rows */}
        </div>
      </div>
    </>
  );
}

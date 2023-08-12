import React from "react";
import "./AttendancePage.css";
import checkIcon from "../assets/check-1.png";

export default function AttendancePage() {
  // Function to generate options for dropdowns
  const generateOptions = (start, end) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  return (
    <>
      <div className="navContainer">
        <nav className="datebar">
          <div className="optionWrapper">
            <input
              type="number"
              className="dateInput"
              placeholder="Day"
            ></input>
            <select className="date-dropdown" id="day">
              <option value="">Day</option>
              {generateOptions(1, 31)}
            </select>
          </div>
          <div className="optionWrapper">
            <input
              type="text"
              className="monthInput"
              placeholder="Month"
            ></input>
            <select className="date-dropdown" id="month">
              <option value="">Month</option>
              {generateOptions(1, 12)}
            </select>
          </div>
          <div className="optionWrapper">
            <input
              className="yearInput"
              type="number"
              placeholder="Year"
            ></input>
            <select className="date-dropdown" id="year">
              <option value="">Year</option>
              {generateOptions(2020, 2030)}
            </select>
          </div>
        </nav>
        <div className="primaryGrid">
          <div className="row">
            <div className="column">1.</div>
            <div className="column">Ankit Raj</div>
            <div className="column">
              <img src={checkIcon} className="statusIcon" alt="Check Icon" />
            </div>
          </div>
          {/* Add more student rows */}
          <div className="row">
            <div className="column">2.</div>
            <div className="column">Jane Smith</div>
            <div className="column">
              <img src={checkIcon} className="statusIcon" alt="Check Icon" />
            </div>
          </div>
          {/* Add more student rows */}
        </div>
      </div>
    </>
  );
}

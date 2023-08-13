import React from "react";
import "./AttendancePage.css";
import checkIcon from '../assets/cross.png';

export default function AttendancePage() {
  // Function to generate options for dropdowns
  const generateOptions = (start, end) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      const formattedValue = i < 10 ? `0${i}` : `${i}`;
      options.push(
        <option key={formattedValue} value={formattedValue}>
          {formattedValue}
        </option>
      );
    }
    return options;
  };

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Handjet:wght@300&family=Josefin+Sans:wght@500&family=Noto+Serif+Vithkuqi:wght@500&family=Ubuntu:wght@700&display=swap');
      </style>
      <div className="navContainer">
        <nav className="datebar">
          <div className="optionWrapper">
            <input
              type="number"
              className="dateInput"
              placeholder="Day"
            ></input>
            <select className="date-dropdown" id="day">
              
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
              <option className="options">January</option>
            </select>
          </div>
          <div className="optionWrapper">
            <input
              className="yearInput"
              type="number"
              placeholder="Year"
            ></input>
            <select className="date-dropdown" id="year">
              {generateOptions(2001, 2030)}
            </select>
          </div>
        </nav>
        {/* Grid Part */}
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

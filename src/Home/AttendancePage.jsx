import React from "react";
import "./AttendancePage.css";
import checkIcon from '../assets/check-1.png';
export default function AttendancePage() {
  return (
    <>
      <div className="navContainer">
        <nav class="datebar">
          <div className="optionWrapper">
            <input type="number" className="dateInput"></input>
            <select className="date-dropdown" id="day"></select>
          </div>
          <div className="optionWrapper">
            <input type="text" className="monthInput"></input>
            <select className="date-dropdown" id="month">
              <option value="">Month</option>
            </select>
          </div>
          <div className="optionWrapper">
            <input className="yearInput" type="number"></input>
            <select className="date-dropdown" id="year">
              <option value="">Year</option>
            </select>
          </div>
        </nav>
        <div className="primaryGrid">
          <div className="row">
            <div className="column">1.</div>
            <div className="column">Ankit Raj</div>
            <div className="column">
              <img src = {checkIcon} className = "statusIcon"></img>
            </div>
          </div>
          <div className="row">
            <div className="column">1.</div>
            <div className="column">Ankit Raj</div>
            <div className="column">
              <img src = {checkIcon} className = "statusIcon"></img>
            </div>
          </div>
          <div className="row">
            <div className="column">1.</div>
            <div className="column">Ankit Raj</div>
            <div className="column">
              <img src = {checkIcon} className = "statusIcon"></img>
            </div>
          </div>
          <div className="row">
            <div className="column">1.</div>
            <div className="column">Ankit Raj</div>
            <div className="column">
              <img src = {checkIcon} className = "statusIcon"></img>
            </div>
          </div>
          <div className="row">
            <div className="column">1.</div>
            <div className="column">Ankit Raj</div>
            <div className="column">
              <img src = {checkIcon} className = "statusIcon"></img>
            </div>
          </div>
          <div className="row">
            <div className="column">1.</div>
            <div className="column">Ankit Raj</div>
            <div className="column">
              <img src = {checkIcon} className = "statusIcon"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

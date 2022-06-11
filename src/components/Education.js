import React from "react";
import "./Education.css";
const Education = (props) => {
  function schoolChangeHandler(e) {
    props.setUserSchool(e.target.value);
  }
  function startDateHandler(e) {
    props.setUserStartDate(e.target.value);
  }
  function endDateHandler(e) {
    props.setUserEndDate(e.target.value);
  }
  function majorHandler(e) {
    props.setUserMajor(e.target.value);
  }
  return (
    <div className="education-container">
      <h1>Education</h1>
      <div className="education-input">
        <div className="school-name-input">
          <label htmlFor="school">School Name</label>
          <input
            type="text"
            id="school"
            className="school-input"
            onChange={schoolChangeHandler}
            placeholder="School Name"
            value={props.userSchool}
          ></input>
        </div>
        <div className="school-name-input">
          <label>Major</label>
          <input
            type="text"
            className="major-input"
            placeholder="Major"
            onChange={majorHandler}
            value={props.userMajor}
          ></input>
        </div>
        <div className="start-finish-inputs">
          <label>Start Date</label>
          <input
            type="date"
            className="start-date-input"
            onChange={startDateHandler}
            placeholder="Start"
            value={props.userStartDate}
          ></input>
          <label>Finish</label>
          <input
            type="date"
            className="end-date-input"
            onChange={endDateHandler}
            placeholder="End"
            value={props.userEndDate}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Education;

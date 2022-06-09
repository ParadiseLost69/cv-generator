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
  return (
    <div>
      <div className="education-input">
        <input
          type="text"
          className="school-input"
          onChange={schoolChangeHandler}
          placeholder="School Name"
          value={props.userSchool}
        ></input>
        <input
          type="text"
          className="start-date-input"
          onChange={startDateHandler}
          placeholder="Start"
          value={props.userStartDate}
        ></input>
        <input
          type="text"
          className="end-date-input"
          onChange={endDateHandler}
          placeholder="End"
          value={props.userEndDate}
        ></input>
      </div>
    </div>
  );
};

export default Education;

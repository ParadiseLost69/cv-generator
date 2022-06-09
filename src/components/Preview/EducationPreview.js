import React from "react";
import "./EducationPreview.css";

const EducationPreview = (props) => {
  return (
    <div>
      <h1>Education</h1>
      <div className="school-name-preview">
        <h2>{props.userSchool}</h2>
        <h2>
          {props.userStartDate} - {props.userEndDate}
        </h2>
      </div>
    </div>
  );
};

export default EducationPreview;

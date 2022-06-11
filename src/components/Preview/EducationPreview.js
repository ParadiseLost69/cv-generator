import React from "react";
import "./EducationPreview.css";

const EducationPreview = (props) => {
  return (
    <div className="education-preview">
      <div className="education-preview-title">
        <h1>Education</h1>
      </div>
      <div className="education-content-preview">
        <h2 className="user-school-preview">{props.userSchool}</h2>
        <h3>{props.userMajor} </h3>
        <p>
          {props.userStartDate} - {props.userEndDate}
        </p>
      </div>
    </div>
  );
};

export default EducationPreview;

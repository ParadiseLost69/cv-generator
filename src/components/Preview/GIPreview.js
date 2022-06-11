import React from "react";
import "./GIPreview.css";
import { AiFillMail, AiFillPhone, AiFillHome } from "react-icons/ai";
export default function GIPreview(props) {
  return (
    <div className="general-info-preview">
      <h1 className="resume-preview__title">RESUME</h1>
      <div className="resume-preview">
        <div className="resume-preview__name-title">
          <h2 className="user-name-preview">{props.userName}</h2>
          <h3 className="user-job-title-preview">{props.jobTitle}</h3>
        </div>
        <div className="resume-preview__contact-info">
          <div className="resume-preview__email">
            <AiFillMail className="mail-icon" />
            <h3>{props.userEmail}</h3>
          </div>
          <div className="resume-preview__phone">
            <AiFillPhone className="phone-icon" />
            <h3>{props.userPhone}</h3>
          </div>
          <div className="resume-preview__address">
            <AiFillHome className="address-icon" />
            <h3>{props.userAddress}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

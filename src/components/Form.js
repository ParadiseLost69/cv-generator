import React, { useState } from "react";
import GeneralInfo from "./GeneralInfo.js";
import Education from "./Education.js";
import "./Form.css";
import GIPreview from "./Preview/GIPreview.js";
import EducationPreview from "./Preview/EducationPreview";

export default function Form(props) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  //Education States//

  const [userSchool, setUserSchool] = useState("");
  const [userSubject, setUserSubject] = useState("");
  const [userStartDate, setUserStartDate] = useState("");
  const [userEndDate, setUserEndDate] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    console.log({
      userName: userName,
      userEmail: userEmail,
      userPhone: userPhone,
    });
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <GeneralInfo
          userName={userName}
          setUserName={setUserName}
          userEmail={userEmail}
          setUserEmail={setUserEmail}
          userPhone={userPhone}
          setUserPhone={setUserPhone}
          userAddress={userAddress}
          setUserAddress={setUserAddress}
          jobTitle={jobTitle}
          setJobTitle={setJobTitle}
        />
        <Education
          userSchool={userSchool}
          setUserSchool={setUserSchool}
          userSubject={userSubject}
          setUserSubject={setUserSubject}
          userStartDate={userStartDate}
          setUserStartDate={setUserStartDate}
          userEndDate={userEndDate}
          setUserEndDate={setUserEndDate}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>

      <GIPreview
        userName={userName}
        setUserName={setUserName}
        userEmail={userEmail}
        setUserEmail={setUserEmail}
        userPhone={userPhone}
        setUserPhone={setUserPhone}
        userAddress={userAddress}
        setUserAddress={setUserAddress}
        jobTitle={jobTitle}
        setJobTitle={setJobTitle}
      />
      <EducationPreview
        userSchool={userSchool}
        setUserSchool={setUserSchool}
        userSubject={userSubject}
        setUserSubject={setUserSubject}
        userStartDate={userStartDate}
        setUserStartDate={setUserStartDate}
        userEndDate={userEndDate}
        setUserEndDate={setUserEndDate}
      />
    </div>
  );
}

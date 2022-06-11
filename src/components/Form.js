import React, { useState } from "react";
import GeneralInfo from "./GeneralInfo.js";
import Education from "./Education.js";
import "./Form.css";
import GIPreview from "./Preview/GIPreview.js";
import EducationPreview from "./Preview/EducationPreview";

export default function Form(props) {
  const [preview, setPreview] = useState(true);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [userMajor, setUserMajor] = useState("");

  //Education States//

  const [userSchool, setUserSchool] = useState("");
  const [userSubject, setUserSubject] = useState("");
  const [userStartDate, setUserStartDate] = useState("");
  const [userEndDate, setUserEndDate] = useState("");

  function previewHandler() {
    setPreview((prevPreview) => !prevPreview);
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log({
      userName: userName,
      userEmail: userEmail,
      userPhone: userPhone,
    });
  }
  return (
    <div className="container">
      <button type="submit" className="submit-button" onClick={previewHandler}>
        {preview ? "Show Preview" : "Edit information"}
      </button>
      <form onSubmit={submitHandler}>
        {preview && (
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
        )}
        {preview && (
          <Education
            userSchool={userSchool}
            setUserSchool={setUserSchool}
            userSubject={userSubject}
            setUserSubject={setUserSubject}
            userStartDate={userStartDate}
            setUserStartDate={setUserStartDate}
            userEndDate={userEndDate}
            setUserEndDate={setUserEndDate}
            userMajor={userMajor}
            setUserMajor={setUserMajor}
          />
        )}
      </form>

      {!preview && (
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
      )}
      {!preview && (
        <EducationPreview
          userSchool={userSchool}
          setUserSchool={setUserSchool}
          userSubject={userSubject}
          setUserSubject={setUserSubject}
          userStartDate={userStartDate}
          setUserStartDate={setUserStartDate}
          userEndDate={userEndDate}
          setUserEndDate={setUserEndDate}
          userMajor={userMajor}
          setUserMajor={setUserMajor}
        />
      )}
    </div>
  );
}

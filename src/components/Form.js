import React, { useState } from "react";
import GeneralInfo from "./GeneralInfo.js";
import "./Form.css";
import GIPreview from "./Preview/GIPreview.js";

export default function Form(props) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [jobTitle, setJobTitle] = useState("");
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
    </div>
  );
}

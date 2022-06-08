import React, { useState } from "react";
import "./GeneralInfo.css";
export default function GeneralInfo(props) {
  function nameChangeHandler(e) {
    props.setUserName(e.target.value);
  }

  function emailChangeHandler(e) {
    props.setUserEmail(e.target.value);
  }
  function phoneChangeHandler(e) {
    props.setUserPhone(e.target.value);
  }
  function addressChangeHandler(e) {
    props.setUserAddress(e.target.value);
  }
  function jobTitleChangeHandler(e) {
    props.setJobTitle(e.target.value);
  }

  return (
    <div className="general-info-section">
      <div className="general-info-title">
        <h1>General Information</h1>
      </div>
      <div className="general-info-content">
        <input
          type="text"
          className="name"
          onChange={nameChangeHandler}
          placeholder="Name"
          value={props.userName}
        ></input>
        <input
          type="email"
          className="email"
          onChange={emailChangeHandler}
          value={props.userEmail}
          placeholder="Email"
        ></input>
        <input
          type="text"
          className="phone"
          onChange={phoneChangeHandler}
          value={props.userPhone}
          placeholder="Phone Number"
        ></input>
        <input
          type="text"
          className="address"
          onChange={addressChangeHandler}
          value={props.userAddress}
          placeholder="Address"
        ></input>
        <input
          type="text"
          className="userJobTitleInput"
          onChange={jobTitleChangeHandler}
          value={props.jobTitle}
          placeholder="Job Title"
        ></input>
      </div>
    </div>
  );
}

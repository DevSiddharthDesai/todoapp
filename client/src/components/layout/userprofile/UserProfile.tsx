import React from "react";
import man from "../../../assets/images/man.png";

const UserProfile = () => {
  return (
    <div className="userprofile h-36 flex flex justify-between items-center">
      <div className="user-profile-name">
        <h2>Hello Endersssss</h2>
        <p>Today you have 4 tasks</p>
      </div>
      <div className="user-profile-picture h-full">
        <img
          className="h-full w-full object-cover"
          src={man}
          alt="profile_picture"
        />
      </div>
    </div>
  );
};

export default UserProfile;

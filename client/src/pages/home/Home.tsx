import React from "react";
import UserProfile from "../../components/layout/userprofile/UserProfile";
import TaskCards from "../../components/layout/taskcards/TaskCards";
import "./home.css";

const Home = () => {
  return (
    <>
      <UserProfile />
      <TaskCards />
    </>
  );
};

export default Home;

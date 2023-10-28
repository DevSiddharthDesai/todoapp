import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AuthBackground } from "../../assets/images";
import Signup from "../../components/common/forms/Signup/Signup";
import Signin from "../../components/common/forms/Signin/Signin";

const Auth = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const onLoginClickHandler = () => {
    setShowIntro(false);
    setShowRegister(false);
    setShowLogin(true);
  };

  const onRegisterClickHandler = () => {
    setShowIntro(false);
    setShowLogin(false);
    setShowRegister(true);
  };
  return (
    <>
      <div className="relative grid grid-cols-2 h-screen">
        <div className="relative bg-black flex items-center justify-center">
          <img
            src={AuthBackground}
            alt="Intro"
            className="object-cover"
            width={"400px"}
            height={"400px"}
          />
        </div>
        {showLogin && (
          <div className="flex flex-col items-center justify-center">
            <Signin />
          </div>
        )}
        {showRegister && (
          <div className="flex flex-col items-center justify-center">
            <Signup />
          </div>
        )}
        {showIntro && (
          <div className="flex flex-col justify-center mx-auto">
            <h1 className="text-left text-3xl font-bold pb-4">
              Productive Mind Intro
            </h1>
            <p className="max-w-md pb-4">
              With only the features you need, Organic Mind is customized for
              individuals seeking a stress-free way to stay focused on their
              goals, projects, and tasks.
            </p>
            <button className="bg-buttonPrimary px-4 py-4 mb-4">
              <Link
                onClick={onRegisterClickHandler}
                to={"#"}
                style={{ width: "100%", display: "block" }}
              >
                Get Started
              </Link>
            </button>
            <Link onClick={onLoginClickHandler} to={"#"}>
              <p className="text-center font-bold">
                Already have an account? Sign in
              </p>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Auth;

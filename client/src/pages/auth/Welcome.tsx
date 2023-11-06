import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Button from "../../components/ui/button/Button";

import { AuthBackground } from "../../utils/images";

const Welcome = () => {
  const navigate = useNavigate();
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);
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
        <div className="flex flex-col justify-center mx-auto">
          <h1 className="text-left text-3xl font-bold pb-4">
            Productive Mind Intro
          </h1>
          <p className="max-w-md pb-4">
            With only the features you need, Organic Mind is customized for
            individuals seeking a stress-free way to stay focused on their
            goals, projects, and tasks.
          </p>
          <Button
            mode="primary"
            title="Get Started"
            to="#"
            onClick={() => loginWithRedirect()}
          />
        </div>
      </div>
    </>
  );
};

export default Welcome;

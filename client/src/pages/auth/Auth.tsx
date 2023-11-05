import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Button from "../../components/ui/button/Button";

import { AuthBackground } from "../../utils/images";
import Signup from "../../components/common/forms/Signup/Signup";
import Signin from "../../components/common/forms/Signin/Signin";

const Auth = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });

  const [authState, setAuthState] = useState({
    login: false,
    register: false,
    intro: true,
  });

  const handlePopState = () => {
    const currentState = window.history.state;
    if (
      !currentState ||
      (!currentState.showLogin && !currentState.showRegister)
    ) {
      setAuthState({
        intro: true,
        login: authState.login,
        register: authState.register,
      });
    } else {
      setAuthState({
        intro: false,
        login: authState.login,
        register: authState.register,
      });
    }
    setAuthState({
      intro: authState.intro,
      login: currentState.showLogin,
      register: currentState.showRegister,
    });
  };

  useEffect(() => {
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onLoginClickHandler = () => {
    setAuthState({
      intro: false,
      login: true,
      register: false,
    });

    window.history.pushState(
      { showLogin: true, showRegister: false, showIntro: false },
      ""
    );
  };

  const onRegisterClickHandler = () => {
    setAuthState({
      intro: false,
      login: false,
      register: true,
    });

    window.history.pushState(
      { showLogin: false, showRegister: true, showIntro: false },
      ""
    );
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
        {authState.login && (
          <div className="flex flex-col items-center justify-center">
            <Signin />
          </div>
        )}
        {authState.register && (
          <div className="flex flex-col items-center justify-center">
            <Signup />
          </div>
        )}
        {authState.intro && (
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
              onClick={onRegisterClickHandler}
            />
            <Link onClick={onLoginClickHandler} to={"#"}>
              <p className="text-center font-bold">
                Already have an account? Sign in
              </p>
            </Link>
            {!isAuthenticated && (
              <button
                id="qsLoginBtn"
                color="primary"
                onClick={() => loginWithRedirect({})}
              >
                Login
              </button>
            )}
            {isAuthenticated && (
              <>
                <h6 className="d-inline-block">{user?.name}</h6>
                <button
                  id="qsLoginBtn"
                  color="primary"
                  onClick={() => loginWithRedirect({})}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Auth;

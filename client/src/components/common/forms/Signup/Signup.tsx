import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="relative max-w-md">
      <h1 className="text-3xl font-bold">Sign Up</h1>
      <form className="flex flex-wrap -mx-3">
        <div className="w-full lg:w-1/2 p-3">
          <input
            type="text"
            placeholder="First Name"
            className="w-full border outline-0 border-inputBorder p-2"
          />
        </div>
        <div className="w-full lg:w-1/2 p-3">
          <input
            type="text"
            placeholder="Last Name"
            className="w-full border outline-0 border-inputBorder p-2"
          />
        </div>
        <div className="w-full p-3">
          <input
            type="text"
            placeholder="Email"
            className="w-full border outline-0 border-inputBorder p-2"
          />
        </div>
        <div className="w-full p-3">
          <input
            type="password"
            placeholder="Password"
            className="w-full border outline-0 border-inputBorder p-2"
          />
        </div>
        <div className="w-full p-3">
          <button className="bg-buttonPrimary w-full px-4 py-4 mb-4">
            <Link to={"#"} style={{ width: "100%", display: "block" }}>
              Get Started
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;

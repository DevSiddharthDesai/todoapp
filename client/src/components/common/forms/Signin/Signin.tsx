import React from "react";
import Button from "../../../ui/button/Button";

const Signin = () => {
  return (
    <div className="relative max-w-md">
      <h1 className="text-3xl font-bold">Sign Up</h1>
      <form className="flex flex-wrap -mx-3">
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
          <Button mode="primary" title="Sign In" to="#" />
        </div>
      </form>
    </div>
  );
};

export default Signin;

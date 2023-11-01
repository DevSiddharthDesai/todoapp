import React from "react";
import Button from "../../../ui/button/Button";
import Input from "../../../ui/input/Input";

const Signin = () => {
  return (
    <div className="relative max-w-md">
      <h1 className="text-3xl font-bold">Sign Up</h1>
      <form className="flex flex-wrap -mx-3">
        <div className="w-full p-3">
          <Input type="text" name="email" placeholder="Email" />
        </div>
        <div className="w-full p-3">
          <Input type="text" name="password" placeholder="Password" />
        </div>
        <div className="w-full p-3">
          <Button mode="primary" title="Sign In" to="#" />
        </div>
      </form>
    </div>
  );
};

export default Signin;

import React from "react";
import Button from "../../../ui/button/Button";
import Input from "../../../ui/input/Input";

const Signup = () => {
  return (
    <div className="relative max-w-md">
      <h1 className="text-3xl font-bold">Sign Up</h1>
      <form className="flex flex-wrap -mx-3">
        <div className="w-full lg:w-1/2 p-3">
          <Input type="text" placeholder="First Name" name="firstname" />
        </div>
        <div className="w-full lg:w-1/2 p-3">
          <Input type="text" placeholder="Last Name" name="lastname" />
        </div>
        <div className="w-full p-3">
          <Input type="text" placeholder="Email" name="email" />
        </div>
        <div className="w-full p-3">
          <Input type="password" placeholder="Password" name="password" />
        </div>
        <div className="w-full p-3">
          <Button mode="primary" title="Sign Up" to="#" />
        </div>
      </form>
    </div>
  );
};

export default Signup;

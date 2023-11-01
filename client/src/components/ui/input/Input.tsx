import React from "react";

export type InputProps = {
  type: string;
  id?: string;
  name: string;
  placeholder?: string;
  readonly?: boolean;
  disabled?: boolean;
  maxlength?: number;
  minlength?: number;
};

const Input = ({ type, id, name, placeholder, ...otherProps }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border outline-0 border-inputBorder p-2"
      name={name}
    />
  );
};

export default Input;

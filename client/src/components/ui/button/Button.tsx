import React from "react";
import { Link } from "react-router-dom";

export type ButtonMode = "primary" | "secondary" | "tertiary" | "destructive";

const styleColorClasses = (mode: ButtonMode) => {
  switch (mode) {
    case "primary":
      return "bg-buttonPrimary";
    case "secondary":
      return "bg-buttonSecondary";
    default:
      throw Error("unKnown Button Mode");
  }
};

export type ButtonProps = {
  mode?: ButtonMode;
  title?: string;
  disabled?: boolean;
  to?: string;
  type?: "button" | "reset" | "submit";
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void;
  onMouseUp?: (event: React.MouseEvent<HTMLElement>) => void;
};

const Button = ({
  mode = "primary",
  type,
  to,
  title,
  onClick,
  ...otherProps
}: ButtonProps) => {
  if (to) {
    return (
      <button
        type={type}
        className={`${styleColorClasses(mode)} px-4 py-4 mb-4`}
      >
        <Link
          onClick={onClick}
          to={to}
          style={{ width: "100%", display: "block" }}
        >
          Get Started
        </Link>
      </button>
    );
  }
  return (
    <button type={type} className="bg-buttonPrimary px-4 py-4 mb-4">
      {title}
    </button>
  );
};

export default Button;

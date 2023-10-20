import React from "react";

const Button = ({ title }: { title: string }) => {
  return (
    <button className="bg-green-400 border-transparent rounded-md p-2 text-white">
      {title}
    </button>
  );
};

export default Button;

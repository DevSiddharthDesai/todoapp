import React from "react";

export type Colors = "red" | "yellow" | "blue";

const ListElement = ({
  title,
  icon,
  color,
}: {
  title: string;
  icon?: JSX.Element;
  color?: Colors;
}) => {
  if (icon) {
    return (
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center">
          {icon}
          <span className="text-sm font-semibold pl-3">{title}</span>
        </div>
        <span className="bg-blue-500 text-white py-1 px-3 rounded-md text-sm">
          5
        </span>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center">
          <span
            className={`bg-${color}-500 text-white py-3 px-3 rounded-md text-sm`}
          ></span>
          <span className="text-sm font-semibold pl-3">{title}</span>
        </div>
        <span className="bg-blue-500 text-white py-1 px-3 rounded-md text-sm">
          5
        </span>
      </div>
    );
  }
};

export default ListElement;

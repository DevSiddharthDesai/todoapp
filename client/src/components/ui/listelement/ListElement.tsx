import React from "react";

const ListElement = () => {
  return (
    <div>
      <input type="checkbox" id="scales" name="scales" checked />
      <label htmlFor="scales" className="pl-3">
        Scales
      </label>
    </div>
  );
};

export default ListElement;

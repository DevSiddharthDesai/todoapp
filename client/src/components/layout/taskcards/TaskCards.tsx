import React from "react";
import Card from "../../ui/cards/Card";
import Sun from "../../../assets/images/sun.png";
import Schedule from "../../../assets/images/schedule.png";
import OnlineShopping from "../../../assets/images/online-shopping.png";
import SuitCase from "../../../assets/images/suitcase.png";
import User from "../../../assets/images/gamer.png";

const TaskCards = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 mt-10">
        <Card image={Sun} title="Today" />
        <Card image={Schedule} title="Planned" />
        <Card image={User} title="Personal" />
        <Card image={SuitCase} title="Work" />
        <Card image={OnlineShopping} title="Shopping" />
      </div>
    </>
  );
};

export default TaskCards;

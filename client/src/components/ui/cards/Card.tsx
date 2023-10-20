import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Card = ({ image, title }: { image: string; title: string }) => {
  return (
    <>
      <div className="flex border-2 rounded-t-md shadow-md p-4 bg-white">
        <div className="flex image md:w-auto md:w-1/4 items-center">
          <img src={image} alt="sun" />
        </div>
        <div className="flex card-content p-5 md:w-1/2 items-center flex-col justify-center">
          <h2 className="font-extrabold">{title}</h2>
          <h4 className="text-gray-500">2 Tasks</h4>
        </div>
        <div className="flex action-buttons md:w-1/5 items-top justify-end">
          <BsThreeDotsVertical />
        </div>
      </div>
    </>
  );
};

export default Card;

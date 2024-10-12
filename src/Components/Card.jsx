import React from "react";
const colorclassMap = {
  gray: "bg-gray-100",
  indigo: "bg-indigo-100",
  red: "bg-red-100",
  blue: "bg-blue-100",
};

const Card = ({ children, color = "gray" }) => {
  const colorclass = colorclassMap[color];
  return (
    <div className={`${colorclass} p-6 rounded-lg shadow-md`}>{children}</div>
  );
};

export default Card;

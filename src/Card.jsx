import React from "react";

const Card = ({ number }) => {
  return (
    <div className="grid-cols-1 bg-blue-500 rounded-md px-12 py-10 m-2 text-white text-left align-text-top">
      {number}
    </div>
  );
};

export default Card;

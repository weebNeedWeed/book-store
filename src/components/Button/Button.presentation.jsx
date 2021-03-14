import React from "react";

function ButtonPresentation(props) {
  const { children, onClick } = props;

  return (
    <button
      className="tracking-widest bg-gray-100 bg-opacity-70 hover:bg-opacity-100 rounded inline-block text-2xl font-semibold px-2 py-1 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonPresentation;

import React from "react";

const ButtonsWithIcons = ({ text, icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      class="inline-flex cursor-pointer items-center gap-2   border border-blue-600 bg-blue-600 px-8 py-1.5 text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
    >
      <span class="text-sm text-center font-medium"> {text} </span>

      <img src={icon} className="h-8 w-8 items-center" />
    </div>
  );
};

export default ButtonsWithIcons;

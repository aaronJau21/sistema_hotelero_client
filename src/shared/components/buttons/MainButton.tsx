import React from "react";

const MainButton = ({ children }) => {
  return (
    <div className="flex justify-center p-2">
  <button className="bg-[#0B2650] text-gray-300 py-3 px-6 sm:px-8 md:px-12 rounded-3xl text-lg sm:text-base w-full max-w-[300px]">

        {children}
      </button>
    </div>
  );
};

export default MainButton;

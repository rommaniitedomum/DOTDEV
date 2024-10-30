import React from "react";

const Welcome = () => {
  return (
    <div
      className="Welcome-wrapper border  border-neutral-800  light:font-normal dark:text-neutral-300 light: text-black
     py-10">
      <div
        className="Welcome-head flex flex-col items-center mt-6 bg-gradient-to-r from-indigo-300 to-indigo-800 border-0
         text-transparent bg-clip-text text-3xl z-50">
        Welcome to AceDot Build Tools
      </div>
    </div>
  );
};

export default Welcome;

import React from "react";
import Welcome from "./Welcome";
import Popupbox from "./Popupbox";
import Contents from "./Contents";

const index = () => {
  return (
    <div className="Features">
      <div className="Container">
        <Welcome />
        <Contents />
        <Popupbox />
      </div>
    </div>
  );
};

export default index;

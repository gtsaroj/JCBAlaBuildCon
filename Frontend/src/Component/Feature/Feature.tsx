import React from "react";
import Work1 from "../../../assets/Clip path group (1).png";
import Work2 from "../../../assets/Clip path group (2).png";
import Work3 from "../../../assets/Clip path group (3).png";
import Work4 from "../../../assets/Clip path group (4).png";

export const FeatureImg = () => {
  return (
    <div className="w-full flex items-center justify-center gap-3">
          <div className="w-[400px] h-[500px]">
        <img className="w-full h-full" src={Work1} alt="" />
      </div>
      <div className="w-[400px] h-[500px]">
        <img className="w-full h-full" src={Work2} alt="" />
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <div className="w-[400px] h-[248px]">
          <img className="w-full h-full" src={Work3} alt="" />
        </div>
        <div className="w-[400px] h-[248px]">
          <img className="w-full h-full" src={Work4} alt="" />
        </div>
      </div>
    </div>
  );
};

const Feature = () => {
    return <div>
      <FeatureImg/>
  </div>;
};

export default Feature;

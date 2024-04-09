import React from "react";
import { Star } from "lucide-react";

export const ReviewCard = () => {
  return (
    <div className=" flex rounded-sm flex-col gap-6 items-center w-[350px] bg-[var(--primary-color)] px-4 py-3 ">
      <div className="flex items-center justify-center gap-3">
        <div className="w-[50px] h-[50px] ">
          <img className="w-full h-full rounded-full" src="" alt="" />
        </div>
        <div className="flex flex-col items-baseline justify-center gap-1">
          <h1 className="text-[16px] text-white ">Adma Smith</h1>
          <div className="flex items-center justify-center gap-2">
            <span><Star color="#f8ff2a" className="size-4"/></span>
            <span><Star color="#f8ff2a" className="size-4"/></span>
            <span><Star color="#f8ff2a" className="size-4"/></span>
            <span><Star color="#f8ff2a" className="size-4"/></span>
          </div>
        </div>
      </div>
      <p className="text-sm text-white w-full text-center">
        Many more projects are going on all over maharashtra other state.. nice
        company. professional staff..good management
      </p>
    </div>
  );
};

const Review: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-7 w-full py-10">
      <h3 className="text-[17px] text-[var(--primary-color)] ">WHAT THEY SAY</h3>
      <h4 className="text-[25px] text-[var(--primary-color)] font-bold">Google My Business Reviews</h4>
      <div className="w-full flex items-center justify-center gap-4 gap-y-5 flex-wrap">
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
      </div>
    </div>
  );
};

export default Review;

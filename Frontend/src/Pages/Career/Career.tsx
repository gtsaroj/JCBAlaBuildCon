import React from "react";
import img from "../../../assets/Clip path group (1).png";
import { useNavigate } from "react-router-dom";

const Career: React.FC = () => {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col gap-10 py-16 px-10 ">
      <div className="flex flex-col items-center justify-center gap-4  ">
        <div className="w-full h-[400px]">
          <img src={img} className="w-full h-full rounded-sm" alt="" />
        </div>
        <p>
          At SJCPL, we believe that great achievements are only possible when
          great people come together. Our team is made up of diverse, talented
          individuals who are driven by a shared passion for innovation,
          collaboration, and excellence. If you’re ready for a rewarding career
          journey and to be a part of something impactful, SJCPL is the place
          for you.Join Us in Building the Future! If you’re excited about the
          prospect of working with a dynamic and vibrant team on ground-breaking
          projects, join us and be part of a team that’s shaping the future.
        </p>
      </div>
          <div className=" border-[1px] border-[var(--secondary-light-text)] ">
              <div className="flex items-center justify-between px-7 py-2">
              <h1>Construction Manager</h1>
              <button onClick={()=> navigate("/career/job") } className=" text-white bg-[var(--primary-color)] px-5 py-2 rounded-md font-semibold ">Apply Now</button>
              </div> 
             <p className=" py-2 border-t-[1px] border-[var(--secondary-light-text)] w-full ">Job Description: Ensure availability of requisite resources for timely site […]</p>
      </div>
    </div>
  );
};

export default Career;

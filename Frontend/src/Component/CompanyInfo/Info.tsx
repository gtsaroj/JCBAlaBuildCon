import React from "react";
import workImg from "../../../assets/Clip path group (1).png";

export const Content = () => {
  return (
    <div className="flex flex-col items-start gap-10">
      <h1 className="text-3xl text-[var(--primary-color)] font-bold ">
        More About Jay Chand Bala
      </h1>
      <div className="flex flex-col items-start gap-4">
        <p>
          Jay chand bala offers a wide range of services including architectural
          design, construction management, interior design, renovation, and
          project consulting. We specialize in residential, commercial, and
          retail projects.
        </p>
        <p>
          With years of experience in the construction industry, Jay Chand Bala
          (JCB) Building Construction has amassed a wealth of knowledge and
          expertise. Our team’s combined experience allows us to tackle a
          diverse range of projects with confidence and excellence.
        </p>
      </div>
      <button className=" text-white bg-[var(--primary-color)] rounded-md px-7 py-2 font-semibold  ">
        Read More +
      </button>
      <div className="flex items-center justify-evenly gap-5">
        <div className="flex flex-col items-center justify-center gap-1">
          <h2 className="text-[var(--primary-color)] text-3xl font-bold ">
            10+
          </h2>
          <p className="text-sm">Business Year</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <h2 className="text-[var(--primary-color)] text-3xl font-bold ">
            240+
          </h2>
          <p className="text-sm">Satisfed Clients</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <h2 className="text-[var(--primary-color)] text-3xl font-bold ">
            2000+
          </h2>
          <p className="text-sm">Successfull Cases</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <h2 className="text-[var(--primary-color)] text-3xl font-bold ">
            130+
          </h2>
          <p className="text-sm">Pro Consultants</p>
        </div>
      </div>
    </div>
  );
};

const Info: React.FC = () => {
  return (
    <div className="flex flex-col px-5 py-20 items-center justify-center gap-7 w-full">
      <h1 className="text-[20px] text-[var(--primary-color)] ">WHO WE ARE?</h1>
      <div className="flex items-center justify-center gap-6">
        <div className="min-w-[100px] w-full min-h-[500px] h-[400px] ">
          <img className="w-full h-full rounded-xl" src={workImg} alt="" />
        </div>
        <div className="w-full px-9">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Info;

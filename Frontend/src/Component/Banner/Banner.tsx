import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import banner from "./banner.png";
import { CardContainer } from "../Card/Card";
export const AuthNavbar = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  console.log(isSticky);
  React.useEffect(() => {
    const scrollation = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", scrollation);

    return () => {
      window.removeEventListener("scroll", scrollation);
    };
  }, []);

  return (
    <div className=" w-full  relative flex flex-col items-stretch">
      <div className={`px-10  flex bg-[#d5006a8a] py-3 items-center justify-start gap-4 w-full duration-150 ${isSticky ? "opacity-0 translate-y-[-39px] duration-200 " : "opacity-100"}`}>
        <h1 className="text-sm text-white">+91-9146201188</h1>
        <h2 className="text-sm text-white">info@jcbalabuildcon.com</h2>
      </div>
      <div
        className={`z-[5]  top-0 duration-1000 w-full ${isSticky ? "shadow-sm fixed translate-y-[0px] top-0" : "sticky translate-y-[0px] "}`}
      >
        <Navbar />
      </div>
    </div>
  );
};

export const Banner: React.FC = () => {
  return (
    <section
      style={{ backgroundImage: `url(${banner})` }}
      className={` relative bg-cover bg-repeat w-full  `}
    >
      <div className="h-[80vh]  flex flex-col pl-10 items-start justify-center gap-4">
        <div className="gap-2 w-[300px] flex flex-col items-start">
          <h2 className="text-white text-3xl font-bold flex flex-col items-baseline justify-center h-full">
            Jay Chand Bala <span>World of Innovation</span>
          </h2>
          <p className="text-white">
            Jay chand bala is the official website of Jay Chand Bala (JCB)
            Building Construction, a renowned company in the construction
            industry.
          </p>
        </div>
        <button className=" rounded-md text-white font-semibold px-5 py-2 bg-[var(--primary-color)] ">
          Get Started
        </button>
      </div>
      <div className=" absolute w-full bottom-[-50px]">
        <CardContainer />
      </div>
    </section>
  );
};

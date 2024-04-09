import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const BreadCrump = () => {
  const location = useLocation();

  const pathname = location.pathname.split("/").filter((x) => x);
  let BreadCrump = "";

  return (
    <div className={` pl-32 w-full  flex flex-col py-5 bg-[var(--secondary-dark-color)] items-start justify-center gap-3 ${pathname.length > 0  ? "": "hidden" }`}>
      <div className="flex items-center justify-start w-full gap-2">
        <Link
          className={` ${
            pathname.length > 0 ? "font-bold  text-white " : "hidden"
          }`}
          to={"/"}
        >
          Home
        </Link>
        {pathname?.map((name, index) => {
          BreadCrump += `> ${name.charAt(0).toUpperCase() + name.slice(1)}`;
          return (
            <span className=" text-white font-bold " key={index}>
              {BreadCrump}
            </span>
          );
        })}
      </div>
      <h1 className="border-b-[2px] border-white text-white text-3xl font-semibold " >{BreadCrump.split(">")}</h1>
    </div>
  );
};

export default BreadCrump;

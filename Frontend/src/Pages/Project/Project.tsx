import React, { useState } from "react";
import { CategoryDataType, PortfolioCategoryType } from "../../Mode/data.model";
import img1 from "../../../assets/Clip path group (1).png";
import img2 from "../../../assets/Clip path group (2).png";
import img3 from "../../../assets/Clip path group (3).png";
import img4 from "../../../assets/Clip path group (4).png";

export const PortfolioCategory: PortfolioCategoryType[] = [
  {
    category: "All",
  },
  {
    category: "Construction Management",
  },
  {
    category: "Facility Management",
  },
  {
    category: "Pavement Reservation",
  },
  {
    category: "Renovation",
  },
  {
    category: "Residential Credential",
  },
  {
    category: "Site Location",
  },
];

export const PortfolioCategoryData: PortfolioCategoryType[] = [
  {
    category: "Construction Management",
    Datas: [
      {
        data: "Construction Management",
        url: "/porfolio/construction-management",
        img: img1,
      },
    ],
  },
  {
    category: "Facility Maintanance",
    Datas: [
      {
        data: "Construction Management",
        url: "/porfolio/construction-management",
        img: img2,
      },
    ],
  },
  {
    category: "Pavement Preservation",
    Datas: [
      {
        data: "Construction Management",
        url: "/porfolio/construction-management",
        img: img3,
      },
    ],
  },
  {
    category: "Renovation",
    Datas: [
      {
        data: "Renovation",
        url: "/portfolio/renovation",
        img: img4,
      },
    ],
  },
  {
    category: "Residential Construction",
    Datas: [
      {
        data: "Residential Construction",
        url: "/portfolio/residential-construction",
        img: img4,
      },
    ],
  },
  {
    category: "Site Location",
    Datas: [
      {
        data: " Site Location",
        url: "/projects/site-location",
        img: img1,
      },
    ],
  },
];

const Project = () => {
  const [filterData, setFilterData] = useState<CategoryDataType[]>();
   const [Catindex , setIndex] = useState<number>()

  const hanldeClick = (category: string, Categoryindex : number) => {

    const filterCategoryData = PortfolioCategoryData.find(
      (categorydata) => categorydata.category === category
    );
    setFilterData(filterCategoryData?.Datas);
    setIndex(Categoryindex)
  };

  console.log(Catindex)
  return (
    <div>
      <div>
        <h1>FEATURE WORKS</h1>
        <h2>Our Portfolio</h2>
        <div className="flex w-full gap-6 py-10  justify-center items-center">
          {PortfolioCategory?.map((category, index) => {
            return (
              <div
                onClick={() => hanldeClick(category.category, index)}
                className={` ${Catindex === index ? "bg-[var(--primary-color)] px-2 rounded-sm py-1 text-white ": ""} font-semibold text-[var(--primary-color)] cursor-pointer `}
                key={index}
              >
                {category.category}
              </div>
            );
          })}
        </div>
        <div>
          {filterData?.map((data) => (
            <div className="flex items-center justify-evenly gap-3">
              <div className="lg:min-w-[500px] sm:min-w-[400px] w-full  flex flex-col gap-10">
                <div className="flex flex-col items-start justify-center gap-2">
                  <h1 className="text-[var(--primary-color)] text-3xl font-bold ">
                    {data.data}
                  </h1>
                  <h2 className="text-sm ">
                    With years of experience in the construction industry, We
                    has amassed a wealth of knowledge and expertise
                  </h2>
                </div>
                <button className="w-[200px] text-white text-[16px] font-semibold rounded-md px-10 py-2 bg-[var(--primary-color)] ">
                  View More
                </button>
              </div>
              <div className=" h-[350px] w-[500px]">
                <img
                  className="w-full rounded-md h-full"
                  src={data.img}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;

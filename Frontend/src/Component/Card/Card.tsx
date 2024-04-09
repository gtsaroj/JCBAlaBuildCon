import React from "react";
import construction from "../../../assets/construction.png";
import constructionMan from "../../../assets/ConstructionMan.jpg";
import comprehensiveImg from "../../../assets/Comprehensive.png";
import management from "../../../assets/management.png";
import homeSetting from "../../../assets/HomeSetting.png";

interface CardType {
  img: string;
  title: string;
  desc: string;
}

const cardTypeProp: CardType[] = [
  {
    img: construction,
    title: "Expertise and Experience",
    desc: " With years of experience in the construction industry, We has amassed a wealth of knowledge and expertise",
  },
  {
    img: constructionMan,
    title: "Quality Craftsmanship",
    desc: "We take immense pride in our commitment to delivering projects of the highest quality.",
  },
  {
    img: construction,
    title: "Comprehensive Services",
    desc: "We offer a full spectrum of construction services, from architectural design to construction management.",
  },
];

interface CartTypeOption {
  prop: CardType;
}

export const Card: React.FC<CartTypeOption> = ({ prop }) => {
  return (
    <div className=" w-[400px] flex items-center justify-center gap-4 bg-[var(--light-color)] rounded-xl px-4 py-5">
      <div className="w-[100px] h-[60px]">
        <img className="w-full h-full rounded-md" src={prop.img} alt="" />
      </div>
      <div className="flex items-baseline flex-col justify-center gap-1">
        <h1 className="text-[17px] font-semibold ">{prop.title}</h1>
        <p className="text-[12px]">{prop.desc}</p>
      </div>
    </div>
  );
};

export const CardContainer = () => {
  return (
    <div className=" w-full flex justify-evenly items-center">
      {cardTypeProp?.map((singleCard, index) => (
        <Card prop={singleCard} key={index} />
      ))}
    </div>
  );
};

// ===================================Service Card=========================================//

interface ServiceDataType {
  img: string;
  title: string;
  desc: string;
}

const ServiceCardData: ServiceDataType[] = [
  {
    img: construction,
    title: "Construction Mangement",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tempore reprehenderit labore at aut.",
  },
  {
    img: homeSetting,
    title: "Residential Construction",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tempore reprehenderit labore at aut.",
  },
  {
    img: constructionMan,
    title: "Construction Mangement",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tempore reprehenderit labore at aut.",
  },
  {
    img: construction,
    title: "Construction Mangement",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tempore reprehenderit labore at aut.",
  },
  {
    img: construction,
    title: "Construction Mangement",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tempore reprehenderit labore at aut.",
  },
  {
    img: construction,
    title: "Construction Mangement",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tempore reprehenderit labore at aut.",
  },
];
export const ServiceCard: React.FC<CartTypeOption> = ({ prop }) => {
  return (
    <div className=" flex w-[330px] gap-3 shadow-[#0000006e] shadow  flex-col items-center justify-center bg-[var(--light-color)] px-5 py-6 rounded-md">
      <div className="w-[70px] h-[60px]">
        <img className="w-full h-full rounded-md" src={prop.img} alt="" />
      </div>
      <div className="w-full flex flex-col items-center ">
        <h1 className="text-xl font-semibold">{prop.title}</h1>
        <p className="text-sm">{prop.desc}</p>
      </div>
      <button className="flex   items-center justify-center gap-1 text-[var(--primary-color)] text-[15px] font-semibold">
        <p>Read More +</p>
      </button>
    </div>
  );
};
export const ServiceCardContainer = () => {
  return (
    <div className="flex flex-col items-center py-20 gap-7">
      <div>
        <h1 className=" text-[var(--primary-color)] text-[16px] ">
          WHAT WE DO?
        </h1>
        <h2 className="text-2xl font-bold  text-[var(--primary-color)] ">
          Our Services
        </h2>
      </div>
      <div className="w-full flex justify-center px-10 items-center gap-6 gap-y-6 flex-wrap">
        {ServiceCardData?.map((singleServiceData, index) => (
          <ServiceCard prop={singleServiceData} key={index} />
        ))}
      </div>
    </div>
  );
};

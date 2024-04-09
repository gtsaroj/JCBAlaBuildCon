import React from "react";
import { ServiceCardContainer } from "../../Component/Card/Card";
import img from "../../../assets/Clip path group (1).png";

const Services: React.FC = () => {
  return (
    <div>
      <ServiceCardContainer />
      <div className="flex md:flex-row flex-col py-3  items-center justify-evenly gap-2  bg-[var(--red-color)] px-7 ">
        <div className="flex w-[400px] py-5 flex-col items-start justify-center gap-5 ">
          <div>
            <h1 className="text-[17px] text-white ">EXTRA WORK</h1>
            <h2 className="text-2xl font-semibold text-white ">
              Special Services
            </h2>
          </div>
          <div className="flex flex-col items-start justify-center gap-7 text-white  text-[15px] ">
            <p>
              Look no further than the esteemed construction powerhouse, Jay
              Chand Bala. Renowned for their unparalleled expertise, boundless
              creativity, and unwavering commitment to excellence, Jay Chand
              Bala stands as a paragon of innovation in the construction
              landscape. With an impressive track record of delivering
              extraordinary projects, they consistently manifest breathtaking
              architecture that not only captivates the eye but also fulfills
              the aspirations of their clients.
            </p>
            <p>
              With Jay Chand Bala at the helm, you can expect nothing short of a
              masterpiece – a testament to their unparalleled skill, unrelenting
              passion, and a relentless pursuit of perfection.
            </p>
          </div>
          <button className=" bg-[white] px-10 py-2 rounded-sm ">
            GET A QUOTE +
          </button>
        </div>
        <div className="w-[400px] h-[400px] ">
          <img className="w-full h-full rounded-sm" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Services;

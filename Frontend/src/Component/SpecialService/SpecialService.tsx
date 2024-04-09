import React from "react";
import WorkImg from "../../../assets/Clip path group (5).png";

export const WorkContent = () => {
  return (
    <div className="flex  text-white flex-col items-start justify-center gap-6">
      <h1 className="text-xl ">EXTRA WORK</h1>
      <div className="flex flex-col items-start justify-center gap-3">
        <h2 className="text-3xl font-bold">Special Services</h2>
        <p className="text-[15px] ">
          Look no further than the esteemed construction powerhouse, Jay Chand
          Bala. Renowned for their unparalleled expertise, boundless creativity,
          and unwavering commitment to excellence, Jay Chand Bala stands as a
          paragon of innovation in the construction landscape. With an
          impressive track record of delivering extraordinary projects, they
          consistently manifest breathtaking architecture that not only
          captivates the eye but also fulfills the aspirations of their clients.
        </p>
        <p className="text-[15px] ">
          With Jay Chand Bala at the helm, you can expect nothing short of a
          masterpiece – a testament to their unparalleled skill, unrelenting
          passion, and a relentless pursuit of perfection.
        </p>
      </div>
      <button></button>
    </div>
  );
};
const SpecialService: React.FC = () => {
  return (
    <div className="  flex md:flex-row flex-col bg-[var(--primary-color)] items-center justify-center gap-7 my-10 py-5 lg:px-28 md:px-10 px-7">
      <div className="w-1/2">
        <WorkContent />
      </div>
      <img className="lg:w-[500px] md:w-[450px] sm:w-[350px] h-full rounded-md" src={WorkImg} alt="" />
    </div>
  );
};

export default SpecialService;

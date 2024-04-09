import React from "react";
import {
  DessertIcon,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const Contact = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col items-center justify-center gap-6  py-20 px-7 ">
        <div className=" flex flex-col items-baseline justify-center gap-5 w-[50%] ">
          <h1 className="text-3xl font-bold">Get in touch !!</h1>
          <p className="text-[var(--secondary-light-text)] ">
            You can use social media to contact us or submit the form below
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="bg-[var(--primary-color)] text-white p-2 rounded-sm cursor-pointer  ">
              <Facebook className="text-white size-6" />
            </div>
            <div className="bg-[var(--primary-color)] text-white  p-2 rounded-sm cursor-pointer ">
              <Instagram className="text-white size-6" />
            </div>
            <div className="bg-[var(--primary-color)] text-white p-2 rounded-sm cursor-pointer  ">
              <Twitter className="text-white size-6" />
            </div>
            <div className="bg-[var(--primary-color)] text-white p-2 rounded-sm cursor-pointer  ">
              <Linkedin className="text-white size-6" />
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center gap-8 w-[50%] ">
          <div className="flex flex-col items-start justify-center gap-3">
            <div className=" bg-[var(--primary-color)] p-2 rounded-full ">
              <DessertIcon className="text-white size-9 " />
            </div>
            <h2 className="text-[var(--dark-text)] ">Address :</h2>
            <h3 className="text-[var(--secondary-dark-text)] ">
              403,4th Floor,Rivaansh Ikon,Baner Pan Card Club Road,Pune,
              Maharashtra-411045
            </h3>
          </div>
          <div className="flex flex-col items-start justify-center gap-3">
            <div className=" bg-[var(--primary-color)] p-2 rounded-full ">
              <DessertIcon className="text-white size-9 " />
            </div>
            <h2 className="text-[var(--dark-text)] ">Address :</h2>
            <h3 className="text-[var(--secondary-dark-text)] ">
              403,4th Floor,Rivaansh Ikon,Baner Pan Card Club Road,Pune,
              Maharashtra-411045
            </h3>
          </div>
          <div className="flex flex-col items-start justify-center gap-3">
            <div className=" bg-[var(--primary-color)] p-2 rounded-full ">
              <DessertIcon className="text-white size-9 " />
            </div>
            <h2 className="text-[var(--dark-text)] ">Address :</h2>
            <h3 className="text-[var(--secondary-dark-text)] ">
              403,4th Floor,Rivaansh Ikon,Baner Pan Card Club Road,Pune,
              Maharashtra-411045
            </h3>
          </div>
        </div>
      </div>
      <div>
        <form
          action=""
          className=" px-10 flex flex-col items-stretch justify-center gap-4 w-full "
        >
          <div className=" flex items-center justify-center gap-2 ">
            <input
              type="text"
              placeholder="Your Name"
              className=" border-[var(--secondary-light-text)] border-[1px]  py-2 px-3 w-full outline-none "
            />
            <input
              type="text"
              placeholder="Your Location"
              className=" border-[var(--secondary-light-text)] border-[1px]  py-2 px-3 w-full outline-none "
            />
          </div>
          <div className="flex items-center justify-center gap-2">
            <input
              type="text"
              placeholder="Phone Number"
              className=" border-[var(--secondary-light-text)] border-[1px]  py-2 px-3 w-full outline-none "
            />
            <input
              type="text"
              placeholder="Your Email"
              className=" border-[var(--secondary-light-text)] border-[1px]  py-2 px-3 w-full outline-none "
            />
          </div>
          <textarea
            cols={10}
            rows={7}
            className="border-[var(--secondary-light-text)] border-[1px]   py-2 px-3 w-full outline-none "
          />
          <button className="w-full flex text-white font-semibold text-[15px] items-center justify-center bg-[var(--primary-color)] rounded-md py-2 px-2 " >Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

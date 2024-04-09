import React from "react";
import logo from "../../../assets/logo.png";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col w-full justify-center items-stretch">
      <div className="flex flex-wrap  items-center py-7 gap-7  justify-between lg:px-16 px-10 w-full">
        <div className="flex flex-col items-baseline justify-center gap-4">
          <div className="w-[80px] h-[80px] ">
            <img className="w-full h-full rounded-full" src={logo} alt="" />
          </div>

          <p className="w-[300px]">
            Jay chand bala excels in construction with timely, sustainable
            projects. Their skilled team ensures customer satisfaction through
            transparent communication, making them industry-trusted.{" "}
          </p>
        </div>
        <div className="flex flex-col items-baseline justify-center gap-2">
          <h1>Quick Links</h1>
          <div className="flex flex-col items-start justify-center gap-1">
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Contact Us</a>
            <a href="">Services</a>
          </div>
        </div>
        <div className="flex flex-col items-baseline justify-center gap-2">
          <h1>Quick Links</h1>
          <div className="flex flex-col items-start justify-center gap-1">
            <a href="">Privacy Policy</a>
            <a href="">Careers</a>
            <a href="">Projects</a>
          </div>
        </div>
        <div className="w-[380px] flex flex-col items-baseline justify-center gap-2">
          <h1 className="flex items-start gap-1 justify-center">
            Phone/ WhatsApp: <span>+91-9146201188</span>
          </h1>
          <h2 className="flex items-start gap-1 justify-center">
            Email: <span>+91-9146201188</span>
          </h2>

          <h3 className="flex items-start gap-1 justify-center">
            Address:{" "}
            <span>
              403,4th Floor,Rivaansh Ikon,Baner Pan Card Club Road,Pune,
              Maharashtra-411045
            </span>
          </h3>
        </div>
      </div>
      <div className="py-2 bg-[var(--primary-color)] text-white px-3 w-full flex items-center justify-center">
        <h5 className="text-[15px]">
          Copyright © 2024 All Rights Reserved | Jay Chand Bala
        </h5>
      </div>
    </div>
  );
};

export default Footer;

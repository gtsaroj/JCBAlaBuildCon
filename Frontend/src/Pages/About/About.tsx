import React from "react";
import {
  ChevronRight,
  HomeIcon,
  Calendar,
  BookDownIcon,
  Home,
} from "lucide-react";
import img from "../../../assets/Clip path group (1).png";

// export const AboutUsData : exp = [
//     {

//     }
// ]
export const ConstructionTeamData = [
  {
    img: img,
    name: "Jay Chand Bala",
    position: "MANAGING DIRECTOR",
  },
  {
    img: img,
    name: "Jessica Smith",
    position: "ARCHITECT",
  },
  {
    img: img,
    name: "Melinda Doe",
    position: "ENGINEER",
  },
  {
    img: img,
    name: " Rick Edward Doe",
    position: "ENGINEER",
  },
];

export const AboutCard = () => {
  return (
    <div className=" flex justify-center items-center gap-3 w-[300px] ">
      <div>
        <HomeIcon className="size-9" />
      </div>
      <div className="">
        <h1 className="text-[20px] font-bold ">Work with The on The Market</h1>
        <p className="text-sm text-[var(--secondary-light-text)] ">
          With years of experience in the construction industry, Balainfra
          Building Construction has amassed a wealth of knowledge and expertise.
        </p>
        <button className=" flex items-center justify-start hover:gap-2 transition-all text-[var(--primary-color)]  text-[16px] font-semibold ">
          READ MORE <span className=" text-[18px] ">{">"}</span>
        </button>
      </div>
    </div>
  );
};

export const OurTeam = () => {
  return (
    <div className="flex">
      <div>
        <ChevronRight className="size-4" />
      </div>
      <div className="flex flex-col items-start justify-center gap-[4px]">
        <h1>Work with The on The Market</h1>
        <p>
          Work with The on The Market With years of experience in the
          construction industry, Balainfra Building Construction has amassed a
          wealth of knowledge and expertise.
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <div className="py-10 px-5 flex flex-col gap-5 w-full items-start justify-center ">
        <p>
          Jay chand bala is the official website of Jay Chand Bala (JCB)
          Building Construction, a renowned company in the construction
          industry. The website serves as a platform to showcase their
          expertise, services, and project portfolio.
        </p>
        <p>
          At Jay chand bala, visitors can explore a comprehensive range of
          construction services provided by the company. Whether it’s
          residential, commercial, or retail construction, JCB offers a wide
          array of services including architectural design, construction
          management, interior design, renovation, and project consulting. The
          website provides detailed information about each service, highlighting
          the company’s commitment to delivering high-quality projects.
        </p>
      </div>
      <div className="flex py-10 items-center justify-evenly gap-3 ">
        <AboutCard />
        <AboutCard />
        <AboutCard />
      </div>
      <div className="flex bg-[var(--primary-color)] py-8 px-4  items-center justify-evenly gap-5">
        <img src={img} className="w-[400px] rounded-sm h-[500px] " alt="" />
        <img src={img} className="w-[400px] rounded-sm h-[500px] " alt="" />
        <img src={img} className="w-[400px] rounded-sm h-[500px] " alt="" />
      </div>
      <div className="flex flex-col items-start justify-center gap-3  px-5 py-10">
        <p className="text-[15px]">
          Welcome to the official website of Jay Chand Bala (JCB) Building
          Construction, a distinguished name in the construction industry. Our
          platform is designed to offer visitors a comprehensive insight into
          our unparalleled expertise, a diverse spectrum of services, and an
          impressive project portfolio that reflects our commitment to
          excellence.
        </p>
        <p className="text-[15px]">
          At JCB, we take pride in delivering top-notch construction services
          across various sectors, including residential, commercial, and retail
          projects. With a reputation for excellence, we are dedicated to
          providing a range of services that cater to the unique needs of our
          clients. Whether it’s architectural design, construction management,
          interior design, renovation, or project consulting, we offer a
          complete suite of solutions that embody quality and precision.
        </p>
        <p className="text-[15px]">
          Our website serves as a gateway for visitors to explore the
          intricacies of each service we provide. From detailed descriptions to
          informative content, we aim to showcase the depth of our industry
          knowledge and the dedication we bring to every project. Architectural
          design is not just a service we offer; it’s a testament to our
          commitment to innovative and aesthetically pleasing structures.
          Construction management is not just a task; it’s a meticulous process
          ensuring the seamless execution of projects. Interior design is not
          just an add-on; it’s a transformative element that enhances the
          overall experience.
        </p>
        <p className="text-[15px]">
          Renovation is not just about making changes; it’s about revitalizing
          spaces to meet contemporary standards. Project consulting is not just
          a service; it’s a collaborative approach that leverages our expertise
          to guide clients through every phase of their construction journey.
        </p>
        <p className="text-sm">
          Explore our project portfolio to witness the tangible results of our
          dedication to delivering high-quality projects. At JCB Building
          Construction, we are not just builders; we are creators of spaces that
          inspire and endure. Thank you for visiting our official website – your
          gateway to the world of construction excellence.
        </p>
      </div>
      <div className="flex items-center justify-evenly gap-5">
        <div className="flex flex-col items-start justify-center gap-[1px]">
          <h1 className=" text-[35px] font-bold text-[var(--primary-color)] ">
            10+
          </h1>
          <p className="text-[14px] ">Business Year</p>
        </div>
        <div className="flex flex-col items-start justify-center gap-[1px]">
          <h1 className=" text-[35px] font-bold text-[var(--primary-color)] ">
            240+
          </h1>
          <p className="text-[14px] ">Satisfed Clients</p>
        </div>
        <div className="flex flex-col items-start justify-center gap-[1px]">
          <h1 className=" text-[35px] font-bold text-[var(--primary-color)] ">
            2000+
          </h1>
          <p className="text-[14px] ">Successfull Cases</p>
        </div>
        <div className="flex flex-col items-start justify-center gap-[1px]">
          <h1 className=" text-[35px] font-bold text-[var(--primary-color)] ">
            130+
          </h1>
          <p className="text-[14px] ">Pro Consultants</p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-2 py-10 px-5  ">
        <h1 className=" text-xl font-semibold text-red-500 ">OUR EXPERTS</h1>
        <h2 className="text-3xl py-2 font-bold ">Construction Team</h2>
        <div className="flex items-center justify-evenly px-5 gap-4 w-full ">
          {ConstructionTeamData?.map((data, index) => (
            <div
              className=" flex flex-col items-center justify-center "
              key={index}
            >
              <div className="w-[250px] h-[200px] overflow-hidden  ">
                <img
                  className="w-full hover:scale-[1.1] duration-150  h-full rounded-md"
                  src={data.img}
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-xl font-semibold ">{data.name}</h1>
                <p>{data.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

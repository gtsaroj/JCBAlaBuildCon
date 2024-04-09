import React from "react";

export const JobDescription = {
  title: "Job Description:",
  description: [
    "Ensure availability of requisite resources for timely site progress",
    "Coordinate sharing of material, machinery, labour and execution staff across project to ensure achievement of project schedule",
    "Ensure availability of requisite resources for timely site progress",
    "Coordinate sharing of material, machinery, labour and execution staff across project to ensure achievement of project schedule",
    "Ensure availability of requisite resources for timely site progress",
    "Coordinate sharing of material, machinery, labour and execution staff across project to ensure achievement of project schedule",
  ],
};

export const Qualifications = {
  title: "Qualifications:",
  description: [
    "Total Experience: 10 to 15 years",
    "Education: BE/Diploma in Civil Engineer/PG in Construction Management",
  ],
};

export const JobFormData = [
  {
    name: "Name",
    type: "text",
  },
  {
    name: "Email",
    type: "text",
  },
  {
    name: "Contact No",
    type: "text",
  },
  {
    name: "Address",
    type: "text",
  },
  {
    name: "Current Location",
    type: "text",
  },
  {
    name: "Experience",
    type: "text",
  },
  {
    name: "Qualification",
    type: "text",
  },
  {
    name: "Current CTC",
    type: "text",
  },
];

const Job = () => {
  return (
      <div className=" py-10 w-full px-10 flex flex-col items-start justify-center gap-10">
          <div className="flex gap-7 flex-col items-start">
          <div className="flex flex-col items-start gap-4 ">
          <h1 className="text-2xl  " >{JobDescription.title}</h1>
          {JobDescription?.description?.map((singleDescription, index) => (
            <div  key={index} className="flex items-center justify-start gap-3 ">
              <span className="text-[var(--red-color)] " >⦾</span> {singleDescription}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start gap-4 ">
          <h1 className="text-2xl " >{Qualifications.title} </h1>
          {Qualifications.description?.map((singleQualification, index) => (
            <div className="flex items-center justify-start gap-3" key={index}><span className="text-[var(--red-color)] " >⦿</span> {singleQualification}</div>
          ))}
        </div>
</div>
        <div className="w-full flex flex-col items-start gap-5 ">
          <h1  className="text-3xl font-semibold text-[var(--red-color)] " >Apply Online</h1>
          <form
            action=""
            className="flex flex-col items-start justify-center gap-5 w-full md:w-[650px] "
          >
            {JobFormData?.map((formData, index) => (
              <div key={index} className="flex md:flex-row flex-col items-start md:items-center justify-between w-full  md:gap-7 ">
                <label
                  className="flex items-center justify-center gap-1"
                  htmlFor=""
                >
                 <span className=""> {formData.name} </span><span className=" text-red-600 ">*</span>
                </label>
                <input
                  type={formData.type}
                  className="md:w-[500px] w-full py-2 px-1 border-[1px] border-[var(--secondary-dark-text)] hover:border-[red] outline-none  "
                />
              </div>
            ))}
          </form>
        </div>
      </div>

  );
};

export default Job;

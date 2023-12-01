import React from "react";
import { LandPlot, Briefcase, Clock } from "lucide-react";
import { nunito } from "@/app/ui/fonts";
const Results = () => {
  return (
    <section
      className={`max-container padding-container ${nunito.className} flex flex-row flex-wrap justify-center mt-[-100px]`}
    >
      <div className="flex flex-col justify-center text-center items-center background-color2 px-10 py-6 md:py-12 w-[450px] lg:w-1/3 rounded-tl-2xl rounded-tr-2xl lg:rounded-tr-none rounded-bl-none lg:rounded-bl-2xl">
        <div className="flex flex-row items-center justify-center text-center gap-2">
          <LandPlot width={30} height={30} />
          <p className="text-[28px] md:text-[35px] font-bold">1000+</p>
        </div>
        <p className="text-[20px] md:text-[25px] font-semibold">
          Projects finished
        </p>
        <p className="max-w-[350px] paragraph-sm italic mt-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit adipisicing.
        </p>
      </div>

      <div className="flex flex-col justify-center text-center items-center background-color1 px-10 py-6 md:py-12 w-[450px] lg:w-1/3">
        <div className="flex flex-row items-center justify-center text-center gap-2">
          <Clock width={30} height={30} />
          <p className="text-[28px] md:text-[35px] font-bold">20+</p>
        </div>
        <p className="text-[20px] md:text-[25px] font-semibold">
          Years of Experience
        </p>
        <p className="max-w-[350px] paragraph-sm italic mt-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit adipisicing.
        </p>
      </div>

      <div className="flex flex-col justify-center text-center items-center background-color2 px-10 py-6 md:py-12 w-[450px] lg:w-1/3 rounded-tr-none lg:rounded-tr-2xl rounded-br-2xl rounded-bl-2xl lg:rounded-bl-none">
        <div className="flex flex-row items-center justify-center text-center gap-2">
          <Briefcase width={30} height={30} />
          <p className="text-[28px] md:text-[35px] font-bold">3</p>
        </div>
        <p className="text-[20px] md:text-[25px] font-semibold">
          Professional Serivces
        </p>
        <p className="max-w-[350px] paragraph-sm italic mt-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit adipisicing.
        </p>
      </div>
    </section>
  );
};

export default Results;

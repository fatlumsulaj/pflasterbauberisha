import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
const Results = () => {
  // return (
  //   <section
  //     className={`max-container padding-container flex flex-row flex-wrap justify-center mt-[-100px]`}
  //   >
  //     <div className="flex flex-col justify-center text-center items-center background-color2 px-10 py-6 md:py-12 w-[450px] lg:w-1/3 rounded-tl-2xl rounded-tr-2xl lg:rounded-tr-none rounded-bl-none lg:rounded-bl-2xl">
  //       <div className="flex flex-row items-center justify-center text-center gap-2">
  //         <LandPlot width={30} height={30} />
  //         <p className="text-[28px] md:text-[35px] font-bold">1000+</p>
  //       </div>
  //       <p className="text-[20px] md:text-[25px] font-semibold">
  //         Projects finished
  //       </p>
  //       <p className="max-w-[350px] paragraph-sm italic mt-4">
  //         Lorem, ipsum dolor sit amet consectetur adipisicing elit adipisicing.
  //       </p>
  //     </div>

  //     <div className="flex flex-col justify-center text-center items-center background-color1 px-10 py-6 md:py-12 w-[450px] lg:w-1/3">
  //       <div className="flex flex-row items-center justify-center text-center gap-2">
  //         <Clock width={30} height={30} />
  //         <p className="text-[28px] md:text-[35px] font-bold">20+</p>
  //       </div>
  //       <p className="text-[20px] md:text-[25px] font-semibold">
  //         Years of Experience
  //       </p>
  //       <p className="max-w-[350px] paragraph-sm italic mt-4">
  //         Lorem, ipsum dolor sit amet consectetur adipisicing elit adipisicing.
  //       </p>
  //     </div>

  //     <div className="flex flex-col justify-center text-center items-center background-color2 px-10 py-6 md:py-12 w-[450px] lg:w-1/3 rounded-tr-none lg:rounded-tr-2xl rounded-br-2xl rounded-bl-2xl lg:rounded-bl-none">
  //       <div className="flex flex-row items-center justify-center text-center gap-2">
  //         <Briefcase width={30} height={30} />
  //         <p className="text-[28px] md:text-[35px] font-bold">3</p>
  //       </div>
  //       <p className="text-[20px] md:text-[25px] font-semibold">
  //         Professional Serivces
  //       </p>
  //       <p className="max-w-[350px] paragraph-sm italic mt-4">
  //         Lorem, ipsum dolor sit amet consectetur adipisicing elit adipisicing.
  //       </p>
  //     </div>
  //   </section>
  // );
  return (
    <section className="bg-neutral-950 py-4 text-white px-6 md:px-8">
      <div className="max-w-screen-lg py-10 flex flex-col md:flex-row items-center gap-4 md:gap-6 mx-auto">
        <div className="md:w-1/4">
          <h2 className="font-extrabold text-4xl md:text-7xl text-sunglow text-center">1K+</h2>
        </div>

        <div className="md:w-1/3">
          <h3 className="font-bold text-2xl text-center md:text-left">Completed projects</h3>
          <p className="mt-2 text-center md:text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi deserunt mollitia adipisci iste dolorum ad nulla debitis modi provident laudantium..</p>
        </div>
        <div className="w-full md:w-[41.666%]">
          <div className="h-full md:-mt-36">
            <div className="bg-neutral-800 p-5">
              <h3 className="font-bold text-2xl">Building experts</h3>
            </div>
            <div className="bg-mikado p-5 pb-10">
              <p className="text-black font-medium">We are changing the way we think about the building process and are able to achieve significant cost and schedule savings for our clients.</p>
              <Button className="mt-5 bg-neutral-900">Work with us <ChevronRight size={16} /></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Results;
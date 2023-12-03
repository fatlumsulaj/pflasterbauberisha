import React from "react";
import Image from "next/image";
import { nunito } from "@/app/ui/fonts";
import {
  Timer,
  BadgeCheck,
  Cog,
  Wand2,
  Headphones,
  ArrowUpNarrowWide,
} from "lucide-react";
const Line = () => {
  return <hr className="w-[80px] h-[4px] my-4 bg-[#fee856]" />;
};

const About = () => {
  return (
    <section
      className={`max-container padding-container my-14 md:my-20`}
    >
      <div className="flex flex-row flex-wrap justify-center items-center gap-x-28 gap-y-10">
        <div className="max-w-[500px]">
          <h2 className="heading2">Wer wir sind</h2>
          <Line />
          <p className="paragraph-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            impedit, ea incidunt blanditiis excepturi atque illum amet quam
            necessitatibus molestiae voluptatem harum suscipit libero,
            repellendus temporibus nisi veniam eveniet tempora. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ipsam quibusdam officia
            beatae atque possimus distinctio mollitia quas reprehenderit nisi
            ratione, veritatis ipsa velit provident, maxime architecto? Impedit
            non temporibus laboriosam.
          </p>
          
        </div>
        <Image
          src="/pflasterbau3.png"
          width={400}
          height={400}
          alt="Pflasterbau Berisha"
        />
      </div>
      <div className="flex flex-row-reverse justify-center flex-wrap items-center mt-14 md:mt-28 gap-x-28 gap-y-10">
        <div className="text-left">
          <h2 className="heading2">Warum Sie uns wählen sollten</h2>
          <hr className="w-[80px] h-[4px] my-4 bg-[#fee856]" />
          <p className="max-w-[500px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam neque earum iusto tenetur modi. Rem aspernatur provident magni unde reprehenderit? Laudantium nesciunt explicabo corporis vero dolorem ab fuga corrupti aliquid? Rem aspernatur provident magni unde reprehenderit? Laudantium nesciunt explicabo corporis vero dolorem ab fuga corrupti aliquid?</p>
        </div>
        <div className="flex flex-row flex-wrap max-w-[430px] justify-center gap-6">
          <div className="flex flex-col justify-center items-center gap-1 w-[160px] border-[1px] border-gray-200 p-6 shadow-md">
            <Timer width={30} height={30} color="#ffce3e"/>
            <p className="paragraph font-semibold">Erfahrung</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1 w-[160px] border-[1px] border-gray-200 p-6 shadow-md">
            <BadgeCheck width={30} height={30} color="#ffce3e"/>
            <p className="paragraph font-semibold">Qualität</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1 w-[160px] border-[1px] border-gray-200 p-6 shadow-md">
            <Cog width={30} height={30} color="#ffce3e"/>
            <p className="paragraph font-semibold">Zuverlässigkeit</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1 w-[160px] border-[1px] border-gray-200 p-6 shadow-md">
            <Wand2 width={30} height={30} color="#ffce3e"/>
            <p className="paragraph font-semibold">Kreativität</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1 w-[160px] border-[1px] border-gray-200 p-6 shadow-md">
            <Headphones width={30} height={30} color="#ffce3e"/>
            <p className="paragraph font-semibold">Kundenservice</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1 w-[160px] border-[1px] border-gray-200 p-6 shadow-md">
            <ArrowUpNarrowWide width={30} height={30} color="#ffce3e"/>
            <p className="paragraph font-semibold">Effizienz</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

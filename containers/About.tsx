import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import {
  Timer,
  BadgeCheck,
  Cog,
  Wand2,
  Headphones,
  ArrowUpNarrowWide,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Line = () => {
  return <hr className="w-[80px] h-[4px] my-4 bg-[#fee856]" />;
};

const About = () => {
  return (
    <section
      className={`max-container padding-container my-14 md:my-20`} id="über-uns"
    >
      <div className="flex flex-row flex-wrap justify-center items-center gap-x-28 gap-y-10">
        <div className="max-w-[800px] xl:max-w-[500px]">
          <h2 className="heading2">Wer wir sind</h2>
          <Line />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            impedit, ea incidunt blanditiis excepturi atque illum amet quam
            necessitatibus molestiae voluptatem harum suscipit libero,
            repellendus temporibus nisi veniam eveniet tempora.
          </p>
          <p className="my-3">Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ipsam quibusdam officia
            beatae atque possimus distinctio mollitia quas reprehenderit nisi
            ratione, veritatis ipsa velit provident, maxime architecto? Impedit
            non temporibus laboriosam.</p>
          <Button variant="outline" className="mt-2">Mehr anzeigen</Button>
        </div>
        <Image
          src="/pflasterbau3.png"
          width={400}
          height={400}
          alt="Pflasterbau Berisha"
        />
      </div>
      <div className="flex flex-row-reverse justify-center flex-wrap items-center mt-14 md:mt-28 gap-x-28 gap-y-10">
        <div className="text-left max-w-[800px] w-full xl:max-w-none xl:w-auto">
          <h2 className="heading2">Warum Sie uns wählen sollten</h2>
          <hr className="w-[80px] h-[4px] my-4 bg-[#fee856]" />
          <p className="xl:max-w-[500px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam neque earum iusto tenetur modi. Rem aspernatur provident magni unde reprehenderit? Laudantium nesciunt explicabo corporis vero dolorem ab fuga corrupti aliquid? Rem aspernatur provident magni unde reprehenderit? Laudantium nesciunt explicabo corporis vero dolorem ab fuga corrupti aliquid?</p>
          <div className="grid grid-cols-2 mt-4 gap-x-1 gap-y-2">
            <div className="flex gap-1 font-medium items-center">
              <ChevronRight size={16} className="text-mikado" /> Erfahrung
            </div>
            <div className="flex gap-1 font-medium items-center">
              <ChevronRight size={16} className="text-mikado" /> Qualität
            </div>
            <div className="flex gap-1 font-medium items-center">
              <ChevronRight size={16} className="text-mikado" /> Zuverlässigkeit
            </div>
            <div className="flex gap-1 font-medium items-center">
              <ChevronRight size={16} className="text-mikado" /> Kreativität
            </div>
            <div className="flex gap-1 font-medium items-center">
              <ChevronRight size={16} className="text-mikado" /> Kundenservice
            </div>
            <div className="flex gap-1 font-medium items-center">
              <ChevronRight size={16} className="text-mikado" /> Effizienz
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap max-w-[430px] justify-center gap-6">
          <div className="flex flex-col justify-center items-center gap-1 w-[160px] border-[1px] border-gray-200 p-6 shadow-md">
            <Timer width={30} height={30} color="#ffce3e" />
            <p className="paragraph font-semibold">Erfahrung</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1 w-[160px] border-[1px] border-gray-200 p-6 shadow-md">
            <BadgeCheck width={30} height={30} color="#ffce3e" />
            <p className="paragraph font-semibold">Qualität</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1 w-[160px] border-[1px] border-gray-200 p-6 shadow-md">
            <Cog width={30} height={30} color="#ffce3e" />
            <p className="paragraph font-semibold">Zuverlässigkeit</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1 w-[160px] border-[1px] border-gray-200 p-6 shadow-md">
            <Wand2 width={30} height={30} color="#ffce3e" />
            <p className="paragraph font-semibold">Kreativität</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1 w-[160px] border-[1px] border-gray-200 p-6 shadow-md">
            <Headphones width={30} height={30} color="#ffce3e" />
            <p className="paragraph font-semibold">Kundenservice</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1 w-[160px] border-[1px] border-gray-200 p-6 shadow-md">
            <ArrowUpNarrowWide width={30} height={30} color="#ffce3e" />
            <p className="paragraph font-semibold">Effizienz</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

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
      <div className="max-w-screen-smaller mt-14 mx-auto flex flex-col lg:flex-row-reverse items-center gap-y-10 gap-x-14">
        <div className="text-left w-full lg:w-2/3 flex flex-col-reverse lg:flex-row gap-14">
          <div className="flex flex-row max-w-[400px] mx-auto w-full lg:mx-0 lg:w-auto lg:max-w-none lg:flex-col justify-between">
            <div>
              <h5 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">43</h5>
              <p className="text-center text-neutral-600">Workers</p>
            </div>
            <div>
              <h5 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">20</h5>
              <p className="text-center text-neutral-600">Years experience</p>
            </div>
            <div>
              <h5 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">4</h5>
              <p className="text-center text-neutral-600">Services</p>
            </div>
          </div>
          <div>
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
        </div>
        <img className="w-full max-w-[300px] lg:max-w-none lg:w-1/3 object-cover rounded-md" src="https://ik.imagekit.io/0s9lwb2yr/Pflasterbauberisha/Why%20choose%20us_Nfk99gFrI?updatedAt=1702069241166" alt="" />
      </div>
    </section>
  );
};

export default About;

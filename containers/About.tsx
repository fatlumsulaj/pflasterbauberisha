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
      <div className="flex flex-row flex-wrap justify-center pb-10 items-center gap-x-28 gap-y-10">
        <div className="max-w-[800px] xl:max-w-[500px]">
          <h2 className="heading2">Wer wir sind</h2>
          <Line />
          <p>
          BS Pflasterbau Meisterbetrieb ist ein etablierter Meisterbetrieb mit über 20 Jahren Erfahrung im Pflasterbau. Unsere beeindruckende Erfolgsbilanz von über 1000 Projekten spiegelt unsere Fachkompetenz und Hingabe wieder. Mit stolzen 90% unserer Projekte im Herzen Münchens und in ganz Bayern sind wir Ihr verlässlicher Partner für hochwertige Pflaster-, Straßen und Tiefbauarbeiten.
          </p>
          <p className="my-3">Unsere Unterstützung beginnt bei der individuellen Beratung und erstreckt sich bis zur Durchführung, mit jahrelanger Kompetenz und pünktlicher Umsetzung zu einem fairen Preis. Wir sind spezialisiert auf Park- und Hofflächen, Straßen, Einfahrten, Terrassen und alle weiteren Pflasterbauarbeiten. Kontaktieren Sie uns jederzeit per E-Mail, über diese Website, telefonisch oder persönlich, um Ihre Anliegen schnell und zielgerichtet zu lösen.</p>
         {/* <Button variant="outline" className="mt-2">Mehr anzeigen</Button> */}
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
              <h5 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">1000+</h5>
              <p className="text-center text-neutral-600">Projekten</p>
            </div>
            <div>
              <h5 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">20</h5>
              <p className="text-center text-neutral-600">Jahre Erfahrung</p>
            </div>
            <div>
              <h5 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">2</h5>
              <p className="text-center text-neutral-600">Leistungen</p>
            </div>
          </div>
          <div>
            <h2 className="heading2">Warum Sie uns wählen sollten</h2>
            <hr className="w-[80px] h-[4px] my-4 bg-[#fee856]" />
            <p className="xl:max-w-[500px]">Wir bei BS Pflasterbau zeichnen uns durch präzise Handwerkskunst, erstklassige Qualität und umfassende Erfahrung im Pflasterbau aus. Unsere Hingabe für exzellente Arbeit spiegelt sich in jedem Projekt wider. Wir verstehen die Einzigartigkeiten jeder Region und nutzen dieses Wissen, um Ihr Projekt zu etwas Besonderem zu machen. Entscheiden Sie sich für BS Pflasterbau, wenn Sie unkomplizierte Handwerkskunst, Fachwissen und beeindruckende Ergebnisse wünschen - eine Partnerschaft, auf die Sie zählen können.</p>
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
        <img className="w-full max-w-[300px] lg:max-w-none lg:w-1/3 object-cover rounded-md" src="https://ik.imagekit.io/0s9lwb2yr/Pflasterbauberisha/pflasterbauberisha_cDQi821M0?updatedAt=1703807275946" alt="Pflasterbau Berisha" />
      </div>
    </section>
  );
};

export default About;

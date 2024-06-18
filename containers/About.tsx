import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <>
      <section className="px-4 md:px-8 bg-neutral-100 py-10 md:py-14 lg:py-20">
        <div className="max-w-screen-web mx-auto flex flex-col lg:flex-row items-center gap-6">
          <div className="w-full lg:w-1/2">
            <h2 className="h2 text-center lg:text-left">Wer wir sind</h2>
            <Separator className="w-1/3 max-w-[60px] h-1 border-none bg-primary mt-3 mb-4 mx-auto lg:mx-0" />
            <p className="text-[17px] md:text-lg text-black/80 text-center lg:text-left">BS Pflasterbau Meisterbetrieb ist ein etablierter Meisterbetrieb mit über 20 Jahren Erfahrung im Pflasterbau. Unsere beeindruckende Erfolgsbilanz von über 1000 Projekten spiegelt unsere Fachkompetenz und Hingabe wieder. Mit stolzen 90% unserer Projekte im Herzen Münchens und in ganz Bayern sind wir Ihr verlässlicher Partner für hochwertige Pflaster- und Gartenbauarbeiten.</p>
            <p className="text-[17px] md:text-lg text-black/80 mt-4 text-center lg:text-left">
              Unsere Unterstützung beginnt bei der individuellen Beratung und erstreckt sich bis zur Durchführung, mit jahrelanger Kompetenz und pünktlicher Umsetzung zu einem fairen Preis. Wir sind spezialisiert auf Park- und Hofflächen, Straßen, Einfahrten, Terrassen und alle weiteren Pflasterbauarbeiten. Kontaktieren Sie uns jederzeit per E-Mail, über diese Website, telefonisch oder persönlich, um Ihre Anliegen schnell und zielgerichtet zu lösen.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="w-full relative max-w-sm lg:max-w-md mx-auto">
              <img className="max-w-full relative z-30" src="../images/pflasterbau3.jpeg" alt="" />
              <div className="w-28 lg:w-40 xl:w-52 h-28 lg:h-40 xl:h-52 bg-primary absolute -bottom-4 md:-bottom-5 -right-4 md:-right-5 z-10"></div>
            </div>
          </div>
        </div>
      </section>
    </>
    // <section
    //   className={`max-container padding-container`} id="über-uns"
    // >
    //   <div className="flex flex-row flex-wrap justify-center pb-10 items-center gap-x-28 gap-y-10">
    //     <div className="max-w-[800px] xl:max-w-[500px]">
    //       <h2 className="heading2">Wer wir sind</h2>
    //       <Line />
    //       <p>
    //       BS Pflasterbau Meisterbetrieb ist ein etablierter Meisterbetrieb mit über 20 Jahren Erfahrung im Pflasterbau. Unsere beeindruckende Erfolgsbilanz von über 1000 Projekten spiegelt unsere Fachkompetenz und Hingabe wieder. Mit stolzen 90% unserer Projekte im Herzen Münchens und in ganz Bayern sind wir Ihr verlässlicher Partner für hochwertige Pflaster- und Gartenbauarbeiten.
    //       </p>
    //       <p className="my-3">Unsere Unterstützung beginnt bei der individuellen Beratung und erstreckt sich bis zur Durchführung, mit jahrelanger Kompetenz und pünktlicher Umsetzung zu einem fairen Preis. Wir sind spezialisiert auf Park- und Hofflächen, Straßen, Einfahrten, Terrassen und alle weiteren Pflasterbauarbeiten. Kontaktieren Sie uns jederzeit per E-Mail, über diese Website, telefonisch oder persönlich, um Ihre Anliegen schnell und zielgerichtet zu lösen.</p>
    //      {/* <Button variant="outline" className="mt-2">Mehr anzeigen</Button> */}
    //     </div>
    //     <Image
    //       src="/pflasterbau3.png"
    //       width={400}
    //       height={400}
    //       alt="Pflasterbau Berisha"
    //     />
    //   </div>
    //   <div className="max-w-screen-smaller mt-14 mx-auto flex flex-col lg:flex-row-reverse items-center gap-y-10 gap-x-14">
    //     <div className="text-left w-full lg:w-2/3 flex flex-col-reverse lg:flex-row gap-14">
    //       <div className="flex flex-row max-w-[400px] mx-auto w-full lg:mx-0 lg:w-auto lg:max-w-none lg:flex-col justify-between">
    //         <div>
    //           <h5 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">1000+</h5>
    //           <p className="text-center text-neutral-600">Projekten</p>
    //         </div>
    //         <div>
    //           <h5 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">20</h5>
    //           <p className="text-center text-neutral-600">Jahre Erfahrung</p>
    //         </div>
    //         <div>
    //           <h5 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">1</h5>
    //           <p className="text-center text-neutral-600">Leistungen</p>
    //         </div>
    //       </div>
    //       <div>
    //         <h2 className="heading2">Warum Sie uns wählen sollten</h2>
    //         <hr className="w-[80px] h-[4px] my-4 bg-[#fee856]" />
    //         <p className="xl:max-w-[500px]">Wir bei BS Pflasterbau zeichnen uns durch präzise Handwerkskunst, erstklassige Qualität und umfassende Erfahrung im Pflasterbau aus. Unsere Hingabe für exzellente Arbeit spiegelt sich in jedem Projekt wieder. Wir verstehen die Einzigartigkeiten jeder Region und nutzen dieses Wissen, um Ihr Projekt zu etwas Besonderem zu machen. Entscheiden Sie sich für BS Pflasterbau, wenn Sie unkomplizierte Handwerkskunst, Fachwissen und beeindruckende Ergebnisse wünschen - eine Partnerschaft, auf die Sie zählen können.</p>
    //         <div className="grid grid-cols-2 mt-4 gap-x-1 gap-y-2">
    //           <div className="flex gap-1 font-medium items-center">
    //             <ChevronRight size={16} className="text-mikado" /> Erfahrung
    //           </div>
    //           <div className="flex gap-1 font-medium items-center">
    //             <ChevronRight size={16} className="text-mikado" /> Qualität
    //           </div>
    //           <div className="flex gap-1 font-medium items-center">
    //             <ChevronRight size={16} className="text-mikado" /> Zuverlässigkeit
    //           </div>
    //           <div className="flex gap-1 font-medium items-center">
    //             <ChevronRight size={16} className="text-mikado" /> Kreativität
    //           </div>
    //           <div className="flex gap-1 font-medium items-center">
    //             <ChevronRight size={16} className="text-mikado" /> Kundenservice
    //           </div>
    //           <div className="flex gap-1 font-medium items-center">
    //             <ChevronRight size={16} className="text-mikado" /> Effizienz
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <img className="w-full max-w-[300px] lg:max-w-none lg:w-1/3 object-cover rounded-md" src="https://ik.imagekit.io/0s9lwb2yr/Pflasterbauberisha/pflasterbauberisha_cDQi821M0?updatedAt=1703807275946" alt="Pflasterbau Berisha" />
    //   </div>
    // </section>
  );
};

export default About;

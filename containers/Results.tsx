import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { HardHat } from "lucide-react";
import Link from "next/link";

const Results = () => {
  return (
    <section className="px-4 md:px-8 py-10">
      <div className="max-w-screen-web mx-auto grid grid-cols-2 gap-y-6 lg:grid-cols-4 items-center gap-x-4">
        <div className="flex flex-col lg:flex-row items-center gap-y-3 lg:items-start gap-x-6">
          <div className="min-w-16 w-16 min-h-16 h-16 rounded-full flex items-center justify-center bg-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="min-w-8 min-h-8 w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
            </svg>
          </div>
          <div>
            <h3 className="font-extrabold text-3xl text-center lg:text-left">20</h3>
            <p className="text-center lg:text-left">Jahre Erfahrung</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-y-3 lg:items-start gap-x-6">
          <div className="min-w-16 w-16 min-h-16 h-16 rounded-full flex items-center justify-center bg-primary">
            <HardHat className="min-w-8 min-h-8 w-8 h-8" />
          </div>
          <div>
            <h3 className="font-extrabold text-3xl text-center lg:text-left">1000</h3>
            <p className="text-center lg:text-left">Projekte</p>
          </div>
        </div>
        <div className="row-start-1 lg:row-start-auto -mt-20 col-span-2 p-6 md:p-10 lg:-mt-32 bg-primary relative flex flex-col items-center lg:items-start">
          <h3 className="font-bold text-lg md:text-xl lg:text-2xl">Experten für Pflasterbau</h3>
          <p className="mt-2 text-center lg:text-left">Vertrauen Sie einem Pflasterbauunternehmen mit 20 Jahren Erfahrung und setzen Sie auf Qualität und Professionalität für Ihr nächstes Bauprojekt!</p>
          <Link href="/kontakt" className="inline-block mt-4">
            <Button variant="secondary">Projekt starten  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="min-w-4 ml-2 min-h-4 w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
};

export default Results;

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

const Hero = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex(index === 2 ? 0 : index + 1)
  const prev = () => setIndex(index === 0 ? 2 : index - 1)

  return (
    <AnimatePresence initial={false} mode="popLayout">
      {index === 0 && (
        <motion.section
          key="section1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`py-24 md:py-32 lg:py-40 relative xl:py-48 background2 px-6 md:px-14 lg:px-[4.5rem]`}>
          <div className="absolute w-full h-full flex justify-between items-center top-0 left-0 pointer-events-none text-white">
            <button onClick={prev} className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-black/70 flex items-center justify-center pointer-events-auto hover:cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="min-w-6 min-h-6 w-6 h-6 lg:min-w-8 lg:min-h-8 lg:w-8 lg:h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button onClick={next} className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-black/70 flex items-center justify-center pointer-events-auto hover:cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="min-w-6 min-h-6 w-6 h-6 lg:min-w-8 lg:min-h-8 lg:w-8 lg:h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
          <div className="max-w-screen-web mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white text-left pb-3 xl:text-6xl">Berisha Pflasterbau Meisterbetrieb</h1>
            <p className="max-w-[600px] text-white paragraph-sm mb-4 text-left hover:cursor-text">
              Ihrem zuverlässigen Partner für hochwertige Pflasterarbeiten und kreative Gestaltung im Außenbereich. Entdecken Sie unsere umfassende Expertise und lassen Sie uns gemeinsam Ihr individuelles Projekt realisieren.
            </p>
            <div className="flex justify-start gap-2">
              <Button size="lg">
                <Link href="/kontakt">
                  Jetzt anfragen
                </Link>
              </Button>
            </div>
          </div>

        </motion.section>
      )}
      {index === 1 && (
        <motion.section
          key="section2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`py-24 md:py-32 lg:py-40 relative w-full xl:py-48 background1 px-6 md:px-14 lg:px-[4.5rem]`}>
          <div className="absolute w-full h-full flex justify-between items-center top-0 left-0 pointer-events-none text-white">
            <button onClick={prev} className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-black/70 flex items-center justify-center pointer-events-auto hover:cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="min-w-6 min-h-6 w-6 h-6 lg:min-w-8 lg:min-h-8 lg:w-8 lg:h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button onClick={next} className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-black/70 flex items-center justify-center pointer-events-auto hover:cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="min-w-6 min-h-6 w-6 h-6 lg:min-w-8 lg:min-h-8 lg:w-8 lg:h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
          <div className="max-w-screen-web mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white text-left pb-3 xl:text-6xl">Handwerk mit Perfektion</h1>
            <p className="max-w-[600px] text-white paragraph-sm mb-4 text-left hover:cursor-text">
              In unserem Meisterbetrieb steht Präzision an erster Stelle. Wir nehmen uns die Zeit, um Ihr Projekt mit Sorgfalt und Hingabe bis ins kleinste Detail umzusetzen.
            </p>
            <div className="flex justify-start gap-2">
              <Button size="lg">
                <Link href="/#leistungen">
                  Leistungen
                </Link>
              </Button>
            </div>
          </div>

        </motion.section>
      )}
      {index === 2 && (
        <motion.section
          key="section3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`py-24 md:py-32 lg:py-40 relative w-full xl:py-48 background3 px-6 md:px-14 lg:px-[4.5rem]`}>
          <div className="absolute w-full h-full flex justify-between items-center top-0 left-0 pointer-events-none text-white">
            <button onClick={prev} className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-black/70 flex items-center justify-center pointer-events-auto hover:cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="min-w-6 min-h-6 w-6 h-6 lg:min-w-8 lg:min-h-8 lg:w-8 lg:h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button onClick={next} className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-black/70 flex items-center justify-center pointer-events-auto hover:cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="min-w-6 min-h-6 w-6 h-6 lg:min-w-8 lg:min-h-8 lg:w-8 lg:h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
          <div className="max-w-screen-web mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white text-left pb-3 xl:text-6xl">Pflasterbau aus Leidenschaft</h1>
            <p className="max-w-[600px] text-white paragraph-sm mb-4 text-left hover:cursor-text">
              Unsere Hingabe für exzellente Pflasterarbeiten spiegelt sich in jedem Projekt wider. Bei Berisha Pflasterbau vereinen wir Fachkenntnisse mit Leidenschaft, um einzigartige und langlebige Ergebnisse zu schaffen.
            </p>
            <div className="flex justify-start gap-2">
              <Button size="lg">
                <Link href="/#faq">
                  FAQ
                </Link>
              </Button>
            </div>
          </div>

        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Hero;
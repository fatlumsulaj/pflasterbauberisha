"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import Carousel from "nuka-carousel"

const Hero = () => {
  return (
    <>
      {/* @ts-ignore */}
      <Carousel defaultControlsConfig={{ nextButtonText: <ChevronRight />, prevButtonText: <ChevronLeft />, pagingDotsStyle: { scale: 1.8 }, pagingDotsContainerClassName: "paging-dots" }}>
        <section
          className={`mt-[70px] background3 bg-black h-[600px] md:h-[700px] flex justify-center items-center text-center padding-container pb-[100px] -z-20`}
        >
          <div className="max-w-screen-smaller w-full">
            <h1 className="text-[32px] md:text-[38px] lg:text-[50px] font-semibold text-white text-left pb-3">Berisha Pflasterbau Meisterbetrieb</h1>
            <p className="max-w-[600px] text-white paragraph-sm mb-4 text-left">
            Ihrem zuverlässigen Partner für hochwertige Pflasterarbeiten und kreative Gestaltung im Außenbereich. Entdecken Sie unsere umfassende Expertise und lassen Sie uns gemeinsam Ihr individuelles Projekt realisieren.
            </p>
            <div className="flex justify-start gap-2">
              <Button size="lg" className="bg-main2 text-black font-medium hover:bg-main1">
                <Link href="/#über-uns">
                  Über uns
                </Link>
              </Button>
            </div>

          </div>
        </section>
        <section
          className={`mt-[70px] background2 bg-black h-[600px] md:h-[700px] flex justify-center items-center text-center padding-container pb-[100px] -z-20`}
        >
          <div className="max-w-screen-smaller w-full">
            <p className="paragraph uppercase text-white text-left">Pflasterbau Unternehmen</p>
            <h1 className="heading1 text-white text-left">Handwerk mit Perfektion</h1>
            <p className="max-w-[600px] text-white paragraph-sm mb-4 text-left">
            In unserem Meisterbetrieb steht Präzision an erster Stelle. Wir nehmen uns die Zeit, um Ihr Projekt mit Sorgfalt und Hingabe bis ins kleinste Detail umzusetzen.
            </p>
            <div className="flex justify-start gap-2">
              <Button size="lg" className="bg-main2 text-black font-medium hover:bg-main1">
                <Link href="/#leistungen">
                  Leistungen
                </Link>
              </Button>
            </div>

          </div>
        </section>
        <section
          className={`mt-[70px] background1 bg-black h-[600px] md:h-[700px] flex justify-center items-center text-center padding-container pb-[100px] -z-20`}
        >
          <div className="max-w-screen-smaller w-full">
            <p className="paragraph uppercase text-white text-left">Pflasterbau Unternehmen</p>
            <h1 className="heading1 text-white text-left">Pflasterbau aus Leidenschaft</h1>
            <p className="max-w-[600px] text-white paragraph-sm mb-4 text-left">
            Unsere Hingabe für exzellente Pflasterarbeiten spiegelt sich in jedem Projekt wider. Bei Berisha Pflasterbau vereinen wir Fachkenntnisse mit Leidenschaft, um einzigartige und langlebige Ergebnisse zu schaffen.
            </p>
            <div className="flex justify-start gap-2">
              <Button size="lg" className="bg-main2 text-black font-medium hover:bg-main1">
                <Link href="/#faq">
                  FAQ
                </Link>
              </Button>
            </div>

          </div>
        </section>
      </Carousel>
    </>
  );
};

export default Hero;
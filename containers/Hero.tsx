"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      className={`mt-[70px] background1 bg-black h-[600px] md:h-[700px] flex justify-center items-center text-center padding-container pb-[100px]`}
    >
      <img className="hidden md:block" src="/line-left.png" alt="line" />
      <div className="">
        <p className="paragraph uppercase text-white">WE BUILD YOUR DREAMS</p>
        <h1 className="heading1 text-white">BS Pflasterbau Meisterbetrieb</h1>
        <p className="max-w-[600px] text-white paragraph-sm mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          provident, delectus adipisci accusantium, distinctio, rem alias dicta
          nam dolor nobis earum.
        </p>
        <div className="flex justify-center gap-2">
          <Button variant="outline" className="bg-transparent text-white rounded-sm hover:bg-white/10 hover:text-white" size="lg">
            <Link href="/">
              Mehr Lesen
            </Link>
          </Button>
          <Button size="lg" className="bg-main2 text-black font-medium rounded-sm hover:bg-main1">
            <Link href="/">
              Get in touch
            </Link>
          </Button>
        </div>

      </div>
      <img className="hidden md:block" src="/line-right.png" alt="line" />
    </section>
  );
};

export default Hero;

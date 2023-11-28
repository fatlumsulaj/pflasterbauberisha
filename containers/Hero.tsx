"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { nunito } from "@/app/ui/fonts";
const Hero = () => {
  return (
    <section
      className={`mt-[70px] background1 bg-black h-[600px] md:h-[700px] flex justify-center items-center text-center padding-container ${nunito.className} pb-[100px]`}
    >
      <img src="/line-left.png" alt="line" />
      <div className="">
        <p className="paragraph uppercase text-white">WE BUILD YOUR DREAMS</p>
        <h1 className="heading1 text-white">BS Pflasterbau Meisterbetrieb</h1>
        <p className="max-w-[600px] text-white paragraph-sm mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          provident, delectus adipisci accusantium, distinctio, rem alias dicta
          nam dolor nobis earum.
        </p>
        <Link href="/" className="uppercase text-[19px] text-color font-semibold">
          Mehr Lesen
        </Link>
      </div>
      <img src="/line-right.png" alt="line" />
    </section>
  );
};

export default Hero;

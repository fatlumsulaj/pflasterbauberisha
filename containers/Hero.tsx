"use client";
import React, { useState } from "react";
import Image from "next/image";

const Hero = () => {
  const [current, setCurrent] = useState(1);

  const nextBtn = () => {
    setCurrent((prevCurrent) => (prevCurrent % 3) + 1);
  };

  const prevBtn = () => {
    setCurrent((prevCurrent) => (prevCurrent - 2 + 3) % 3 + 1);
  };

  return (
    <section className="mt-[70px]">
      <h1>Hello</h1>
      <button onClick={nextBtn}>Next</button>
      <button onClick={prevBtn}>Prev</button>

      {current === 1 && (
        <Image src="/pflasterbau1.jpg" alt="pflasterbau" width={1000} height={400} />
      )}

      {current === 2 && (
        <Image src="/pflasterbau2.jpg" alt="pflasterbau" width={1000} height={400} />
      )}

      {current === 3 && (
        <Image src="/pflasterbau3.jpg" alt="pflasterbau" width={1000} height={400} />
      )}
    </section>
  );
};

export default Hero;

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Projects({ id }: { id?: string }) {
  return (
    <section
      id={id || "referenzen"}
      className="px-4 md:px-8 py-10 md:py-14 lg:py-20"
    >
      <div className="max-w-screen-web mx-auto">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <div>
            <h2 className="h2 text-center md:text-left">Referenzen</h2>
            <p className="text-[17px] md:text-lg text-black/80 max-w-lg mt-2 text-center md:text-left">
              Sehen Sie sich unsere Projekte zu verschiedenen
              Pflasterbauleistungen an.
            </p>
          </div>
          <Link href="/kontakt">
            <Button>Jetzt Kontakt aufnehmen</Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 max-w-screen-web mx-auto mt-6 lg:mt-10 gap-2 md:gap-6">
        <Project
          src="https://ik.imagekit.io/inowebagentur/Berisha%20Pflasterbau/Photos/tr:w-550,h-400/WhatsApp%20Image%202026-05-05%20at%2012.02.24%20AM.jpeg"
          caption="Tiefbauarbeiten"
        />
        <Project
          src="https://ik.imagekit.io/inowebagentur/Berisha%20Pflasterbau/Photos/tr:w-550,h-400/WhatsApp%20Image%202026-05-05%20at%2012.02.25%20AM%20(4).jpeg"
          caption="Pflasterbauarbeiten"
        />
        <Project
          src="https://ik.imagekit.io/inowebagentur/Berisha%20Pflasterbau/Photos/tr:w-550,h-400/WhatsApp%20Image%202026-05-05%20at%2012.02.26%20AM%20(1).jpeg"
          caption="Pflasterbauarbeiten"
        />
        <Project
          src="https://ik.imagekit.io/inowebagentur/Berisha%20Pflasterbau/Photos/tr:w-550,h-400/WhatsApp%20Image%202026-05-05%20at%2012.02.25%20AM%20(1).jpeg"
          caption="Tiefbauarbeiten"
        />
        <Project
          src="https://ik.imagekit.io/inowebagentur/Berisha%20Pflasterbau/Photos/tr:w-550,h-400/WhatsApp%20Image%202026-05-05%20at%2012.02.25%20AM%20(3).jpeg"
          caption="Pflasterbauarbeiten"
        />
        <Project
          src="https://ik.imagekit.io/inowebagentur/Berisha%20Pflasterbau/Photos/tr:w-550,h-400/WhatsApp%20Image%202026-05-05%20at%2012.02.26%20AM.jpeg"
          caption="Tiefbauarbeiten"
        />
      </div>
    </section>
  );
}

export function Project({ src, caption }: { src: string; caption: string }) {
  const variants = {
    animate: {},
    initial: {},
  };

  const imageVariants = {
    animate: {
      scale: 1.2,
    },
    initial: {
      scale: 1,
    },
  };

  const divVariant = {
    animate: {
      opacity: 1,
    },
    initial: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      className="overflow-hidden relative"
      variants={variants}
      initial="initial"
      whileHover="animate"
    >
      <motion.img
        variants={imageVariants}
        src={src}
        alt={caption}
        transition={{ type: "just" }}
        className="object-cover h-full w-full"
        loading="lazy"
      />
      <motion.div
        variants={divVariant}
        className="w-full h-full bg-gradient-to-t from-black/80 to-transparent absolute top-0 p-6 lg:p-8 flex items-end"
      >
        <motion.h4
          variants={{
            initial: {
              y: 50,
            },
            animate: {
              y: 0,
            },
          }}
          transition={{ type: "just" }}
          className="font-semibold text-white mt-auto text-lg lg:text-xl"
        >
          {caption}
        </motion.h4>
      </motion.div>
    </motion.div>
  );
}

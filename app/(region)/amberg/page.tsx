import React from "react";
import { Metadata } from "next";

import AboutSection from "@/components/sections/about";
import HeroSection from "@/components/sections/hero";
import WhyChooseUs from "@/components/sections/why-choose-us";
import ServicesSection from "@/components/sections/services";
import Projects from "@/containers/Projects";
import Contact from "@/containers/Contact";
import FaqSection from "@/components/sections/faq-section";

export const metadata: Metadata = {
  title: "Pflasterbau & Tiefbau Amberg - Berisha Pflasterbau",
  description:
    "Wir sind Ihr Experte für Pflaster- und Tiefbau in Amberg mit hochwertigen Einfahrten, Wegen und Erdarbeiten für Privat und Gewerbe.",
  alternates: {
    canonical: "https://www.berisha-pflasterbau.de/amberg",
  },
};

export default function Amberg() {
  return (
    <main>
      <HeroSection
        h1="Pflasterbau & Tiefbau in Amberg"
        subHeadline="Wir gestalten Einfahrten, Wege, Terrassen und übernehmen sämtliche Tiefbauarbeiten in Amberg. Präzise, termingerecht und mit hochwertigen Materialien."
        cta={{ link: "/kontakt", label: "Jetzt anfragen" }}
        imageProps={{
          src: "https://ik.imagekit.io/utnmvphg1/Berisha%20Pflasterbau/tr:w-1800/pflasterbauhintergrund.webp",
          alt: "Berisha Pflasterbau",
          sizes: `(max-width: 420px) 420px,
                 (max-width: 700px) 700px,
                 (max-width: 1600px) 1600px,
                 1800px`,
          srcSet: `https://ik.imagekit.io/utnmvphg1/Berisha%20Pflasterbau/tr:w-420/pflasterbauhintergrund.webp 420w
          https://ik.imagekit.io/utnmvphg1/Berisha%20Pflasterbau/tr:w-700/pflasterbauhintergrund.webp 700w
          https://ik.imagekit.io/utnmvphg1/Berisha%20Pflasterbau/tr:w-1600/pflasterbauhintergrund.webp 1600w, 
          https://ik.imagekit.io/utnmvphg1/Berisha%20Pflasterbau/tr:w-1800/pflasterbauhintergrund.webp 1800w`,
          className: "absolute top-0 left-0 w-full h-full object-cover -z-10",
        }}
      />
      <AboutSection
        subHeadline="Über uns"
        title="Ihr Experte für Pflasterbau & Tiefbau in Amberg"
        cta={{
          label: "Projekte ansehen",
          link: "#projekte",
        }}
        paragraphs={[
          "Wir sind Ihr zuverlässiger Partner für Pflasterarbeiten in Amberg und professionelle Tiefbauarbeiten in Amberg. Seit über 20 Jahren realisieren wir hochwertige Einfahrten, Wege, Terrassen und Erdarbeiten für Privat- und Gewerbekunden in Amberg und Umgebung.",
          "Unsere Experten planen jedes Projekt sorgfältig, wählen die passenden Materialien aus und sorgen dafür, dass Ihre Pflasterarbeiten und Tiefbauprojekte langlebig, funktional und optisch ansprechend umgesetzt werden. Dank unserer langjährigen Erfahrung können wir auch komplexe Projekte in Amberg zuverlässig und termingerecht umsetzen.",
        ]}
      />
      <WhyChooseUs />
      <ServicesSection
        services={[
          {
            title: "Natursteinpflaster Amberg",
            description:
              "Natursteinpflaster eignet sich ideal für historische und moderne Projekte in Amberg. Es verleiht Einfahrten, Gehwegen und Terrassen einen zeitlosen und edlen Look, der den Charme der Stadt unterstreicht.",
          },
          {
            title: "Randsteine Amberg",
            description:
              "Wir verlegen Randsteine in Amberg, um Pflasterflächen stabil und ästhetisch abzurunden. Ob in engen Straßen oder großzügigen Gartenanlagen – Randsteine sorgen für klare Begrenzungen und Langlebigkeit.",
          },
          {
            title: "Verbundpflaster Amberg",
            description:
              "Verbundpflaster ist die wirtschaftliche und robuste Lösung für Einfahrten und Gehwege in Amberg. Es eignet sich perfekt für private und gewerbliche Projekte, bei denen Funktionalität und Beständigkeit gefragt sind.",
          },
          {
            title: "Wege und Einfahrten Amberg",
            description:
              "Wir gestalten Wege und Einfahrten in Amberg, die sowohl funktional als auch optisch ansprechend sind. Ob in städtischen Wohngebieten oder im Grünen – unsere Pflasterarbeiten fügen sich harmonisch in das Stadtbild ein.",
          },
        ]}
      />
      <section className="px-4 md:px-8 py-10 md:py-14 lg:py-20">
        <div className="max-w-screen-web mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-neutral-100 p-8 lg:p-12">
              <h2 className="h2">Pflasterbau in Amberg</h2>
              <p className="paragraph text-black/80 mt-4">
                Wir entwickeln individuelle Pflasterlösungen für private und
                gewerbliche Projekte in Amberg. Ob Natursteinpflaster,
                Verbundpflaster oder die Gestaltung von Wegen und Einfahrten –
                wir legen großen Wert auf Ästhetik, Stabilität und
                Langlebigkeit. Unsere Pflasterarbeiten verbinden Funktionalität
                mit einem optisch ansprechenden Ergebnis und fügen sich
                harmonisch in das Stadtbild von Amberg ein. Außerdem übernehmen
                wir die professionelle Beratung, Planung und Umsetzung Ihrer
                Pflasterprojekte, damit jeder Schritt reibungslos verläuft.
              </p>
            </div>
            <div className="bg-neutral-100 p-8 lg:p-12">
              <h2 className="h2">Tiefbau in Amberg</h2>
              <p className="paragraph text-black/80 mt-4">
                Im Bereich Tiefbau bieten wir umfassende Dienstleistungen für Bauprojekte in Amberg an. Dazu gehören Erdarbeiten, Fundamentvorbereitung, Kanal- und Leitungsbau sowie Abbrucharbeiten. Wir sorgen dafür, dass alle Tiefbauarbeiten fachgerecht, sicher und effizient ausgeführt werden, sodass Ihr Projekt auf einem soliden Fundament steht. Unsere Erfahrung garantiert langlebige Ergebnisse und eine präzise Umsetzung Ihrer Bauvorhaben in Amberg.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Projects id="projekte" />
      <FaqSection
        faqs={[
          {
            question: "Wie lange dauern Pflasterarbeiten in Amberg?",
            answer:
              "Die Dauer der Pflasterarbeiten in Amberg hängt von der Größe und Art des Projekts ab. Kleinere Flächen wie Einfahrten oder Gartenwege können meist innerhalb weniger Tage fertiggestellt werden. Bei größeren Flächen, wie Hof- oder Parkplatzanlagen, erstellen wir einen individuellen Zeitplan, der auch örtliche Gegebenheiten und mögliche Genehmigungen berücksichtigt.",
          },
          {
            question:
              "Welche Pflastersteine eignen sich besonders für das Amberger Klima?",
            answer:
              "In Amberg empfehlen wir Natursteinpflaster oder Verbundpflaster, da diese Materialien robust, langlebig und wetterbeständig sind. Besonders wichtig ist die Frostbeständigkeit, da die Winter in Amberg gelegentlich streng sein können. Fachgerechte Verlegung sorgt zudem für eine lange Lebensdauer Ihrer Pflasterflächen.",
          },
          {
            question:
              "Welche Pflasterarten eignen sich für Einfahrten und Gärten in Amberg?",
            answer:
              "Für private Projekte in Amberg sind Naturstein- und Verbundpflaster ideal. Naturstein verleiht Gärten einen edlen, natürlichen Look, während Verbundpflaster besonders für Einfahrten und stärker beanspruchte Flächen wegen seiner Stabilität und Wartungsfreundlichkeit genutzt wird. Beide Varianten verbinden Ästhetik mit Funktionalität.",
          },
          {
            question:
              "Bieten Sie auch Beratung und Planung für Pflasterprojekte in Amberg an?",
            answer:
              "Ja, wir unterstützen Sie von der ersten Idee bis zur fertigen Pflasterfläche. Wir beraten zu Materialwahl, Gestaltungsmöglichkeiten und Kosten und erstellen einen detaillierten Plan, der sowohl optische als auch praktische Anforderungen berücksichtigt. So erhalten Sie ein Ergebnis, das perfekt zu Ihrem Projekt in Amberg passt.",
          },
          {
            question:
              "Können Sie auch öffentliche oder gewerbliche Flächen in Amberg pflastern?",
            answer:
              "Absolut. Wir führen Pflasterarbeiten nicht nur für private Grundstücke, sondern auch für gewerbliche oder öffentliche Flächen durch. Dabei achten wir auf Belastbarkeit, Sicherheit und ein optisch ansprechendes Ergebnis, das sich harmonisch in die Umgebung von Amberg einfügt.",
          },
        ]}
      />
      <Contact />
    </main>
  );
}

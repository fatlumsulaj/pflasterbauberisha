import React from 'react'
import { Metadata } from 'next'

import AboutSection from '@/components/sections/about'
import HeroSection from '@/components/sections/hero'
import WhyChooseUs from '@/components/sections/why-choose-us'
import ServicesSection from '@/components/sections/services'
import Projects from '@/containers/Projects'
import Contact from '@/containers/Contact'
import FaqSection from '@/components/sections/faq-section'

export const metadata: Metadata = {
  title: "Pflaster- & Tiefbau in Passau - Berisha Pflasterbau",
  description: "Ihr erfahrener Partner für maßgeschneiderte Pflasterarbeiten in Passau, optimal angepasst an die individuellen Gegebenheiten unserer Stadt.",
  alternates: {
    canonical: "https://www.berisha-pflasterbau.de/passau"
  }
}

export default function Passau() {
  return (
    <main>
      <HeroSection
        h1="Pflaster- & Tiefbau in in Passau"
        subHeadline="Ihr erfahrener Partner für maßgeschneiderte Pflasterarbeiten in Passau, optimal angepasst an die individuellen Gegebenheiten unserer Stadt."
        cta={{ link: '/kontakt', label: 'Jetzt anfragen' }}
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
          className: "absolute top-0 left-0 w-full h-full object-cover -z-10"
        }}
      />
      <AboutSection
        subHeadline="Über uns"
        title="Ihr Fachbetrieb für Pflasterarbeiten & Tiefbau in Passau"
        cta={{
          label: 'Projekte ansehen',
          link: '#projekte'
        }}
        paragraphs={["BS Pflasterbau ist seit über zwei Jahrzehnten eine etablierte Größe in der Pflasterbaubranche und bietet passgenaue Lösungen für die besonderen Anforderungen der Stadt Passau. Von modernen Wohnanlagen bis hin zu historischen Straßen, unsere Arbeit spiegelt die Vielfalt und den einzigartigen Charme Passaus wider. Unser Team aus Pflasterbau-Experten kennt Passau bestens. Unsere langjährige Erfahrung in der Region bedeutet, dass wir die spezifischen Bodenverhältnisse und klimatischen Herausforderungen berücksichtigen und dabei stets nachhaltige und ästhetisch ansprechende Pflasterlösungen liefern."]}
      />
      <WhyChooseUs />
      <ServicesSection
        title="Unsere Pflasterbau-Leistungen in Passau"
        services={
          [
            { title: 'Natursteinpflaster Passau', description: "Ideal für historische und moderne Projekte, verleiht Natursteinpflaster Einfahrten, Gehwegen und Terrassen in Passau einen zeitlosen und edlen Look, der den besonderen Charakter der Stadt unterstreicht." },
            { title: 'Randsteine Passau', description: 'Wir verlegen Randsteine in Passau, die Pflasterflächen stabil und stilvoll ergänzen. Ob in engen Gassen oder großzügigen Gartenanlagen, Randsteine bieten klare Abgrenzungen und erhöhen die Haltbarkeit.' },
            { title: 'Verbundpflaster Passau', description: 'Verbundpflaster ist eine wirtschaftliche und belastbare Lösung für Einfahrten und Gehwege in Passau. Ideal für private und gewerbliche Projekte, bei denen Funktionalität und Langlebigkeit gefragt sind.' },
            { title: 'Wege und Einfahrten Passau', description: 'Unsere Gestaltung von Wegen und Einfahrten in Passau verbindet Funktionalität mit optischer Harmonie. Egal ob im Stadtzentrum oder im Grünen – unsere Pflasterarbeiten passen sich perfekt dem Stadtbild Passaus an.' }
          ]
        }
      />
      <Projects id="projekte" />
      <FaqSection faqs={[
        {
          question:
            "Wie lange dauern Pflasterarbeiten in Passau?",
          answer:
            "Die Dauer der Pflasterarbeiten in Passau richtet sich nach der Größe und Komplexität des Projekts. Kleinere Projekte, wie Wege und Einfahrten, können oft innerhalb weniger Tage abgeschlossen werden. Für größere Flächen wie Parkflächen erstellen wir einen individuellen Zeitplan, der auch lokale Besonderheiten und Genehmigungen berücksichtigt.",
        },
        {
          question:
            "Welche Pflastersteine sind für das Klima in Passau am besten geeignet?",
          answer:
            "In Passau empfehlen wir Naturstein- und Verbundpflaster, da diese Materialien besonders widerstandsfähig gegen die Witterung sind. Angesichts des wechselhaften Klimas legen wir großen Wert auf frostresistente Materialien und eine fachgerechte Verlegung.",
        },
        {
          question: 'Welche Pflasterarbeiten sind ideal für Gärten und Einfahrten in Passauer Wohngebieten?',
          answer: 'Für Gärten und Einfahrten in Passauer Wohngebieten sind sowohl Naturstein- als auch Verbundpflaster ideal. Naturstein harmoniert mit grünen Gartenanlagen, während Verbundpflaster in Einfahrten oft aufgrund seiner Langlebigkeit bevorzugt wird.'
        }
      ]} />
      <Contact />
    </main>
  )
}

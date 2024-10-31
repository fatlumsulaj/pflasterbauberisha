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
  title: "Pflasterbau in Regensburg - Berisha Pflasterbau",
  description: "Ihr erfahrener Partner für langlebige und ästhetische Pflasterarbeiten, perfekt abgestimmt auf die Anforderungen Regensburgs.",
  alternates: {
    canonical: "https://www.berisha-pflasterbau.de/regensburg"
  }
}

export default function Regensburg() {
  return (
    <main>
      <HeroSection
        h1="Pflasterbau in Regensburg"
        subHeadline="Ihr erfahrener Partner für langlebige und ästhetische Pflasterarbeiten, perfekt abgestimmt auf die Anforderungen Regensburgs."
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
        title="Ihr Fachbetrieb für Pflasterarbeiten in Regensburg"
        cta={{
          label: 'Projekte ansehen',
          link: '#projekte'
        }}
        paragraphs={["Suchen Sie einen erfahrenen Pflasterbau-Experten in Regensburg? BS Pflasterbau ist seit über 20 Jahren in der Pflasterbranche etabliert und bietet individuelle Lösungen für die speziellen Anforderungen in Regensburg. Ob moderne Bauprojekte oder klassische Pflasterflächen – unsere Arbeiten spiegeln den besonderen Charakter der Stadt wider.", "Unser Team ist mit den Bodenbeschaffenheiten und klimatischen Bedingungen in Regensburg bestens vertraut und bietet nachhaltige, ästhetische Pflasterarbeiten für eine lange Lebensdauer."]}
      />
      <WhyChooseUs />
      <ServicesSection
        title="Unsere Pflasterbau Leistungen in Regensburg"
        services={
          [
            { title: 'Natursteinpflaster Regensburg', description: "Natursteinpflaster eignet sich ideal für historische sowie moderne Projekte in Regensburg. Es verleiht Einfahrten, Wegen und Terrassen einen zeitlosen und hochwertigen Charakter, der den Charme der Stadt unterstreicht." },
            { title: 'Randsteine Regensburg', description: 'Wir verlegen Randsteine in Regensburg, die Pflasterflächen stabilisieren und ästhetisch ansprechend abrunden. Ob in schmalen Straßen oder großzügigen Gartenbereichen – Randsteine sorgen für klare Grenzen und Langlebigkeit.' },
            { title: 'Verbundpflaster Regensburg', description: 'Verbundpflaster ist die wirtschaftliche und robuste Wahl für Einfahrten und Wege in Regensburg. Es eignet sich für private und gewerbliche Projekte, bei denen Funktionalität und Haltbarkeit im Vordergrund stehen.' },
            { title: 'Wege und Einfahrten Regensburg', description: 'Wir gestalten Wege und Einfahrten in Regensburg, die sowohl funktional als auch optisch überzeugen. Unsere Pflasterarbeiten fügen sich perfekt in das Regensburger Stadtbild ein und passen sich städtischen sowie ländlichen Gebieten an.' }
          ]
        }
      />
      <Projects id="projekte" />
      <FaqSection faqs={[
        {
          question:
            "Wie lange dauern Pflasterarbeiten in Regensburg?",
          answer:
            "Die Dauer hängt von der Größe und Art des Projekts ab. Kleinere Pflasterprojekte wie Einfahrten und Wege sind oft in wenigen Tagen abgeschlossen. Für größere Bereiche wie Parkflächen in Regensburg erstellen wir einen individuellen Zeitplan, der örtliche Bedingungen und Genehmigungen berücksichtigt.",
        },
        {
          question:
            "Welche Pflastersteine sind für das Klima in Regensburg geeignet?",
          answer:
            "In Regensburg empfehlen wir Naturstein- und Verbundpflaster, da diese robust und witterungsbeständig sind. Das Klima in der Region mit warmen Sommern und kalten Wintern erfordert frostbeständige Materialien und fachgerechte Verlegung, die wir bei jedem Projekt garantieren.",
        },
        {
          question: 'Welche Pflasterarbeiten sind für Gärten und Einfahrten in Regensburger Wohngebieten geeignet?',
          answer: 'Für Gärten und Einfahrten in Regensburg bieten sich Naturstein- und Verbundpflaster gleichermaßen an. Naturstein ergänzt sich ideal mit grünen Gartenanlagen, während Verbundpflaster oft in Einfahrten wegen seiner Widerstandsfähigkeit und geringen Wartung bevorzugt wird.'
        }
      ]} />
      <Contact />
    </main>
  )
}

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
  title: "Pflasterbau in München - Berisha Pflasterbau",
  description: "Ihr erfahrener Partner für maßgeschneiderte Pflasterarbeiten in München, abgestimmt auf die individuellen Anforderungen unserer Stadt.",
  alternates: {
    canonical: "https://www.berisha-pflasterbau.de/muenchen"
  }
}

export default function Muenchen() {
  return (
    <main>
      <HeroSection
        h1="Pflasterbau in München"
        subHeadline="Ihr erfahrener Partner für maßgeschneiderte Pflasterarbeiten in München, abgestimmt auf die individuellen Anforderungen unserer Stadt."
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
        title="Qualität und Erfahrung direkt in München"
        cta={{
          label: 'Projekte ansehen',
          link: '#projekte'
        }}
        paragraphs={["BS Pflasterbau ist seit über zwei Jahrzehnten ein fester Bestandteil der Pflasterbaubranche und bietet maßgeschneiderte Lösungen für die speziellen Anforderungen der Stadt München. Von modernen Wohnanlagen bis hin zu historischen Pflasterstraßen, unsere Arbeit spiegelt die Vielfalt und den Charme Münchens wider.", "Wir sind nicht nur ein Unternehmen – wir sind ein Team von Pflasterbau-Experten, die München in- und auswendig kennen. Unsere Erfahrung in der Stadt bedeutet, dass wir die besonderen Bodenbedingungen und klimatischen Herausforderungen berücksichtigen und nachhaltige, ästhetische Pflasterlösungen anbieten."]}
      />
      <WhyChooseUs />
      <ServicesSection 
        title="Unsere Pflasterbau Leistungen in München"
        services={
          [
            { title: 'Natursteinpflaster München', description: "Natursteinpflaster ist ideal für historische und moderne Projekte in München. Es verleiht Einfahrten, Gehwegen und Terrassen in der Stadt einen zeitlosen und edlen Look, der den Münchener Charme unterstreicht." },
            { title: 'Randsteine München', description: 'Wir verlegen Randsteine in München, um Pflasterflächen stabil und ästhetisch abzurunden. Egal ob in engen Münchener Straßen oder großzügigen Gartenanlagen, Randsteine sorgen für klare Begrenzungen und Haltbarkeit.'},
            { title: 'Verbundpflaster München', description: 'Verbundpflaster ist die wirtschaftliche und robuste Lösung für Münchener Einfahrten und Gehwege. Es eignet sich perfekt für private und gewerbliche Projekte in der Stadt, bei denen Funktionalität und Langlebigkeit gefragt sind.' },
            { title: 'Wege und Einfahrten München', description: 'Wir gestalten Wege und Einfahrten in München, die sowohl funktional als auch optisch ansprechend sind. Ob in städtischen Wohngebieten oder im Grünen – unsere Pflasterarbeiten fügen sich nahtlos in das Münchener Stadtbild ein.' }
          ]
        }
      />
      <Projects id="projekte" />
      <FaqSection faqs={[
            {
              question:
                "Wie lange dauert es, Pflasterarbeiten in München durchzuführen?",
              answer:
                "Die Dauer der Pflasterarbeiten in München hängt von der Größe und Komplexität des Projekts ab. In der Regel können kleinere Projekte wie Einfahrten oder Wege innerhalb weniger Tage abgeschlossen werden. Für größere Flächen wie Park- oder Hofflächen in München erstellen wir einen maßgeschneiderten Zeitplan, der auch mögliche Genehmigungen und örtliche Bedingungen berücksichtigt.",
            },
            {
              question:
                "Welche Pflastersteine sind am besten für das Münchener Klima geeignet?",
              answer:
                "In München empfehlen wir besonders Natursteinpflaster oder Verbundpflaster, da diese Materialien langlebig und witterungsbeständig sind. Das Münchener Klima mit seinen heißen Sommern und frostigen Wintern stellt hohe Anforderungen an Pflastersteine, daher legen wir großen Wert auf frostresistente Materialien und fachgerechte Verlegung.",
            },
            {
              question: 'Welche Pflasterarbeiten sind für Gärten und Einfahrten in Münchener Wohngebieten ideal?',
              answer: 'Für Gärten und Einfahrten in Münchener Wohngebieten eignen sich sowohl Naturstein- als auch Verbundpflaster. Naturstein fügt sich ideal in grüne Gartenlandschaften ein, während Verbundpflaster in Einfahrten oft aufgrund seiner Langlebigkeit und Wartungsfreundlichkeit gewählt wird. Beide Materialien sind perfekt an die ästhetischen und funktionalen Anforderungen in München angepasst.'
            }
          ]} />
      <Contact />
    </main>
  )
}

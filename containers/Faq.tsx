import React from 'react'
import { HelpCircle } from 'lucide-react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faq() {
  return (
    <section className='px-6 md:px-8'>
      <div className="max-w-screen-smaller mx-auto py-40 flex items-center flex-col-reverse lg:flex-row">
        <img className='w-3/4 lg:w-1/2' src="https://ik.imagekit.io/0s9lwb2yr/Pflasterbauberisha/Faq%20image%20pflasterbau%20berisha_JtqcHphv8.png?updatedAt=1701800788698" alt="Pflasterbauberisha" />
        <div className='lg:w-1/2'>
          <h4 className='flex gap-1 uppercase text-[15px] font-semibold items-center'><HelpCircle size={16} /> Got questions?</h4>
          <h2 className='title mt-2'>Frequently Asked Questions</h2>
          <Accordion className='flex flex-col items-start gap-y-4 mt-6' type="single" collapsible>
            <AccordionItem value="1">
              <AccordionTrigger>Welche Arten von Pflasterbelägen bietet Ihr Unternehmen an?</AccordionTrigger>
              <AccordionContent>Wir bieten eine Vielzahl von Pflasterbelägen, darunter Betonpflaster, Natursteinpflaster und Klinkerpflaster. Jeder Belag hat seine eigenen ästhetischen und funktionalen Eigenschaften, die sich an unterschiedliche Kundenbedürfnisse anpassen.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="2">
              <AccordionTrigger>Wie kann ich einen Kostenvoranschlag für mein Pflasterprojekt erhalten?</AccordionTrigger>
              <AccordionContent>Um einen Kostenvoranschlag zu erhalten, können Sie unser Kontaktformular ausfüllen oder uns telefonisch kontaktieren. Wir vereinbaren dann gerne einen Termin, um die Details Ihres Projekts zu besprechen und Ihnen ein maßgeschneidertes Angebot zu unterbreiten.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="3">
              <AccordionTrigger>Bietet Ihr Unternehmen auch Reparaturdienstleistungen für bestehende Pflasterflächen an?</AccordionTrigger>
              <AccordionContent>
                Ja, wir bieten auch Reparaturdienstleistungen an. Ob es sich um kleine Ausbesserungen, das Anheben gesunkener Pflastersteine oder die Komplettrenovierung einer Fläche handelt, stehen wir Ihnen mit unseren Fachkenntnissen zur Verfügung.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="4">
              <AccordionTrigger>Welche zusätzlichen Dienstleistungen bietet Ihr Pflasterbau-Unternehmen an?</AccordionTrigger>
              <AccordionContent>
              Neben der Verlegung von Pflastersteinen bieten wir auch Leistungen wie die Planung von Pflasterprojekten, die Gestaltung von Außenbereichen und die Integration von Entwässerungslösungen an. Unsere ganzheitlichen Dienstleistungen sollen sicherstellen, dass Ihre Anforderungen umfassend erfüllt werden.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

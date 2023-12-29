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
    <section className='px-6 md:px-8' id="faq">
      <div className="max-w-screen-smaller mx-auto py-20 flex items-center flex-col-reverse lg:flex-row">
        <img className='w-3/4 lg:w-1/2' src="https://ik.imagekit.io/0s9lwb2yr/Pflasterbauberisha/Faq%20image%20pflasterbau%20berisha_JtqcHphv8.png?updatedAt=1701800788698" alt="Pflasterbauberisha" />
        <div className='lg:w-1/2'>
          <h4 className='flex gap-1 uppercase text-[15px] font-semibold items-center'><HelpCircle size={16} /> Got questions?</h4>
          <h2 className='title mt-2'>Frequently Asked Questions</h2>
          <Accordion className='flex flex-col items-start gap-y-4 mt-6' type="single" collapsible>
            <AccordionItem value="1">
              <AccordionTrigger>Wie lange dauert ein Pflasterbauprojekt?</AccordionTrigger>
              <AccordionContent>Ein Pflasterbauprojekt kann je nach Größe und Komplexität variieren. Kleinere Projekte können innerhalb weniger Tage abgeschlossen werden, während größere Projekte mehrere Wochen dauern können.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="2">
              <AccordionTrigger>Welche Städte deckt BS Pflasterbau an?</AccordionTrigger>
              <AccordionContent>Wir decken verschiedene Städte in Bayern ab, darunter München, Nürnberg, Augsburg, Regensburg und viele andere.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="3">
              <AccordionTrigger>Welche Kosten entstehen bei einem Pflasterprojekt?</AccordionTrigger>
              <AccordionContent>
              Die Kosten eines Pflasterprojekts hängen von verschiedenen Faktoren ab, einschließlich der Projektgröße, der gewählten Materialien und der Komplexität. Eine genaue Schätzung kann durch eine individuelle Beratung erfolgen.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="4">
              <AccordionTrigger>Welche Vorteile bietet Pflasterung im Vergleich zu Beton oder Asphalt?</AccordionTrigger>
              <AccordionContent>
              Pflasterung bietet im Vergleich zu Beton oder Asphalt mehrere Vorteile, darunter eine ästhetisch ansprechende Oberfläche, einfache Reparaturmöglichkeiten, eine bessere Wasserableitung und Flexibilität bei Temperaturschwankungen, was zu einer längeren Haltbarkeit führen kann.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

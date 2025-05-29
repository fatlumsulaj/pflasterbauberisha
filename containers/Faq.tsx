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
    <section className="px-4 md:px-8 mb-10 md:mb-14 lg:mb-20" id="faq">
      <div className="max-w-screen-web mx-auto">
        <h2 className="h2">Häufig gestellte Fragen</h2>
        <Accordion className='mt-6' type="single" collapsible>
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
    </section>
  )
}

import React from 'react'
import { Axe, Hammer, HardHat, Shovel, Warehouse } from 'lucide-react'

import { Button } from '@/components/ui/button'

const Services = () => {
  return (
    <section className='bg-neutral-50 pt-16 pb-20 md:pb-24 lg:pb-28 px-6 md:px-8' id="leistungen">
      <div className="max-w-screen-small mx-auto">
        <h4 className='flex gap-1 uppercase text-[15px] font-semibold justify-center items-center'><HardHat size={18} />Was wir machen</h4>
        <h2 className="title text-center mt-2">Unsere Leistungen</h2>
        <p className='text-center max-w-lg mx-auto mt-3'>Entdecken Sie die vielfältigen Leistungen unseres Unternehmens und lassen Sie sich von unserer Expertise überzeugen!</p>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 mt-10">

          <div className="px-6 py-12 flex flex-col items-start border border-solid border-neutral-200 rounded-lg bg-white shadow-sm">
            <Hammer size={80} className='text-mikado' />
            <h3 className='font-bold md:text-lg mt-6'>Pflasterbau</h3>
            <p className='mt-1 text-neutral-800'>Unsere herausragende Leistung im Pflasterbau zeichnet sich durch Präzision, Qualität und ästhetische Gestaltung aus.</p>

            <p className='mt-4 text-[15px]'><strong>Pflasterbau-Leistungen:</strong></p>
            <ul className="list-disc pl-6 mt-2">
              <li className='my-1 text-neutral-800'>Natursteinpflaster</li>
              <li className='my-1 text-neutral-800'>Randsteine</li>
              <li className='my-1 text-neutral-800'>Verbundpflaster usw.</li>
              <li className='my-1 text-neutral-800'>Wege und Einfahrten</li>
            </ul>
          </div>
{/* 

*/}
          <div className="hidden px-6 py-12 flex-col items-start border border-solid border-neutral-200 rounded-lg bg-white shadow-sm">
            <Shovel size={80} className='text-mikado' />
            <h3 className='font-bold md:text-lg mt-6'>Garten- und Landschaftsbau</h3>
            <p className='mt-1 text-neutral-800'>Wir machen Gärten modern: Kreativer Landschaftsbau für zeitgemäße und pflegeleichte Outdoor-Lösungen</p>

            <p className='mt-4 text-[15px]'><strong>Garten- und Landschaftsbau-Leistungen:</strong></p>
            <ul className="list-disc pl-6 mt-2">
              <li className='my-1 text-neutral-800'>Terrassen und Plätze</li>
              <li className='my-1 text-neutral-800'>Wege und Einfahrten</li>
              <li className='my-1 text-neutral-800'>Treppen usw.</li>
            </ul>
          </div>
          <div className="hidden px-6 py-12 flex-col items-start border border-solid border-neutral-200 rounded-lg bg-white shadow-sm">
            <Axe size={80} className='text-mikado' />
            <h3 className='font-bold md:text-lg mt-6'>Pflasterbau</h3>
            <p className='mt-1 text-neutral-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sed eveniet dolorum, voluptatum dicta illo vero quae dolorem.</p>

            <p className='mt-4 text-[15px]'><strong>Pflasterbau-Leistungen:</strong></p>
            <ul className="list-disc pl-6 mt-2">
              <li className='my-1 text-neutral-800'>First service</li>
              <li className='my-1 text-neutral-800'>Second service</li>
              <li className='my-1 text-neutral-800'>Third service</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
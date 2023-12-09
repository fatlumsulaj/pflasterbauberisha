import React from 'react'
import { Axe, Hammer, HardHat, Shovel, Warehouse } from 'lucide-react'

import { Button } from '@/components/ui/button'

const Services = () => {
  return (
    <section className='bg-neutral-50 pt-16 pb-20 md:pb-24 lg:pb-28 px-6 md:px-8' id="leistungen">
      <div className="max-w-screen-small mx-auto">
        <h4 className='flex gap-1 uppercase text-[15px] font-semibold justify-center items-center'><HardHat size={18} /> What we do</h4>
        <h2 className="title text-center mt-2">Our Services</h2>
        <p className='text-center max-w-lg mx-auto mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sequi cumque sed dolorum culpa! Possimus, harum.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

          <div className="px-6 py-12 flex flex-col items-start border border-solid border-neutral-200 rounded-lg bg-white shadow-sm">
            <Hammer size={80} className='text-mikado' />
            <h3 className='font-bold md:text-lg mt-6'>Pflasterbau</h3>
            <p className='mt-1 text-neutral-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sed eveniet dolorum, voluptatum dicta illo vero quae dolorem.</p>

            <p className='mt-4 text-[15px]'><strong>Pflasterbau-Leistungen:</strong></p>
            <ul className="list-disc pl-6 mt-2">
              <li className='my-1 text-neutral-800'>First service</li>
              <li className='my-1 text-neutral-800'>Second service</li>
              <li className='my-1 text-neutral-800'>Third service</li>
            </ul>
          </div>
          <div className="px-6 py-12 flex flex-col items-start border border-solid border-neutral-200 rounded-lg bg-white shadow-sm">
            <Shovel size={80} className='text-mikado' />
            <h3 className='font-bold md:text-lg mt-6'>Pflasterbau</h3>
            <p className='mt-1 text-neutral-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sed eveniet dolorum, voluptatum dicta illo vero quae dolorem.</p>

            <p className='mt-4 text-[15px]'><strong>Pflasterbau-Leistungen:</strong></p>
            <ul className="list-disc pl-6 mt-2">
              <li className='my-1 text-neutral-800'>First service</li>
              <li className='my-1 text-neutral-800'>Second service</li>
              <li className='my-1 text-neutral-800'>Third service</li>
            </ul>
          </div>
          <div className="px-6 py-12 flex flex-col items-start border border-solid border-neutral-200 rounded-lg bg-white shadow-sm">
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
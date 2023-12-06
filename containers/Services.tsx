import React from 'react'
import { HardHat } from 'lucide-react'

import { Button } from '@/components/ui/button'

const Services = () => {
  return (
    <section className='bg-neutral-100 pt-16 pb-20 md:pb-24 lg:pb-28 px-6 md:px-8' id="leistungen">
      <div className="max-w-screen-small mx-auto">
        <h4 className='flex gap-1 uppercase text-[15px] font-semibold justify-center items-center'><HardHat size={18} /> What we do</h4>
        <h2 className="title text-center mt-2">Our Services</h2>
        <p className='text-center max-w-lg mx-auto mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sequi cumque sed dolorum culpa! Possimus, harum.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <div className='border-solid border border-neutral-300 rounded-md overflow-hidden hover:bg-neutral-200 hover:border-neutral-300 transition-all cursor-pointer'>
            <img src="https://ik.imagekit.io/0s9lwb2yr/Pflasterbauberisha/pflasterbau3_yr0l0-fx4.jpeg?updatedAt=1701705580834" className='lg:h-44 w-full object-cover' alt="" />
            <div className="px-6 pb-8 flex flex-col items-center">
              <HardHat size={40} className='mx-auto text-mikado mt-4' />
              <h3 className='font-bold md:text-lg mt-2 text-center'>Natursteinpflaster</h3>
              <p className='text-center mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sed eveniet dolorum, voluptatum dicta illo vero quae dolorem.</p>
              <Button variant="outline" className='mx-auto mt-3 bg-transparent' >Learn more</Button>
            </div>
          </div>
          <div className='border-solid border border-neutral-300 rounded-md overflow-hidden hover:bg-neutral-200 hover:border-neutral-300 transition-all cursor-pointer'>
            <img src="https://ik.imagekit.io/0s9lwb2yr/Pflasterbauberisha/pflasterbau3_yr0l0-fx4.jpeg?updatedAt=1701705580834" className='lg:h-44 w-full object-cover' alt="" />
            <div className="px-6 pb-8 flex flex-col items-center">
              <HardHat size={40} className='mx-auto text-mikado mt-4' />
              <h3 className='font-bold md:text-lg mt-2 text-center'>Natursteinpflaster</h3>
              <p className='text-center mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sed eveniet dolorum, voluptatum dicta illo vero quae dolorem.</p>
              <Button variant="outline" className='mx-auto mt-3 bg-transparent' >Learn more</Button>
            </div>
          </div>
          <div className='border-solid border border-neutral-300 rounded-md overflow-hidden hover:bg-neutral-200 hover:border-neutral-300 transition-all cursor-pointer'>
            <img src="https://ik.imagekit.io/0s9lwb2yr/Pflasterbauberisha/pflasterbau3_yr0l0-fx4.jpeg?updatedAt=1701705580834" className='lg:h-44 w-full object-cover' alt="" />
            <div className="px-6 pb-8 flex flex-col items-center">
              <HardHat size={40} className='mx-auto text-mikado mt-4' />
              <h3 className='font-bold md:text-lg mt-2 text-center'>Natursteinpflaster</h3>
              <p className='text-center mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sed eveniet dolorum, voluptatum dicta illo vero quae dolorem.</p>
              <Button variant="outline" className='mx-auto mt-3 bg-transparent' >Learn more</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
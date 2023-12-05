import React from 'react'
import { Button } from '@/components/ui/button'

export default function Projects() {
  return (
    <section>
      <div className='bg-mikado'>
        <div className="max-w-screen-small px-6 md:px-8 py-12 md:py-16 mx-auto flex justify-between items-start gap-y-4 md:items-center flex-col md:flex-row">
          <div>
            <h2 className='title'>Projekte</h2>
            <p className='mt-2 max-w-lg font-medium'>Sehen Sie sich unsere Projekte zu verschiedenen Pflasterbauleistungen an.</p>
          </div>
          <Button className="bg-neutral-900" size="lg">Jetzt Kontakt aufnehmen</Button>
        </div>
      </div>
      <div className="max-w-screen-small px-6 md:px-8 py-8 lg:py-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className='border border-solid rounded-md py-4'>
          <h3 className='font-bold md:text-lg lg:text-xl px-4'>Außenanlage</h3>
          <img className='mt-2 rounded-sm h-[200px] w-full object-cover' src="https://kaiser-pflasterbau.de/files/content/referenzen/referenz3/Garten9.jpg" alt="" />
          <p className='mt-4 px-4 text-[15px] md:text-base'>mit Natursteinmauer & mehr...</p>
        </div>
        <div className='border border-solid rounded-md py-4'>
          <h3 className='font-bold md:text-lg lg:text-xl px-4'>Außenanlage</h3>
          <img className='mt-2 rounded-sm h-[200px] w-full object-cover' src="https://kaiser-pflasterbau.de/files/content/referenzen/referenz1/img_3360.jpg" alt="" />
          <p className='mt-4 px-4 text-[15px] md:text-base'>mit Natursteinmauer & mehr...</p>
        </div>
        <div className='border border-solid rounded-md py-4'>
          <h3 className='font-bold md:text-lg lg:text-xl px-4'>Außenanlage</h3>
          <img className='mt-2 rounded-sm h-[200px] w-full object-cover' src="https://kaiser-pflasterbau.de/files/content/referenzen/referenz2/referenz_2_5.jpg" alt="" />
          <p className='mt-4 px-4 text-[15px] md:text-base'>mit Natursteinmauer & mehr...</p>
        </div>
        <div className='border border-solid rounded-md py-4'>
          <h3 className='font-bold md:text-lg lg:text-xl px-4'>Außenanlage</h3>
          <img className='mt-2 rounded-sm h-[200px] w-full object-cover' src="https://kaiser-pflasterbau.de/files/content/referenzen/referenz3/Garten9.jpg" alt="" />
          <p className='mt-4 px-4 text-[15px] md:text-base'>mit Natursteinmauer & mehr...</p>
        </div>
        <div className='border border-solid rounded-md py-4'>
          <h3 className='font-bold md:text-lg lg:text-xl px-4'>Außenanlage</h3>
          <img className='mt-2 rounded-sm h-[200px] w-full object-cover' src="https://kaiser-pflasterbau.de/files/content/referenzen/referenz3/Garten9.jpg" alt="" />
          <p className='mt-4 px-4 text-[15px] md:text-base'>mit Natursteinmauer & mehr...</p>
        </div>
        <div className='border border-solid rounded-md py-4'>
          <h3 className='font-bold md:text-lg lg:text-xl px-4'>Außenanlage</h3>
          <img className='mt-2 rounded-sm h-[200px] w-full object-cover' src="https://kaiser-pflasterbau.de/files/content/referenzen/referenz3/Garten9.jpg" alt="" />
          <p className='mt-4 px-4 text-[15px] md:text-base'>mit Natursteinmauer & mehr...</p>
        </div>
      </div>

    </section>
  )
}

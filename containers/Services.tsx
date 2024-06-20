import React from 'react'

const Services = () => {
  return (
    <section className='pb-10 md:pb-14 lg:pb-20 bg-neutral-100 mb-10 md:mb-14 lg:mb-20'>
      <div className="background2 text-white pt-20 pb-32">
        <h2 className="h2 text-center">Leistungen</h2>
        <p className='text-[17px] md:text-lg text-white/80 text-center max-w-lg mx-auto mt-2'>Entdecken Sie die vielfältigen Leistungen unseres Unternehmens und lassen Sie sich von unserer Expertise überzeugen!</p>
      </div>
      <div className="max-w-screen-md -mt-20 mx-auto px-4 md:px-8">
        <div className="bg-mikado p-10">
          <h3 className="text-lg md:text-xl font-bold text-center">Pflasterbau</h3>
          <p className='mt-2 md:text-[17px] text-black/80 text-center'>Unsere herausragende Leistung im Pflasterbau zeichnet sich durch Präzision, Qualität und ästhetische Gestaltung aus.</p>
        </div>
        <div className="bg-white p-10">
          <h3 className="text-lg md:text-xl font-bold text-center">Pflasterbau Leistungen</h3>
          <ul className="grid grid-cols-2 gap-4 mt-5">
            <li className='text-center bg-neutral-100 p-3 font-medium'>Natursteinpflaster</li>
            <li className='text-center bg-neutral-100 p-3 font-medium'>Randsteine</li>
            <li className='text-center bg-neutral-100 p-3 font-medium'>Verbundpflaster</li>
            <li className='text-center bg-neutral-100 p-3 font-medium'>Wege und Einfahrten</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Services
import React from 'react'

type ServicesProps = {
  title: string;
  services: { title: string; description: string }[]
}

export default function ServicesSection({ title, services }: ServicesProps) {
  return (
    <section id="leistungen" className='pb-10 md:pb-14 lg:pb-20 bg-neutral-950'>
      <div className="background2 text-white pt-20 pb-32">
        <h2 className="h2 text-center">{title}</h2>
      </div>
      <div className="px-4 md:px-8">
        <div className="max-w-screen-web mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 -mt-20">
          <div className="bg-neutral-900 text-white p-6 md:p-8 lg:p-10">
            <img src="../images/leistungen/natursteinpflaster.png" alt="Natursteinpflaster" width="64px" height="64px" />
            <h3 className='text-lg sm:text-xl font-semibold mt-4'>{services[0].title}</h3>
            <p className='text-white/80 mt-2'>{services[0].description}</p>
          </div>
          <div className="bg-neutral-900 text-white p-6 md:p-8 lg:p-10">
            <img src="../images/leistungen/kerb.png" alt="Randsteine" width="64px" height="64px" />
            <h3 className='text-lg sm:text-xl font-semibold mt-4'>{services[1].title}</h3>
            <p className='text-white/80 mt-2'>{services[1].description}</p>
          </div>
          <div className="bg-neutral-900 text-white p-6 md:p-8 lg:p-10">
            <img src="../images/leistungen/paving.png" alt="Verbundpflaster" width="64px" height="64px" />
            <h3 className='text-lg sm:text-xl font-semibold mt-4'>{services[2].title}</h3>
            <p className='text-white/80 mt-2'>{services[2].description}</p>
          </div>
          <div className="bg-neutral-900 text-white p-6 md:p-8 lg:p-10">
            <img src="../images/leistungen/wege.png" alt="Wege und Einfahrten" width="64px" height="64px" />
            <h3 className='text-lg sm:text-xl font-semibold mt-4'>{services[3].title}</h3>
            <p className='text-white/80 mt-2'>{services[3].description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
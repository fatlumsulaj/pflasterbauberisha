import React from 'react'

const Services = () => {
  return (
    <section id="leistungen" className='pb-10 md:pb-14 lg:pb-20 bg-neutral-950'>
      <div className="background2 text-white pt-20 pb-32">
        <h2 className="h2 text-center">Unsere Pflasterbau Leistungen</h2>
        <p className='text-[17px] md:text-lg text-white/80 text-center max-w-lg mx-auto mt-2'>Entdecken Sie die vielfältigen Leistungen unseres Unternehmens und lassen Sie sich von unserer Expertise überzeugen!</p>
      </div>
      {/* <div className="max-w-screen-md -mt-20 mx-auto px-4 md:px-8">
        <div className="bg-mikado p-10">
          <h3 className="text-lg md:text-xl font-bold text-center">Pflasterbau</h3>
          <p className='mt-2 md:text-[17px] text-black/80 text-center'>Unsere herausragende Leistung im Pflasterbau zeichnet sich durch Präzision, Qualität und ästhetische Gestaltung aus.</p>
        </div>
        <div className="bg-white p-4 md:p-10">
          <h3 className="text-lg md:text-xl font-bold text-center">Pflasterbau Leistungen</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 mt-3 md:mt-5">
            <li className='text-center bg-neutral-100 p-3 font-medium'>Natursteinpflaster</li>
            <li className='text-center bg-neutral-100 p-3 font-medium'>Randsteine</li>
            <li className='text-center bg-neutral-100 p-3 font-medium'>Verbundpflaster</li>
            <li className='text-center bg-neutral-100 p-3 font-medium'>Wege und Einfahrten</li>
          </ul>
        </div>
      </div> */}
      <div className="px-4 md:px-8">
        <div className="max-w-screen-web mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 -mt-20">
          <div className="bg-neutral-900 text-white p-6 md:p-8 lg:p-10">
            <img src="../images/leistungen/natursteinpflaster.png" alt="Natursteinpflaster" width="64px" height="64px" />
            <h3 className='text-lg sm:text-xl font-semibold mt-4'>Natursteinpflaster</h3>
            <p className='text-white/80 mt-2'>Natursteinpflaster ist ideal für historische und moderne Projekte. Es verleiht Einfahrten, Gehwegen und Terrassen einen zeitlosen und edlen Look, der den besonderen Charme der Umgebung unterstreicht.</p>
          </div>
          <div className="bg-neutral-900 text-white p-6 md:p-8 lg:p-10">
            <img src="../images/leistungen/kerb.png" alt="Randsteine" width="64px" height="64px" />
            <h3 className='text-lg sm:text-xl font-semibold mt-4'>Randsteine</h3>
            <p className='text-white/80 mt-2'>Wir verlegen Randsteine, um Pflasterflächen stabil und ästhetisch abzurunden. Ob in engen Straßen oder großzügigen Gartenanlagen – Randsteine sorgen für klare Begrenzungen und Haltbarkeit.</p>
          </div>
          <div className="bg-neutral-900 text-white p-6 md:p-8 lg:p-10">
            <img src="../images/leistungen/paving.png" alt="Verbundpflaster" width="64px" height="64px" />
            <h3 className='text-lg sm:text-xl font-semibold mt-4'>Verbundpflaster</h3>
            <p className='text-white/80 mt-2'>Verbundpflaster ist die wirtschaftliche und robuste Lösung für Einfahrten und Gehwege. Es eignet sich perfekt für private und gewerbliche Projekte, bei denen Funktionalität und Langlebigkeit gefragt sind.</p>
          </div>
          <div className="bg-neutral-900 text-white p-6 md:p-8 lg:p-10">
            <img src="../images/leistungen/wege.png" alt="Wege und Einfahrten" width="64px" height="64px" />
            <h3 className='text-lg sm:text-xl font-semibold mt-4'>Wege und Einfahrten</h3>
            <p className='text-white/80 mt-2'>Wir gestalten Wege und Einfahrten, die sowohl funktional als auch optisch ansprechend sind. Ob in Wohngebieten oder im Grünen – unsere Pflasterarbeiten fügen sich nahtlos in das bestehende Umfeld ein.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
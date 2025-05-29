import React from 'react'

const Services = () => {
  return (
    <section id="leistungen" className='pb-10 md:pb-14 lg:pb-20 bg-neutral-950'>
      <div className="background2 text-white pt-20 pb-32">
        <h2 className="h2 text-center">Unsere Pflasterbau Leistungen</h2>
        <p className='text-[17px] md:text-lg text-white/80 text-center max-w-lg mx-auto mt-2'>Entdecken Sie die vielfältigen Leistungen unseres Unternehmens und lassen Sie sich von unserer Expertise überzeugen!</p>
      </div>
      <div className="px-4 md:px-8">
        <div className="max-w-screen-web mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 -mt-20">
          <div className="bg-neutral-900 p-6 md:p-8 lg:p-10 text-white md:col-span-2 md:flex md:items-center md:gap-x-5">
            <img src="https://ik.imagekit.io/inowebagentur/Berisha%20Pflasterbau/glasfaser-stromkabel?updatedAt=1748552097006" alt="Glasfaser- & Stromkabel" className='w-16 h-16  max-w-[64px]' />
            <div>
              <h3 className='text-lg sm:text-xl font-semibold mt-4'>Glasfaser- & Stromkabel</h3>
              <p className='text-white/80 mt-2 max-w-xl'>Im Rahmen unserer Tiefbauleistungen übernehmen wir die fachgerechte Verlegung von Glasfaser- und Stromkabeln. Präzise Ausführung und Einhaltung aller technischen Standards gewährleisten eine zuverlässige Infrastruktur.</p>
            </div>
          </div>
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
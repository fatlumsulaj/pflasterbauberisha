import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { HardHat, PencilRuler, Star, UsersRound } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Muenchen() {
  return (
    <main>
      <section className='relative bg-black/60 px-4 md:px-8'>
        <img className='absolute top-0 left-0 w-full h-full object-cover -z-10'
          srcSet="
          https://ik.imagekit.io/utnmvphg1/Berisha%20Pflasterbau/tr:w-420/pflasterbauhintergrund.webp 420w
          https://ik.imagekit.io/utnmvphg1/Berisha%20Pflasterbau/tr:w-700/pflasterbauhintergrund.webp 700w
          https://ik.imagekit.io/utnmvphg1/Berisha%20Pflasterbau/tr:w-1600/pflasterbauhintergrund.webp 1600w, 
          https://ik.imagekit.io/utnmvphg1/Berisha%20Pflasterbau/tr:w-1800/pflasterbauhintergrund.webp 1800w"
          sizes='(max-width: 420px) 420px,
                 (max-width: 700px) 700px,
                 (max-width: 1600px) 1600px,
                 1800px'
          src="https://ik.imagekit.io/utnmvphg1/Berisha%20Pflasterbau/tr:w-1800/pflasterbauhintergrund.webp" alt="Pflasterbau Berisha" />
        <div className="max-w-screen-web mx-auto text-white py-20 md:py-28 lg:py-36">
          <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white text-left'>Pflasterbau in München</h1>
          <p className='paragraph text-white/80 max-w-xl mt-2 md:mt-4 lg:mt-6'>Ihr erfahrener Partner für maßgeschneiderte Pflasterarbeiten in München, abgestimmt auf die individuellen Anforderungen unserer Stadt.</p>
          <Link href="/kontakt" className='inline-block mt-2 md:mt-4 lg:mt-6'>
            <Button>
              Jetzt anfragen
            </Button>
          </Link>
        </div>
      </section>
      <section className="md:px-8 py-10 md:py-14 lg:py-20">
        <div className="max-w-screen-web mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div className='px-4 md:px-0'>
            <h3 className='text-lg md:text-xl font-semibold'>Über uns</h3>
            <h2 className='h2 mt-2'>Qualität und Erfahrung direkt in München</h2>
            <Separator className='w-1/3 max-w-[5.5rem] md:max-w-[8rem] h-1 border-none bg-primary my-2 md:my-4' />
            <p className='paragraph text-black/80 mt-2 '>BS Pflasterbau ist seit über zwei Jahrzehnten ein fester Bestandteil der Pflasterbaubranche und bietet maßgeschneiderte Lösungen für die speziellen Anforderungen der Stadt München. Von modernen Wohnanlagen bis hin zu historischen Pflasterstraßen, unsere Arbeit spiegelt die Vielfalt und den Charme Münchens wider.</p>
            <p className='paragraph text-black/80 mt-2'>Wir sind nicht nur ein Unternehmen – wir sind ein Team von Pflasterbau-Experten, die München in- und auswendig kennen. Unsere Erfahrung in der Stadt bedeutet, dass wir die besonderen Bodenbedingungen und klimatischen Herausforderungen berücksichtigen und nachhaltige, ästhetische Pflasterlösungen anbieten.</p>
            <div className="flex flex-col md:flex-row md:items-center gap-4 mt-4 lg:mt-6">
              <div className='flex items-center gap-4'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 lg:w-16 lg:h-16 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                </svg>
                <div>
                  <div className='text-3xl md:text-4xl font-bold'>20+</div>
                  <p>Jahre Erfahrung</p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <HardHat className="w-12 h-12 lg:w-16 lg:h-16 text-primary" />
                <div>
                  <div className='text-3xl md:text-4xl font-bold'>1000+</div>
                  <p>Projekte</p>
                </div>
              </div>
            </div>
            <Link href="#referenzen" className='inline-block mt-4 lg:mt-6'>
              <Button variant="secondary">Projekte ansehen</Button>
            </Link>
          </div>
          <div className='mx-auto relative w-full md:w-auto md:hidden lg:block'>
            <img src="https://ik.imagekit.io/utnmvphg1/Berisha%20Pflasterbau/tr:w-420/pflasterbau?updatedAt=1730233913637" width="420px" height="279px" alt="Pflasterbau" className='w-full md:w-auto' />
            <div className="hidden md:block w-full h-full absolute top-4 left-4 bg-primary -z-10"></div>
          </div>
        </div>
      </section>
      <section className="px-4 md:px-8 py-10 md:py-14 lg:py-20">
        <div className="max-w-screen-web mx-auto">
          <h2 className="h2 text-center">Warum Sie uns wählen sollen</h2>
          <div className="mt-4 md:mt-8 lg:mt-12 flex flex-wrap justify-center gap-y-6">
            <div className="basis-full md:basis-1/2 lg:basis-1/3 px-4">
              <Star className='text-primary w-10 h-10 lg:w-12 lg:h-12' />
              <h3 className="text-lg md:text-xl xl:text-2xl font-semibold mt-2 lg:mt-4">Erfahrung und Expertise</h3>
              <p className='text-black/80 mt-2'>Mit über 20 Jahren Erfahrung setzen wir Ihr Pflasterprojekt fachgerecht und mit Liebe zum Detail um.</p>
            </div>
            <div className="basis-full md:basis-1/2 lg:basis-1/3 px-4">
              <PencilRuler className='text-primary w-10 h-10 lg:w-12 lg:h-12' />
              <h3 className="text-lg md:text-xl xl:text-2xl font-semibold mt-2 lg:mt-4">Individuelle Lösungen</h3>
              <p className='text-black/80 mt-2'>Jedes Projekt passen wir individuell an die Anforderungen und das Stadtbild Münchens an.</p>
            </div>
            <div className="basis-full md:basis-1/2 lg:basis-1/3 px-4">
              <UsersRound className='text-primary w-10 h-10 lg:w-12 lg:h-12' />
              <h3 className="text-lg md:text-xl xl:text-2xl font-semibold mt-2 lg:mt-4">Verlässlicher Kundenservice</h3>
              <p className='text-black/80 mt-2'>Als Ihr kompetenter Partner betreuen wir Projekte in ganz München, stets kundenorientiert und präzise.</p>
            </div>
          </div>
        </div>
      </section>
      <div className="h-screen"></div>
    </main >
  )
}

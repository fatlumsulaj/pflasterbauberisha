import React from 'react'
import { Star, PencilRuler, UsersRound } from 'lucide-react'

export default function WhyChooseUs() {
  return (
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
            <p className='text-black/80 mt-2'>Jedes Projekt passen wir individuell an die Anforderungen und das jeweilige Umfeld an.</p>
          </div>
          <div className="basis-full md:basis-1/2 lg:basis-1/3 px-4">
            <UsersRound className='text-primary w-10 h-10 lg:w-12 lg:h-12' />
            <h3 className="text-lg md:text-xl xl:text-2xl font-semibold mt-2 lg:mt-4">Verlässlicher Kundenservice</h3>
            <p className='text-black/80 mt-2'>Als Ihr kompetenter Partner betreuen wir Projekte stets kundenorientiert und mit höchster Präzision.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { HardHat } from 'lucide-react'

type AboutProps = {
  subHeadline: string;
  title: string;
  paragraphs: string[];
  cta: {
    label: string;
    link: string;
  }
}

export default function AboutSection({ title, subHeadline, cta, paragraphs }: AboutProps) {
  return (
    <section className="md:px-8 py-10 md:py-14 lg:py-20">
      <div className="max-w-screen-web mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <div className='px-4 md:px-0'>
          <h3 className='text-lg md:text-xl font-semibold'>{subHeadline}</h3>
          <h2 className='h2 mt-2'>{title}</h2>
          <Separator className='w-1/3 max-w-[5.5rem] md:max-w-[8rem] h-1 border-none bg-primary my-2 md:my-4' />
          {paragraphs.map((p, i) => (
            <p key={i} className='paragraph text-black/80 mt-2'>{p}</p>
          ))}
          
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
          <Link href={cta.link} className='inline-block mt-4 lg:mt-6'>
            <Button variant="secondary">{cta.label}</Button>
          </Link>
        </div>
        <div className='mx-auto relative w-full md:w-auto md:hidden lg:block'>
          <img src="https://ik.imagekit.io/utnmvphg1/Berisha%20Pflasterbau/tr:w-420/pflasterbau?updatedAt=1730233913637" width="420px" height="279px" alt="Pflasterbau" className='w-full md:w-auto' />
          <div className="hidden md:block w-full h-full absolute top-4 left-4 bg-primary -z-10"></div>
        </div>
      </div>
    </section>
  )
}

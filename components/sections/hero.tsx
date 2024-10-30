import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'

type HeroProps = {
  h1: string;
  subHeadline: string;
  cta: {
    label: string;
    link: string;
  },
  imageProps: {
    src: string;
    alt: string;
    className: string;
    srcSet: string;
    sizes: string;
  }
}

export default function HeroSection({ h1, subHeadline, cta, imageProps }: HeroProps) {
  return (
    <section className='relative bg-black/60 px-4 md:px-8'>
      <img src={imageProps.src} alt={imageProps.alt} srcSet={imageProps.srcSet} sizes={imageProps.sizes} className={imageProps.className} />
      
      <div className="max-w-screen-web mx-auto text-white py-20 md:py-28 lg:py-36">
        <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white text-left'>{h1}</h1>
        <p className='paragraph text-white/80 max-w-xl mt-2 md:mt-4 lg:mt-6'>{subHeadline}</p>
        <Link href={cta.link} className='inline-block mt-2 md:mt-4 lg:mt-6'>
          <Button>
            {cta.label}
          </Button>
        </Link>
      </div>
    </section>
  )
}

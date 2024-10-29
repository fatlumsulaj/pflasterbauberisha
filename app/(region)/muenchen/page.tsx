import { Button } from '@/components/ui/button'
import { ShieldCheck } from 'lucide-react'
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
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-white text-left'>Pflasterbau in München</h1>
          <p className='paragraph text-white/80 max-w-xl mt-2 md:mt-4 lg:mt-6'>Ihr erfahrener Partner für maßgeschneiderte Pflasterarbeiten in München, abgestimmt auf die individuellen Anforderungen unserer Stadt.</p>
          <Link href="/kontakt" className='inline-block mt-2 md:mt-4 lg:mt-6'>
            <Button>
              Jetzt anfragen
            </Button>
          </Link>
        </div>
      </section>
      <div className="h-screen"></div>
    </main>
  )
}

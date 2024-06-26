import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Copyright, Facebook, Instagram, Mail, Phone, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className={`bg-neutral-950 text-white`}>
      <div className="grid grid-cols-1 md:grid-cols-9 py-10 gap-8 max-w-[800px] mx-auto  px-6 md:px-8">
        <div className='md:col-span-7'>
          <Link href="/" className='flex flex-row gap-2 items-center justify-center md:justify-start'>
            <img src="https://ik.imagekit.io/0s9lwb2yr/Pflasterbauberisha/pflasterbau-berisha-sm_uzrjr9xRE.png?updatedAt=1701891313295" alt='Pflasterbau Berisha' className='w-10 md:w-16' />
            <h2 className='font-bold md:text-lg'>Pflasterbau Meisterbetrieb</h2>
          </Link>
          <p className='font-semibold text-center md:text-left  text-[18px] pt-4'>Sherif Berisha</p>
          <a href="tel:+49 151 15231645" className='flex gap-2 items-center justify-center md:justify-start mt-4 font-medium'>
            <Phone size={18} />
            +49 151 15231645
          </a>
          <a href="mailto:sherifpflasterbaupassau@googlemail.com" className='flex gap-2 items-center justify-center md:justify-start mt-4 font-medium'>
            <Mail size={18} />
            sherifpflasterbaupassau@googlemail.com
          </a>
        </div>
        <div className='md:col-span-2 flex flex-col items-center md:items-start'>
          <h3 className='font-semibold md:text-lg'>Links</h3>
          <ul className='mt-2 text-center md:text-left'>
            <li className='my-2 text-[15px] text-neutral-300'>
              <Link href="/#über-uns">Über uns</Link>
            </li>

            <li className='my-2 text-[15px] text-neutral-300'>
              <Link href="/#leistungen">Leistungen</Link>
            </li>
            <li className='my-2 text-[15px] text-neutral-300'>
              <Link href="/#faq">FAQ</Link>
            </li>
            <li className='my-2 text-[15px] text-neutral-300'>
              <Link href="/kontakt">Kontakt</Link>
            </li>
            <li className='my-2 text-[15px] text-neutral-300'>
              <Link href="/impressum">Impressum</Link>
            </li>
            <li className='my-2 text-[15px] text-neutral-300'>
              <Link href="/datenschutz">Datenschutz</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='bg-black text-neutral-200 hidden md:flex gap-x-2 py-4 justify-center'>
        <p>© BS Pflasterbau Meisterbetrieb - Inh. Sherif Berisha {new Date().getFullYear()}</p>
        <span>/</span>
        <Link href="https://www.inoweb-agentur.de"> INOWEB</Link>
      </div>
      <div className="bg-black text-neutral-200 md:hidden py-4 px-4">
        <p className='text-center'>© <br />BS Pflasterbau Meisterbetrieb - Inh. Sherif Berisha {new Date().getFullYear()} / Erstellt von <a className='text-white underline font-medium' href="https://www.inoweb-agentur.de/">INOWEB</a></p>
      </div>


    </footer>
  )
}

export default Footer
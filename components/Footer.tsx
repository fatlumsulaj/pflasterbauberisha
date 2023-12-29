import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Copyright, Facebook, Instagram, Mail, Phone, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className={`bg-neutral-900 text-white px-6 md:px-8`}>
      <div className="grid grid-cols-1 md:grid-cols-9 py-10 gap-8 max-w-[800px] mx-auto">
        <div className='md:col-span-7'>
          <Link href="/" className='flex flex-row gap-2 items-center justify-center md:justify-start'>
            <img src="https://ik.imagekit.io/0s9lwb2yr/Pflasterbauberisha/pflasterbau-berisha-sm_uzrjr9xRE.png?updatedAt=1701891313295" alt='Pflasterbau Berisha' className='w-10 md:w-16' />
            <h2 className='font-bold md:text-lg'>Pflasterbau Meisterbetrieb</h2>
          </Link>
<p className='font-semibold text-center md:text-left  text-[18px] pt-4'>Sherif Berisha</p>
          <a href="tel:+" className='flex gap-2 items-center justify-center md:justify-start mt-4 font-medium'>
            <Phone size={18} />
            +49 151 15231645
          </a>
          <a href="mailto:" className='flex gap-2 items-center justify-center md:justify-start mt-4 font-medium'>
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
              <Link href="/#kontakt">Kontakt</Link>
            </li>
          </ul>
        </div>
        {/*
        <div className='md:col-span-2 flex flex-col items-center md:items-start'>
          
          <h3 className="font-semibold md:text-lg">Socials</h3>
          <ul className="mt-2 text-center md:text-left">
            <li className="my-2 text-[15px] text-neutral-300">
              <a href="#" className='flex gap-2 items-center font-medium'>
                <Instagram size={18} /> Instagram
              </a>
            </li>
            <li className="my-2 text-[15px] text-neutral-300">
              <a href="#" className='flex gap-2 items-center font-medium'>
                <Facebook size={18} /> Facebook
              </a>
            </li>
            <li className="my-2 text-[15px] text-neutral-300">
              <a href="#" className='flex gap-2 items-center font-medium'>
                <Twitter size={18} /> Twitter
              </a>
            </li>
          </ul>
        </div>
        */}
      </div>
      <div className="flex justify-center items-center gap-1 border-t-2 border-solid border-t-neutral-600 max-w-[1000px] mx-auto py-6">
        <Copyright /> Pflasterbau { new Date().getFullYear() }
        <Link href="https://www.inoweb.pro/de"><p>/ INOWEB</p></Link>
      </div>
      
      
    </footer>
  )
}

export default Footer
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Copyright, Facebook, Instagram, Mail, Phone, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer>
      <div className="px-4 md:px-8 bg-neutral-950 text-white py-8">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className='md:col-span-2'>
            <Link href="/" className='inline-flex gap-x-2 items-center font-semibold text-lg md:text-xl'>
              {/* <img src="../pflasterbau-berisha-sm.png" width="202px" height="121px" className='max-h-[40px] w-auto' loading="lazy" alt="BS Pflasterbau Meisterbetrieb" />
              Pflasterbau Meisterbetrieb */}
              <img src="https://ik.imagekit.io/inowebagentur/Berisha%20Pflasterbau/bs-pflaster-tiefbau?updatedAt=1756739555240" alt="Berisha Pflaster- & Tiefbau" className='max-h-[100px]' />
            </Link>
            <p className='font-semibold paragraph mt-2'>Sherif Berisha</p>
            <a href="tel:+49 1511 5231645" className='flex items-center gap-x-2 mt-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="min-w-5 min-h-5 w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
              +49 1511 5231645</a>
            <a href="mailto:sherifpflasterbaupassau@googlemail.com" className='flex items-center gap-x-2 mt-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="min-w-5 min-h-5 w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              sherifpflasterbaupassau@googlemail.com
            </a>
            <a href="https://maps.app.goo.gl/BE8Nkdb5HZnKkft17" className='flex items-center gap-x-2 mt-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="min-w-5 min-h-5 w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              Passauer Str. 88b, 94121 Salzweg, Germany
            </a>
          </div>
          <div>
            <div className='font-semibold text-lg'>Links</div>
            <ul className='text-white/90'>
              <li className='my-2'>
                <Link href="/">Startseite</Link>
              </li>
              <li className='my-2'>
                <Link href="/#ueber-uns">Über uns</Link>
              </li>
              <li className='my-2'>
                <Link href="/#leistungen">Leistungen</Link>
              </li>
              <li className='my-2'>
                <Link href="/#referenzen">Referenzen</Link>
              </li>
              <li className='my-2'>
                <Link href="/kontakt">Kontakt</Link>
              </li>
              <li className='my-2'>
                <Link href="/impressum">Impressum</Link>
              </li>
              <li className='my-2'>
                <Link href="/datenschutz">Datenschutz</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className='font-semibold text-lg'>Städte</div>
            <ul className='text-white/90'>
              <li className='my-2'>
                <Link href="/passau">Passau</Link>
              </li>
              <li className='my-2'>
                <Link href="/muenchen">München</Link>
              </li>
              <li className='my-2'>
                <Link href="/regensburg">Regensburg</Link>
              </li>
            </ul>
          </div>
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
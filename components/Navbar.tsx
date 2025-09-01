"use client"
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { AlignJustify, X } from 'lucide-react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const path = usePathname();
  const [mobile, setMobile] = useState<boolean>(false)

  useEffect(() => {
    setMobile(false);
  }, [path])

  return (
    <>
      <nav className='hidden lg:block bg-mikado px-4 py-4'>
        <div className="max-w-screen-web mx-auto flex justify-end gap-x-6">
          <div className='flex items-center gap-x-2 font-medium'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="min:w-5 w-5 h-5 min:h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>

            <a href="tel:+49 151 15231645">+49 151 15231645</a>
          </div>
          <div className='flex items-center gap-x-2 font-medium'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="min:w-5 w-5 h-5 min:h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <a href="mailto:sherifpflasterbaupassau@googlemail.com">sherifpflasterbaupassau@googlemail.com</a>
          </div>
          <div className="flex items-center gap-x-2 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="min:w-5 w-5 h-5 min:h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <a href="https://maps.app.goo.gl/n6Cwv9SsRjatn22p7">Passauer Str. 88b, 94121 Salzweg, Germany</a>
          </div>
        </div>
      </nav>
      <nav className={`bg-neutral-950 z-50 w-full px-5 text-white py-2`}>
        <div className="h-full flex justify-between items-center w-full max-w-screen-xl mx-auto">
          <h2 className='font-semibold text-md lg:text-2xl'>
            <Link href="/" className='flex flex-row flex-wrap justify-center gap-2 items-center'>
              <img src="https://ik.imagekit.io/inowebagentur/Berisha%20Pflasterbau/bs-pflaster-tiefbau?updatedAt=1756739555240" alt="Berisha Pflaster- & Tiefbau" className='max-h-[90px] lg:max-h-[120px]' />
              {/* <Image src="/pflasterbau-berisha-sm.png" alt='src' width={75} height={75} />
              <h2 className='hidden md:block'>Pflasterbau Meisterbetrieb</h2> */}
            </Link>
          </h2>
          <ul className='hidden md:flex gap-6 items-center'>
            <li>
              <Link href="/#über-uns">Über uns</Link>
            </li>
            <li>
              <Link href="/#leistungen">Leistungen</Link>
            </li>
            <li>
              <Link href="/#referenzen">Referenzen</Link>
            </li>
            <li>
              <Link href="/kontakt">
                <Button id="contact">
                  Kontakt
                </Button>
              </Link>
            </li>
          </ul>
          <Button onClick={() => setMobile(!mobile)} size="icon" variant="ghost" className='md:hidden'>
            <AlignJustify />
          </Button>
        </div>

        <Mobile isOpened={mobile} close={() => setMobile(false)} />
      </nav>
    </>
  )
}

function Mobile({ isOpened, close }: { isOpened: boolean, close: () => void }) {
  return (
    <AnimatePresence>
      {isOpened && (
        <motion.div
          className='h-screen w-full flex flex-col justify-center top-0 fixed left-0 z-50 bg-[#1a1a1a] p-6'
          initial={{ x: '-100vw ' }}
          animate={{ x: 0, transition: { type: 'just' } }}
          exit={{ x: '-100vw', transition: { type: "just" } }}>
          <button onClick={close} className='absolute top-6 right-6'>
            <X size={30} />
          </button>
          <h2 className='font-bold text-md lg:text-2xl'>
            <Link href="/" className='flex flex-col gap-4 flex-wrap justify-center items-center'>
              <img src="https://ik.imagekit.io/inowebagentur/Berisha%20Pflasterbau/bs-pflaster-tiefbau?updatedAt=1756739555240" alt="Berisha Pflaster- & Tiefbau" className='max-h-[90px] lg:max-h-[120px]' />
            </Link>
          </h2>
          <ul className='flex flex-col justify-center mt-8 gap-6 items-center'>
            <li>
              <Link onClick={close} href="/">Startseite</Link>
            </li>
            <li>
              <Link onClick={close} href="/#über-uns">Über uns</Link>
            </li>
            <li>
              <Link onClick={close} href="/#leistungen">Leistungen</Link>
            </li>
            <li>
              <Link onClick={close} href="/#referenzen">Referenzen</Link>
            </li>
            <li>
              <Link onClick={close} href="/kontakt">
                <Button id="contact" className='bg-[#fee856] hover:bg-[#ffce3e] text-black font-bold'>
                  Kontakt
                </Button>
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
"use client"
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { AlignJustify, X } from 'lucide-react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import { nunito } from '@/app/ui/fonts'
export default function Navbar() {
  const [mobile, setMobile] = useState<boolean>(false)

  return (
    <nav className={`fixed top-0 bg-[#1a1a1a] h-[70px] w-full px-6 text-white ${nunito.className}`}>
      <div className="h-full flex justify-between items-center w-full max-w-screen-xl mx-auto">
        <h2 className='font-semibold text-md lg:text-2xl'>
          <Link href="/" className='flex flex-row flex-wrap justify-center gap-2 items-center'>
            <Image src="/pflasterbau-berisha-sm.png" alt='src' width={75} height={75} />
            <h2 className='hidden md:block'>Pflasterbau Meisterbetrieb</h2>
          </Link>
        </h2>
        <ul className='hidden md:flex gap-6 items-center'>
          <li>
            <Link href="/">Über uns</Link>
          </li>
          <li>
            <Link href="/">Leistungen</Link>
          </li>
          <li>
            <Link href="/">Referenzen</Link>
          </li>
          <li>
            <Button id="contact" className='bg-[#fee856] hover:bg-[#ffce3e] text-black font-bold'>
              <Link href="/">
                Kontakt
              </Link>
            </Button>
          </li>
        </ul>
        <Button onClick={() => setMobile(!mobile)} size="icon" variant="ghost" className='md:hidden'>
          <AlignJustify />
        </Button>
      </div>

      <Mobile isOpened={mobile} close={() => setMobile(false)} />
    </nav>
  )
}

function Mobile({ isOpened, close }: { isOpened: boolean, close: () => void }) {
  return (
    <AnimatePresence>
      {isOpened && (
        <motion.div
          className='h-screen w-full flex flex-col justify-center top-0 fixed left-0 bg-[#1a1a1a] p-6'
          initial={{ x: '-100vw ' }}
          animate={{ x: 0, transition: { type: 'just' } }}
          exit={{ x: '-100vw', transition: { type: "just" } }}>
          <button onClick={close} className='absolute top-6 right-6'>
            <X size={30} />
          </button>
          <h2 className='font-bold text-md lg:text-2xl'>
            <Link href="/df" className='flex flex-col gap-4 flex-wrap justify-center items-center'>
              <h2>Pflasterbau Meisterbetrieb</h2>
              <Image src="/pflasterbau-berisha-sm.png" alt='src' width={85} height={85} />

            </Link>
          </h2>
          <ul className='flex flex-col justify-center mt-8 gap-6 items-center'>
            <li>
              <Link href="/">Startseite</Link>
            </li>
            <li>
              <Link href="/">Über uns</Link>
            </li>
            <li>
              <Link href="/">Leistungen</Link>
            </li>
            <li>
              <Link href="/">Referenzen</Link>
            </li>
            <li>
              <Button id="contact" className='bg-[#fee856] hover:bg-[#ffce3e] text-black font-bold'>
                <Link href="/">
                  Kontakt
                </Link>
              </Button>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
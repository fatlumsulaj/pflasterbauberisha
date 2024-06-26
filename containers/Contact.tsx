"use client"

import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

export default function Contact() {
  const path = usePathname();

  return (
    // <section id="kontakt" className={`text-white relative py-20 px-6 md:px-8 z-10 contact_bg ${path === "/kontakt" && "mt-[70px]"}`}>
    //   <h2 className='h2 text-center'>Kontaktieren Sie uns</h2>
    //   <form className="mt-4 md:mt-8 max-w-[900px] mx-auto" method="POST" action="https://formspree.io/f/mdoqoenb">
    //     <div className="flex flex-col md:flex-row gap-2">
    //       <div className='md:w-1/2'>
    //         <Label htmlFor='name'>Name</Label>
    //         <Input className='w-full bg-transparent border-neutral-400 mt-2 placeholder:text-neutral-400' placeholder='Fügen Sie Ihren Namen ein' id="name" type="text" name='name' />
    //       </div>
    //       <div className='md:w-1/2'>
    //         <Label htmlFor='email'>Email</Label>
    //         <Input className='w-full bg-transparent border-neutral-400 mt-2 placeholder:text-neutral-400' placeholder='Fügen Sie Ihre Email-Adresse ein' id="email" type="email" name='email' />
    //       </div>
    //     </div>
    //     <div className="mt-4">
    //       <Label htmlFor="service">Leistung</Label>
    //       <Select name="leistung">
    //         <SelectTrigger name="leistung" className='w-full bg-transparent border-neutral-400 mt-2 placeholder:text-neutral-400'>
    //           <SelectValue placeholder="Leistung auswählen" />
    //         </SelectTrigger>
    //         <SelectContent>
    //           <SelectItem value="light">Pflasterbau</SelectItem>
    //           <SelectItem value="dark">Garten- und Landschaftsbau</SelectItem>
    //           <SelectItem value="system">Sonstiges</SelectItem>
    //         </SelectContent>
    //       </Select>
    //     </div>
    //     <div className='mt-4'>
    //       <Label htmlFor='message'>Nachricht</Label>
    //       <Textarea className='w-full bg-transparent border-neutral-400 mt-2 placeholder:text-neutral-400' id="message" name="message" placeholder='Nachricht schreiben' />
    //     </div>
    //     <div className='flex justify-end'>
    //       <Button className='bg-mikado text-black font-medium mt-6 hover:bg-mikado/70' size="lg">Einreichen</Button>
    //     </div>
    //   </form>
    // </section>
    <section id="contact">
      <div className="max-w-screen-web mx-auto flex justify-end md:px-8 lg:-mb-[500px]">
        <div className="p-7 md:p-10 relative z-10 bg-mikado w-full lg:max-w-lg">
          <h2 className='h2'>Uns kontaktieren</h2>
          <form action="https://formspree.io/f/mdoqoenb">
            <div className='my-4'>
              <Label>Name</Label>
              <Input name="name" className='border-black/30 mt-1 bg-transparent' />
            </div>
            <div className="my-4">
              <Label>Email</Label>
              <Input name="email" className='border-black/30 mt-1 bg-transparent' />
            </div>
            <div className='my-4'>
              <Label htmlFor="service">Leistung</Label>
              <Select name="leistung">
                <SelectTrigger name="leistung" className='w-full bg-transparent border-black/30 mt-1 placeholder:text-black'>
                  <SelectValue placeholder="Leistung auswählen" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Pflasterbau</SelectItem>
                  <SelectItem value="dark">Garten- und Landschaftsbau</SelectItem>
                  <SelectItem value="system">Sonstiges</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="nachricht">Nachricht</Label>
              <Textarea className='bg-transparent border-black/30 mt-1 placeholder:text-black' id="nachricht" name="nachricht" placeholder='Nachricht schreiben' />
            </div>
            <Button variant="secondary" size="lg" className='w-full mt-4'>
              Einreichen
            </Button>
          </form>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d293.791937895956!2d13.484050921921938!3d48.60673906427884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4774f77104c236ef%3A0x2c2efa030aa0857e!2sBS%20Pflasterbau%20Meisterbetrieb%20-%20Inh.%20Sherif%20Berisha!5e0!3m2!1sen!2s!4v1718828922618!5m2!1sen!2s" width="600" height="450" loading="lazy" className='grayscale invert-[96%] contrast-[88%] h-[600px] w-full' referrerPolicy="no-referrer-when-downgrade"></iframe>
    </section>
  )
}

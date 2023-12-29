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
    <section id="kontakt" className={`text-white relative py-20 px-6 md:px-8 z-10 contact_bg ${path === "/kontakt" && "mt-[70px]"}`}>
      <h2 className='h2 text-center'>Kontaktieren Sie uns</h2>
      <form className="mt-4 md:mt-8 max-w-[900px] mx-auto">
        <div className="flex flex-col md:flex-row gap-2">
          <div className='md:w-1/2'>
            <Label htmlFor='name'>Name</Label>
            <Input className='w-full bg-transparent border-neutral-400 mt-2 placeholder:text-neutral-400' placeholder='Fügen Sie Ihren Namen ein' id="name" type="text" name='name' />
          </div>
          <div className='md:w-1/2'>
            <Label htmlFor='email'>Email</Label>
            <Input className='w-full bg-transparent border-neutral-400 mt-2 placeholder:text-neutral-400' placeholder='Fügen Sie Ihre Email-Adresse ein' id="email" type="email" name='email' />
          </div>
        </div>
        <div className="mt-4">
          <Label htmlFor="service">Leistung</Label>
          <Select>
            <SelectTrigger className='w-full bg-transparent border-neutral-400 mt-2 placeholder:text-neutral-400'>
              <SelectValue placeholder="Leistung auswählen" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Pflasterbau</SelectItem>
              <SelectItem value="dark">Garten- und Landschaftsbau</SelectItem>
              <SelectItem value="system">Sonstiges</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='mt-4'>
          <Label htmlFor='message'>Nachricht</Label>
          <Textarea className='w-full bg-transparent border-neutral-400 mt-2 placeholder:text-neutral-400' id="message" name="message" placeholder='Nachricht schreiben' />
        </div>
        <div className='flex justify-end'>
          <Button className='bg-mikado text-black font-medium mt-6 hover:bg-mikado/70' size="lg">Submit</Button>
        </div>
      </form>
    </section>
  )
}

import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function ContactPage() {
  return (
    <main>
      <section className="grid lg:grid-cols-2 lg:min-h-[90vh] xl:min-h-[80vh]">
        <div className="bg-neutral-950 text-white px-4 md:px-8 py-10 lg:px-10 lg:py-20">
          <div className="max-w-2xl mx-auto h-full flex flex-col gap-y-4 lg:gap-y-0 justify-between">
            <h1 className='h2'>Fordern Sie ein Angebot an</h1>
            <div className='border-t border-t-neutral-800'>
              <div className='flex gap-x-4 mt-4 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="min-w-6 min-h-6 w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <div>
                  <p className='font-semibold text-lg md:text-xl'>Anrufen</p>
                  <a className='block mt-1 text-neutral-200 md:text-lg' href="tel:+4915115231645">+49 151 15231645</a>
                </div>
              </div>
              <div className='mt-4 flex gap-x-4 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="min-w-6 min-h-6 w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>

                <div>
                  <p className='font-semibold text-lg md:text-xl'>E-Mail schreiben</p>
                  <a className='block mt-1 text-neutral-200 md:text-lg' href="mailto:sherifpflasterbaupassau@googlemail.com">sherifpflasterbaupassau@googlemail.com</a>
                </div>

              </div>
              <div className='mt-4 flex gap-x-4 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="min-w-6 min-h-6 w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <div>
                  <p className='font-semibold text-lg md:text-xl'>Uns treffen</p>
                  <a className='block mt-1 text-neutral-200 md:text-lg' href="https://maps.app.goo.gl/n6Cwv9SsRjatn22p7">Passauer Str. 88b, 94121 Salzweg, Germany</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center px-10 py-6'>
          <form action="https://formspree.io/f/mdoqoenb" className="w-full max-w-2xl mx-auto">
            <div className='my-4'>
              <Label htmlFor="name">Name</Label>
              <Input name="name" placeholder="Fügen Sie Ihren Namen ein" />
            </div>
            <div className='my-4'>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" placeholder="Fügen Sie Ihre Email-Adresse ein" />
            </div>
            <div className='my-4'>
              <Label htmlFor="service">Leistung</Label>
              <Select name="leistung">
                <SelectTrigger id="service" name="leistung" className='w-full bg-transparent border-slate-200 mt-1 placeholder:text-black'>
                  <SelectValue placeholder="Leistung auswählen" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Pflasterbau</SelectItem>
                  <SelectItem value="dark">Garten- und Landschaftsbau</SelectItem>
                  <SelectItem value="system">Sonstiges</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className='my-4'>
              <Label htmlFor='nachricht'>Nachricht</Label>
              <Textarea className='bg-transparent border-slate-200 mt-1' id="nachricht" name="nachricht" placeholder='Nachricht schreiben' />
            </div>
            <Button className='w-full' size="lg">
              Einreichen
            </Button>
          </form>
        </div>
      </section>
    </main>
  )
}

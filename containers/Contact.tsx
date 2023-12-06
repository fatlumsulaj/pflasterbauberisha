import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'

export default function Contact() {
  return (
    <section className='text-white relative py-20 px-6 md:px-8 border-solid border-b-[10px] border-b-mikado'>
      <img src="https://ik.imagekit.io/0s9lwb2yr/Pflasterbauberisha/pflasterbau2_9CSITgSgj7.jpg?updatedAt=1701705583941" alt="Pflasterbau" className="brightness-[.15] object-fill w-full h-full absolute top-0 left-0 -z-50" />
      <h2 className='h2 text-center'>Get in touch</h2>
      <form className="mt-8 max-w-[900px] mx-auto">
        <div className="flex gap-2">
          <div className='w-1/2'>
            <Label htmlFor='name'>Name</Label>
            <Input className='w-full bg-transparent border-neutral-400 mt-2 placeholder:text-neutral-400' placeholder='Enter your name' id="name" type="text" name='name' />
          </div>
          <div className='w-1/2'>
            <Label htmlFor='email'>Email</Label>
            <Input className='w-full bg-transparent border-neutral-400 mt-2 placeholder:text-neutral-400' placeholder='Enter your email' id="email" type="email" name='email' />
          </div>
        </div>
        <div className="mt-4">
          <Label htmlFor="service">Service</Label>
          <Select>
            <SelectTrigger className='w-full bg-transparent border-neutral-400 mt-2 placeholder:text-neutral-400'>
              <SelectValue placeholder="Select service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='mt-4'>
          <Label htmlFor='message'>Message</Label>
          <Textarea className='w-full bg-transparent border-neutral-400 mt-2 placeholder:text-neutral-400' id="message" name="message" placeholder='Write your message' />
        </div>
        <div className='flex justify-end'>
          <Button className='bg-mikado text-black font-medium mt-6 hover:bg-mikado/70' size="lg">Submit</Button>
        </div>
      </form>
    </section>
  )
}

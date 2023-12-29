"use client"
import React, { useState } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

export default function Projects() {
  return (
    <section id="referenzen">
      <div className='bg-mikado'>
        <div className="max-w-screen-small px-6 md:px-8 py-12 md:py-16 mx-auto flex justify-between items-start gap-y-4 md:items-center flex-col md:flex-row">
          <div>
            <h2 className='title'>Projekte</h2>
            <p className='mt-2 max-w-lg font-medium'>Sehen Sie sich unsere Projekte zu verschiedenen Pflasterbauleistungen an.</p>
          </div>
          <Button className="bg-neutral-900" size="lg">Jetzt Kontakt aufnehmen</Button>
        </div>
      </div>
      <div className="max-w-screen-small px-6 md:px-8 py-8 lg:py-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Project image="https://ik.imagekit.io/0s9lwb2yr/Pflasterbauberisha/2-1_oMmVB_mCw.png?updatedAt=1703806360652" />
        <Project image="https://ik.imagekit.io/0s9lwb2yr/Pflasterbauberisha/2-1_oMmVB_mCw.png?updatedAt=1703806360652" />
        <Project image="https://ik.imagekit.io/0s9lwb2yr/Pflasterbauberisha/2-1_oMmVB_mCw.png?updatedAt=1703806360652" />
        <Project image="https://ik.imagekit.io/0s9lwb2yr/Pflasterbauberisha/2-1_oMmVB_mCw.png?updatedAt=1703806360652" />
        <Project image="https://ik.imagekit.io/0s9lwb2yr/Pflasterbauberisha/2-1_oMmVB_mCw.png?updatedAt=1703806360652" />
        <Project image="https://ik.imagekit.io/0s9lwb2yr/Pflasterbauberisha/2-1_oMmVB_mCw.png?updatedAt=1703806360652" />

      </div>

    </section>
  )
}

function Project({ image }: { image: string }) {
  return (
    <div className='border border-solid rounded-md shadow-md'>
      <img className='rounded-sm h-[200px] w-full object-cover' src={image} alt="Pflasterbau" />
      <Dialog>
        <DialogTrigger className='mx-auto block my-3 border border-solid border-neutral-400 px-4 py-2 rounded-sm text-[15px] hover:bg-neutral-100 transition-all font-medium mb-4'>
          Vollbild
        </DialogTrigger>
        <DialogContent className='lg:max-w-4xl'>
          <img src={image} alt="" />
        </DialogContent>
      </Dialog>
    </div>
  )
}

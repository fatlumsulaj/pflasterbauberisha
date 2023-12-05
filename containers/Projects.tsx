"use client"
import React, { useState } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

export default function Projects() {
  return (
    <section>
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
        <Project
          title="Außenanlage"
          material="mit Natursteinmauer & mehr..."
          images={["https://kaiser-pflasterbau.de/files/content/referenzen/referenz3/Garten9.jpg", "https://kaiser-pflasterbau.de/files/content/referenzen/referenz2/referenz_2_5.jpg", "https://kaiser-pflasterbau.de/files/content/referenzen/referenz1/img_3360.jpg"]}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, aperiam exercitationem deleniti, deserunt incidunt eos iste odio quam velit dignissimos quasi aliquam praesentium, natus magni sapiente quibusdam minus perspiciatis eum."
          investor="Behgjet Pacolli" />
        <Project
          title="Außenanlage"
          material="mit Natursteinmauer & mehr..."
          images={["https://kaiser-pflasterbau.de/files/content/referenzen/referenz3/Garten9.jpg", "https://kaiser-pflasterbau.de/files/content/referenzen/referenz2/referenz_2_5.jpg", "https://kaiser-pflasterbau.de/files/content/referenzen/referenz1/img_3360.jpg"]}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, aperiam exercitationem deleniti, deserunt incidunt eos iste odio quam velit dignissimos quasi aliquam praesentium, natus magni sapiente quibusdam minus perspiciatis eum."
          investor="Behgjet Pacolli" />
        <Project
          title="Außenanlage"
          material="mit Natursteinmauer & mehr..."
          images={["https://kaiser-pflasterbau.de/files/content/referenzen/referenz3/Garten9.jpg", "https://kaiser-pflasterbau.de/files/content/referenzen/referenz2/referenz_2_5.jpg", "https://kaiser-pflasterbau.de/files/content/referenzen/referenz1/img_3360.jpg"]}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, aperiam exercitationem deleniti, deserunt incidunt eos iste odio quam velit dignissimos quasi aliquam praesentium, natus magni sapiente quibusdam minus perspiciatis eum."
          investor="Behgjet Pacolli" />
        <Project
          title="Außenanlage"
          material="mit Natursteinmauer & mehr..."
          images={["https://kaiser-pflasterbau.de/files/content/referenzen/referenz3/Garten9.jpg", "https://kaiser-pflasterbau.de/files/content/referenzen/referenz2/referenz_2_5.jpg", "https://kaiser-pflasterbau.de/files/content/referenzen/referenz1/img_3360.jpg"]}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, aperiam exercitationem deleniti, deserunt incidunt eos iste odio quam velit dignissimos quasi aliquam praesentium, natus magni sapiente quibusdam minus perspiciatis eum."
          investor="Behgjet Pacolli" />
        <Project
          title="Außenanlage"
          material="mit Natursteinmauer & mehr..."
          images={["https://kaiser-pflasterbau.de/files/content/referenzen/referenz3/Garten9.jpg", "https://kaiser-pflasterbau.de/files/content/referenzen/referenz2/referenz_2_5.jpg", "https://kaiser-pflasterbau.de/files/content/referenzen/referenz1/img_3360.jpg"]}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, aperiam exercitationem deleniti, deserunt incidunt eos iste odio quam velit dignissimos quasi aliquam praesentium, natus magni sapiente quibusdam minus perspiciatis eum."
          investor="Behgjet Pacolli" />
        <Project
          title="Außenanlage"
          material="mit Natursteinmauer & mehr..."
          images={["https://kaiser-pflasterbau.de/files/content/referenzen/referenz3/Garten9.jpg", "https://kaiser-pflasterbau.de/files/content/referenzen/referenz2/referenz_2_5.jpg", "https://kaiser-pflasterbau.de/files/content/referenzen/referenz1/img_3360.jpg"]}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, aperiam exercitationem deleniti, deserunt incidunt eos iste odio quam velit dignissimos quasi aliquam praesentium, natus magni sapiente quibusdam minus perspiciatis eum."
          investor="Behgjet Pacolli" />
      </div>

    </section>
  )
}

type Project = {
  title: string;
  images: string[];
  material: string;
  investor: string;
  description: string;
}

function Project({ title, images, material, investor, description }: Project) {
  const [selectedImage, setSelectedImage] = useState(0);

  const next = () => {
    if (selectedImage === images.length - 1) {
      setSelectedImage(0);
    } else {
      setSelectedImage(selectedImage + 1)
    }
  }

  const prev = () => {
    if (selectedImage === 0) {
      setSelectedImage(images.length - 1);
    } else {
      setSelectedImage(selectedImage - 1)
    }
  }

  return (
    <div className='border border-solid rounded-md py-4 shadow-md'>
      <h3 className='font-bold md:text-lg lg:text-xl px-4'>{title}</h3>
      <img className='mt-2 rounded-sm h-[200px] w-full object-cover' src={images[0]} alt={title} />
      <p className='mt-4 px-4 text-[15px] md:text-base'>{material}</p>
      <Dialog>
        <DialogTrigger className='mx-4 my-3 border border-solid border-neutral-400 px-4 py-2 rounded-sm text-[15px] hover:bg-neutral-100 transition-all font-medium'>
          Mehr sehen
        </DialogTrigger>
        <DialogContent className='lg:max-w-4xl'>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>Investor: {investor}</DialogDescription>
          </DialogHeader>
          <div className='relative'>
            <button onClick={prev} className='absolute top-1/2 left-0 text-white bg-black/50'>
              <ChevronLeft className='w-10 h-10 lg:w-14 lg:h-14' />
            </button>
            <img className='lg:h-[450px] lg:object-cover w-full' src={images[selectedImage]} alt="" />
            <button onClick={next} className='absolute top-1/2 right-0 text-white bg-black/50'>
              <ChevronRight className='w-10 h-10 lg:w-14 lg:h-14' />
            </button>
          </div>
          <div>
            <p className='text-[15px] md:text-base'>{description}</p>
            <p className='mt-2 text-[15px] md:text-base'>{material}</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

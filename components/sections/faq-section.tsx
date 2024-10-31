import React from 'react'
import Faqs from '../faq'

type FaqsType = {
  question: string;
  answer: string;
}[]

export default function FaqSection({ faqs }: { faqs: FaqsType }) {
  return (
    <section className="px-4 md:px-8 py-10 md:py-14 lg:py-20">
      <div className="max-w-screen-web mx-auto">
        <h2 className="h2">Häufig gestellte Fragen</h2>
        <Faqs
          className="mt-8"
          faqs={faqs}
        />
      </div>
    </section>
  )
}

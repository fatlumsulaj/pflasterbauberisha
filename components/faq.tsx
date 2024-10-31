"use client"
import React, { useState } from 'react'
import { LayoutGroup, motion, AnimatePresence } from 'framer-motion'

type Faq = {
  question: string;
  answer: React.ReactNode;
  defaultOpened?: boolean;
}

export default function Faqs({ faqs, className }: { faqs: Faq[], className: string }) {
  const [hoveredQuestion, setHoveredQuestion] = useState<undefined | string>()

  return (
    <LayoutGroup>
      <motion.div className={`flex flex-col ${className}`} onHoverEnd={() => setHoveredQuestion(undefined)}>
        {faqs.map(faq => (
          <Faq key={faq.question} {...faq} hoveredQuestion={hoveredQuestion} setHoveredQuestion={setHoveredQuestion} />
        ))}
      </motion.div>
    </LayoutGroup>

  )
}

function Faq({ question, answer, defaultOpened, hoveredQuestion, setHoveredQuestion }: Faq & { hoveredQuestion: string | undefined, setHoveredQuestion: React.Dispatch<React.SetStateAction<undefined | string>>}) {
  const [opened, setOpened] = useState(defaultOpened);

  return (
    <motion.div onHoverStart={() => setHoveredQuestion(question)} className={`border-y bg-white -my-[1px] ${(hoveredQuestion !== question && hoveredQuestion !== undefined && "opacity-65")} transition-all`}>
      <h3
        className={`lg:text-lg`}
        onClick={() => setOpened(!opened)}
      >
        <button className="w-full h-full flex justify-between text-left gap-x-4 items-center py-6">
          
          <span className='lg:text-xl xl:text-2xl font-semibold'>{question}</span>
          <div className='w-8'>
            <div className="w-full h-[2px] md:h-[3px] bg-primary block rounded-sm"></div>
            <motion.div animate={{ rotate: opened ? "0deg" : "90deg", transition: { type:'just'}}} className="w-full h-[2px] md:h-[3px] bg-primary block rounded-sm -mt-[2px] md:-mt-[3px]"></motion.div>
          </div>
        </button>
      </h3>
      <motion.div
        layout
        initial={{ height: 0 }}
        animate={opened ? { height: "auto" } : {}}
        transition={{ type: "just" }}
        className={`overflow-hidden`}

      >
        <div className='md:text-lg lg:text-xl mb-6 text-black/80'>

        {answer}
        </div>
      </motion.div>
    </motion.div>
  )
}
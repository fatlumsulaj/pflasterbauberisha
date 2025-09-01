"use client"
import { Bubble } from '@typebot.io/nextjs'

export default function Typebot() {
  return (
    <Bubble
      typebot="berisha-pflasterbau-46w4cg6"
      previewMessage={{
        message: 'Jetzt eine Nachricht senden!',
        autoShowDelay: 5000,
      }}
      theme={{
        button: { backgroundColor: '#000000', iconColor: '#FFFFFF' },
        previewMessage: { backgroundColor: '#ffffff', textColor: 'black' },
      }}
    />
  )
}

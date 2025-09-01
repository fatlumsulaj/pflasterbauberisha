"use client"
import { Bubble } from '@typebot.io/nextjs'

export default function Typebot() {
  return (
    <Bubble
      typebot="berisha-pflasterbau-46w4cg6"
      previewMessage={{
        message: 'Jetzt eine Nachricht senden!',
        autoShowDelay: 5000,
        avatarUrl: 'https://ik.imagekit.io/inowebagentur/Berisha%20Pflasterbau/bs-pflaster-tiefbau?updatedAt=1756739555240',
      }}
      theme={{
        button: { backgroundColor: '#0042DA', iconColor: '#FFFFFF' },
        previewMessage: { backgroundColor: '#ffffff', textColor: 'black' },
      }}
    />
  )
}

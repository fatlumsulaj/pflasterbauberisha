"use client"
import { Bubble } from '@typebot.io/nextjs'

export default function Typebot() {
  return (
    <Bubble
      typebot="berisha-pflasterbau-46w4cg6"
      previewMessage={{
        message: 'Jetzt eine Nachricht senden!',
        autoShowDelay: 5000,
        avatarUrl: 'https://ik.imagekit.io/utnmvphg1/berisha%20pflasterbau%20logo%20square?updatedAt=1730059046042',
      }}
      theme={{
        button: { backgroundColor: '#0042DA', iconColor: '#FFFFFF' },
        previewMessage: { backgroundColor: '#ffffff', textColor: 'black' },
      }}
    />
  )
}

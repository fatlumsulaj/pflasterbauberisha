"use client"
import React, { Suspense, useEffect, useState } from 'react'
import { getCookie, setCookie } from "cookies-next"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from './ui/switch'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from './ui/button'
import Link from 'next/link'
import { ScrollArea } from './ui/scroll-area'

type ConsentCookieType = { necessary: 'granted' | 'denied', statistic: 'granted' | 'denied' }

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState<ConsentCookieType | undefined>(undefined)

  const [showBanner, setShowBanner] = useState(false);
  const [statisticCookieConsent, setStatisticCookieConsent] = useState<boolean>(false)

  const currentDate = new Date().getTime();
  const expires = new Date(currentDate + (1000 * 60 * 60 * 24 * 365));

  function setConsentCookie(data: ConsentCookieType) {
    setCookie('consentCookie', data, { expires });
    setCookieConsent(data);
    setShowBanner(false);
  }

  useEffect(() => {
    const consentCookie = (getCookie('consentCookie') as string);

    const exists = typeof consentCookie === "string"
    setCookieConsent(exists ? JSON.parse(consentCookie) : undefined);

    if (!consentCookie) {
      setShowBanner(true);
    } else {
      setShowBanner(false);
    }
  }, []);

  useEffect(() => {
    if (cookieConsent !== undefined) {
      if (typeof window.gtag !== "undefined") {
        window.gtag("consent", "update", {
          "analytics_storage": cookieConsent?.statistic,
          "ad_storage": cookieConsent?.statistic,
        })
      } else {
        console.warn("Window.gtag is not a function")
      }
    } else {
      console.log("Cookie consent is undefined")
    }
  }, [cookieConsent])

  function acceptAll() {
    setConsentCookie({ necessary: "granted", statistic: "granted" })
  }

  function acceptSelection() {
    setConsentCookie({ necessary: "granted", statistic: statisticCookieConsent ? "granted" : "denied" })
  }

  function acceptOnlyNecessary() {
    setConsentCookie({ necessary: 'granted', statistic: 'denied' })
  }

  if (!showBanner) return null

  return (
    <Suspense fallback={<p>...</p>}>
      <div className='bg-black/60 w-full h-screen flex items-center z-50  justify-center fixed top-0 left-0 px-4'>
        <ScrollArea className=' max-h-[600px] overflow-y-auto md:max-h-none rounded-md'>
          <Card className='bg-white max-w-2xl rounded-md'>
            <CardHeader>
              <CardTitle>Cookie-Zustimmung Verwalten</CardTitle>
              <CardDescription>Um Ihnen das bestmögliche Erlebnis zu bieten, verwenden wir Technologien wie Cookies, um Geräteinformationen zu speichern und/oder darauf zuzugreifen. Wenn Sie diesen Technologien zustimmen, verarbeiten wir möglicherweise Daten wie das Surfverhalten oder eindeutige IDs auf dieser Website. Wenn Sie Ihre Einwilligung nicht weitergeben oder widerrufen, können bestimmte Features und Funktionen beeinträchtigt sein.</CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <CookieCategory name="Notwendig" disabled={true}
                  cookies={[
                    { name: 'Cookie Consent', description: "Der Cookie Consent Banner ermöglicht dem Websitebesucher Einwilligungen zu erteilen und zu widerrufen." }
                  ]} />
                <CookieCategory name="Statistik" disabled={false} cookies={[
                  { name: "Google Analytics 4 Property", description: "Google Analytics setzt dieses Cookie, um Seitenaufrufe zu speichern und zu zählen." },
                ]} consent={statisticCookieConsent} setConsent={setStatisticCookieConsent} />
              </div>
              <div className='flex flex-col-reverse gap-y-2 mt-6 gap-x-2 md:flex-row md:justify-end'>
                <Button onClick={acceptOnlyNecessary} variant="outline" className='text-neutral-900'>Nur notwendig</Button>
                <Button onClick={acceptSelection} variant="outline" className='text-neutral-900'>Auswahl akzeptieren</Button>
                <Button onClick={acceptAll}>Alle Akzeptieren</Button>
              </div>
            </CardContent>
            <CardFooter className='flex justify-evenly flex-wrap gap-3 border-t py-3 mx-6'>
              <Link href="/impressum" className='underline text-black/80'>Impressum</Link>
              <Link href="/datenschutz" className='underline text-black/80'>Datenschutz</Link>
            </CardFooter>
          </Card>
        </ScrollArea>
      </div>
    </Suspense>
  )
}

function CookieCategory(
  { name, disabled = false, cookies, consent, setConsent }:
    { name: string, disabled: boolean, cookies: { name: string; description: string }[], consent?: boolean, setConsent?: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [opened, setOpened] = useState(false);

  return (
    <div className={`-my-[1px] ${opened ? "border" : "border-y"}`}>
      <div className="flex justify-between gap-x-2 p-3 items-center bg-neutral-100">
        <button onClick={() => setOpened(!opened)} className='flex gap-x-2 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-[18px]">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
          <span className='text-base'>{name}</span>
        </button>
        {disabled ? <Switch checked={disabled} disabled={disabled} /> : <Switch checked={consent} onCheckedChange={setConsent} />}
      </div>
      {opened && (
        <>
          <Table className='hidden md:table'>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[160px]'>Cookie</TableHead>
                <TableHead>Beschreibung</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cookies.map(cookie => (
                <TableRow key={cookie.name}>
                  <TableCell className='font-medium'>{cookie.name}</TableCell>
                  <TableCell>{cookie.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <ul className="block md:hidden list-disc pr-3 pl-7">
            {cookies.map(cookie => (
              <li key={cookie.name} className='my-4 text-[15px] text-neutral-700'>
                <strong className='text-black'>{cookie.name}</strong>: {cookie.description}
              </li>
            ))}
          </ul>
        </>
      )}

    </div>
  )
}
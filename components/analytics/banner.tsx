"use client"

import { useEffect } from "react"

import "vanilla-cookieconsent/dist/cookieconsent.css"
import * as CookieConsent from 'vanilla-cookieconsent';

const CAT_ANALYTICS = "analytics"

const SERVICE_ANALYTICS_STORAGE = "analytics_storage"


export default function CookieBanner() {
  useEffect(() => {
    // @ts-ignore
    window.dataLayer = window.dataLayer || [];

    // @ts-ignore
    function gtag() { dataLayer.push(arguments) }

    // @ts-ignore
    gtag('consent', 'default', {
      [SERVICE_ANALYTICS_STORAGE]: 'denied'
    })

    function updateGtagConsent() {
      // @ts-ignore
      gtag('consent', 'update', {
        [SERVICE_ANALYTICS_STORAGE]: CookieConsent.acceptedService(SERVICE_ANALYTICS_STORAGE, CAT_ANALYTICS) ? 'granted' : 'denied'
      })
    }

    CookieConsent.run({
      onFirstConsent: () => {
        updateGtagConsent();
      },
      onConsent: () => {
        updateGtagConsent();
      },
      onChange: () => {
        updateGtagConsent()
      },
      categories: {
        necessary: {
          enabled: true,
          readOnly: true
        },
        [CAT_ANALYTICS]: {
          autoClear: {
            cookies: [
              {
                name: /^ga/,
              },
              {
                name: '_gid'
              }
            ]
          },
          services: {
            [SERVICE_ANALYTICS_STORAGE]: {
              label: "Google Analytics",
            }
          }
        }
      },

      language: {
        default: 'de',
        translations: {
          de: {
            consentModal: {
              title: 'Diese Website verwendet Cookies',
              description: 'Wir verwenden Cookies, um unsere Website für Sie optimal zu gestalten und fortlaufend zu verbessern. Einige Cookies sind essenziell, während andere uns helfen, Ihr Nutzungserlebnis zu verbessern. Sie können Ihre Einstellungen jederzeit anpassen. Weitere Informationen finden Sie in unserer Datenschutzerklärung.',
              acceptAllBtn: "Ich akzeptiere alle",
              acceptNecessaryBtn: "Nur notwendige akzeptieren",
              showPreferencesBtn: "Individuelle Einstellungen verwalten",
              footer: `
                <a href="/impressum" target="_blank">Impressum</a>
                <a href="/datenschutz" target="_blank">Datenschutz</a>
              `
            },
            preferencesModal: {
              title: "Cookie-Einstellungen verwalten",
              acceptAllBtn: "Ich akzeptiere alle",
              acceptNecessaryBtn: "Nur notwendige akzeptieren",
              savePreferencesBtn: "Einstellungen speichern",
              closeIconLabel: 'Modal schließen',
              sections: [
                {
                  title: 'Unbedingt erforderliche Cookies',
                  description: 'Diese Cookies sind für das einwandfreie Funktionieren der Website erforderlich und können nicht deaktiviert werden.',
                  linkedCategory: 'necessary'
                },
                {
                  title: 'Leistung und Analyse',
                  description: "Diese Cookies sammeln Informationen darüber, wie Sie unsere Website nutzen. Alle Daten werden anonymisiert und können nicht verwendet werden, um Sie zu identifizieren.",
                  linkedCategory: 'analytics',
                  cookieTable: {
                    caption: "Cookie-Tabelle",
                    headers: {
                      name: "Cookie",
                      domain: "Domain",
                      desc: "Beschreibung"
                    },
                    body: [
                      {
                        name: '_ga',
                        domain: location.hostname,
                        desc: "Dieses Cookie wird von Google Analytics verwendet, um Nutzer zu unterscheiden. Es hilft, die Nutzung der Website zu analysieren und die Benutzererfahrung zu verbessern."
                      },
                      {
                        name: '_gid',
                        domain: location.hostname,
                        desc: "Dieses Cookie wird von Google Analytics gesetzt, um eine eindeutige Sitzungs-ID zu speichern. Es wird verwendet, um das Verhalten von Nutzern während einer Sitzung zu verfolgen."
                      }
                    ]
                  }
                },
              ]
            }
          }
        }
      }
    })
  }, [])

  return <></>
}
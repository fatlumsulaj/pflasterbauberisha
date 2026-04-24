import React from "react";
import Link from "next/link";

export default function Impressum() {
  return (
    <section className="px-4 my-10 md:my-14 lg:my-16">
      <div className="max-w-screen-web mx-auto flex flex-col">
        <h1 className="h1 mb-6">Impressum</h1>
        <div>
          <p className="text-[17px]">Sherif Berisha</p>
          <p>BS Pflaster- & Tiefbau Meisterbetrieb</p>
          <p className="text-[17px]">Passauer Str. 88b</p>
          <p className="text-[17px]">94121 Salzweg</p>
          <p className="text-[17px]">Deutschland</p>
        </div>
        <div>
          <h2 className="h3 mt-7 mb-2">Kontakt</h2>
          <p className="text-[17px]">Telefon: +49 151 15231645</p>
          <p className="text-[17px]">E-Mail: sherifpflasterbaupassau@googlemail.com</p>
          <p className="text-[17px]">Internet: www.berisha-pflasterbau.de</p>
        </div>
        <div>
          <h2 className="h3 mt-7 mb-2">Umsatzsteuer-ID</h2>
          <p className="text-[17px]">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
          </p>
          <p className="text-[17px]">153/204/40448</p>
        </div>
        <div>
          <h2 className="h3 mt-7 mb-2">EU-Streitschlichtung</h2>
          <p className="text-[17px]">
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <Link
              href="https://ec.europa.eu/consumers/odr/"
              className="text-blue-600"
            >
              https://ec.europa.eu/consumers/odr/.
            </Link>
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </div>
        <div>
          <h2 className="h3 mt-7 mb-2">
            Verbraucherstreitbeilegung / Universalschlichtungsstelle
          </h2>
          <p className="text-[17px]">
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </div>
      </div>
    </section>
  );
}
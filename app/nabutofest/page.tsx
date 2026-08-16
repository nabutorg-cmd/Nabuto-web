import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NabutoFest",
  description: "4-5-6 Eylül 2026, Bursa Kocayayla'da üç nesli ve yetmiş iki milleti namazla buluşturan aile festivali.",
};

const highlights = [
  ["3 Gün", "maneviyat, kültür ve helal eğlence"],
  ["3 Nesil", "çocuklar, gençler ve büyükler"],
  ["72 Millet", "aynı ümmet bilinciyle"],
  ["1 Namazgâh", "festivalin kalbi ve ortak buluşma noktası"],
];

const areas = [
  ["Namazgâh", "Cemaatle namaz, dua ve ümmet bilincini güçlendiren ortak buluşmalar."],
  ["Çocuk Dünyası", "Geleneksel oyunlar, bilim, sanat, spor ve üretim atölyeleri."],
  ["Gençlik Alanı", "Yeni nesil eğitim, teknoloji, spor ve anlam odaklı deneyimler."],
  ["Sohbet Çadırları", "Aile, eğitim, medeniyet ve güncel meseleler üzerine buluşmalar."],
  ["Panayır", "Helal üreticiler, yerel markalar, ikram ve sıcak satış alanları."],
  ["Sahne", "Kültürel programlar, gösteriler ve ailece takip edilebilen içerikler."],
];

const days = [
  ["1. Gün", "Buluşma", "Açılış, tanışma, çocuk ve aile etkinlikleri, akşam sahne programı"],
  ["2. Gün", "Birlik", "Atölyeler, söyleşiler, spor alanları, namazgâh buluşmaları"],
  ["3. Gün", "Gelecek", "Aile programları, kapanış buluşması ve ortak gelecek çağrısı"],
];

const faqs = [
  ["NabutoFest kimler için?", "Çocuklar, gençler, anne babalar ve büyükler için; üç neslin birlikte katılabileceği bir aile festivalidir."],
  ["Festivalin merkezinde ne var?", "Namazgâh, festival alanının kalbidir. Program akışı cemaatle namaz vakitlerini gözeten bir anlayışla planlanır."],
  ["Katılım ve kayıt bilgileri nerede yayımlanacak?", "Kesin kayıt, ulaşım ve program bilgileri bu sayfa ile NABUTO'nun resmî duyuru kanallarında paylaşılacaktır."],
  ["Kurumlar nasıl katkı sunabilir?", "Firmalar sponsorluk ve ayni destekle; STK, okul ve kurumlar gönüllü ekip, etkinlik alanı ve lojistik katkıyla sürece ortak olabilir."],
];

export default function Page() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#041d43] py-24 text-white md:py-32">
        <div className="absolute inset-0 opacity-30 grid-pattern" />
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#08a9ae]/30 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[#ff9c0a]/20 blur-3xl" />
        <div className="container-page relative">
          <div className="max-w-5xl reveal">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[.18em] text-white/80">
              4-5-6 Eylül 2026 · Bursa · Kocayayla
            </span>
            <h1 className="display mt-8 text-6xl font-black md:text-8xl lg:text-9xl">NabutoFest</h1>
            <p className="mt-7 max-w-4xl text-2xl font-bold leading-tight text-white/95 md:text-4xl">
              3 Nesil, 72 Millet; Namazla Birleşen Bir Ümmet.
            </p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              Helal eğlence, maneviyat, kültür, yeni nesil eğitim ve aileyi namazgâh merkezli bir festival atmosferinde buluşturan büyük birlik yolculuğu.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/gonullu-ol" className="rounded-full bg-[#ef4e55] px-7 py-4 font-bold text-white">Gönüllü ol</Link>
              <Link href="/sponsor-ol" className="rounded-full border border-white/25 bg-white/10 px-7 py-4 font-bold text-white">Sponsor ol</Link>
              <a href="#program" className="rounded-full border border-white/25 px-7 py-4 font-bold text-white">Programı incele</a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#082f6310] bg-white">
        <div className="container-page grid divide-y divide-[#082f6310] md:grid-cols-4 md:divide-x md:divide-y-0">
          {highlights.map(([value, label]) => (
            <div key={value} className="px-6 py-8 text-center">
              <strong className="block text-2xl font-black text-[#082f63]">{value}</strong>
              <span className="mt-2 block text-sm leading-6 text-[#65758a]">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f6f3ec] py-24 md:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <span className="text-xs font-black uppercase tracking-[.18em] text-[#08a9ae]">Festival vizyonu</span>
            <h2 className="display mt-5 text-5xl font-black text-[#082f63] md:text-7xl">Kalabalığın ötesinde; birlik, sinerji ve gelecek.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[#65758a]">
            <p>Her festivalde bir kalabalık oluşur. Ancak çok azı büyük bir birlik, bir sinerji ve bir gelecek inşa eder.</p>
            <p>NabutoFest; çocukların neşesini, gençlerin heyecanını, anne babaların emeğini ve büyüklerin duasını aynı meydanda buluşturur.</p>
            <p className="rounded-[28px] bg-white p-7 font-bold text-[#082f63] soft-shadow">İşte NabutoFest, böyle bir birlik yolculuğunun ilk adımıdır.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-28">
        <div className="container-page">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-[.18em] text-[#ef4e55]">Festival deneyimi</span>
            <h2 className="display mt-5 text-5xl font-black text-[#082f63] md:text-7xl">Aynı meydanda, birbirini besleyen alanlar.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {areas.map(([title, text], index) => (
              <article key={title} className="card-hover min-h-72 rounded-[30px] border border-[#082f6312] bg-[#fcfbf8] p-8">
                <span className="text-xs font-black tracking-[.18em] text-[#08a9ae]">0{index + 1}</span>
                <h3 className="mt-14 text-3xl font-black text-[#082f63]">{title}</h3>
                <p className="mt-4 leading-7 text-[#65758a]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="program" className="bg-[#f6f3ec] py-24 md:py-28 scroll-mt-24">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <span className="text-xs font-black uppercase tracking-[.18em] text-[#ff9c0a]">3 günlük ana akış</span>
              <h2 className="display mt-5 text-5xl font-black text-[#082f63] md:text-7xl">Üç gün, tek niyet.</h2>
              <p className="mt-6 max-w-xl leading-8 text-[#65758a]">Detaylı saatlik program kesinleştiğinde bu bölümden yayımlanacaktır.</p>
            </div>
            <div className="grid gap-4">
              {days.map(([day, title, text], index) => (
                <article key={day} className="grid gap-5 rounded-[28px] bg-white p-7 md:grid-cols-[100px_1fr]">
                  <div className="text-sm font-black text-[#ef4e55]">{day}</div>
                  <div>
                    <h3 className="text-2xl font-black text-[#082f63]">{title}</h3>
                    <p className="mt-2 leading-7 text-[#65758a]">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="dark-gradient py-24 text-white md:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <div>
            <span className="text-xs font-black uppercase tracking-[.18em] text-white/55">Kurumsal iş birliği</span>
            <h2 className="display mt-6 max-w-5xl text-5xl font-black md:text-7xl">Biz reklam alanı satmıyoruz. Bir medeniyet tasavvurunun yeniden ihyasına ortaklar arıyoruz.</h2>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link href="/sponsor-ol" className="rounded-full bg-white px-7 py-4 font-bold text-[#082f63]">Sponsor görüşmesi</Link>
            <Link href="/is-birligi" className="rounded-full border border-white/25 px-7 py-4 font-bold text-white">İş birliği modeli</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <span className="text-xs font-black uppercase tracking-[.18em] text-[#08a9ae]">Sık sorulanlar</span>
            <h2 className="display mt-5 text-5xl font-black text-[#082f63] md:text-6xl">Merak edilenler.</h2>
          </div>
          <div className="divide-y divide-[#082f6312] border-y border-[#082f6312]">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-xl font-black text-[#082f63]">
                  {question}
                  <span className="text-2xl text-[#08a9ae] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-3xl pt-4 leading-7 text-[#65758a]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f3ec] py-20">
        <div className="container-page rounded-[34px] bg-[#082f63] p-10 text-white md:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="text-xs font-black uppercase tracking-[.18em] text-white/55">4-5-6 Eylül 2026</span>
              <h2 className="display mt-5 text-4xl font-black md:text-6xl">Bursa Kocayayla'da buluşuyoruz.</h2>
              <p className="mt-5 max-w-2xl leading-8 text-white/70">Katılım, ulaşım ve kesin program duyuruları yakında yayımlanacaktır.</p>
            </div>
            <Link href="/iletisim" className="rounded-full bg-[#ef4e55] px-7 py-4 text-center font-bold text-white">Bilgi al</Link>
          </div>
        </div>
      </section>
    </>
  );
}

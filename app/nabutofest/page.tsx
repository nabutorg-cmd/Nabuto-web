import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "NABUTOFEST 2026 | Kocayayla Bursa",
  description:
    "4, 5, 6 Eylül 2026 Kocayayla Bursa. Program akışı namaz vakitlerine göre planlanan helal eğlence ve aile festivali.",
};

const activities = [
  ["Çocuklar", "Oyunlar, geleneksel oyunlar, masal çadırları, bilim, sanat ve üretim atölyeleri."],
  ["Doğa & Spor", "Kocayayla’nın doğasında hareket, keşif, spor ve ailece deneyim alanları."],
  ["Söyleşi & Sahne", "Ailelere ve gençlere dönük söyleşiler, sahne programları ve kültürel buluşmalar."],
  ["Panayır", "Yeme-içme alanları, üreticiler, markalar ve festival panayırı."],
  ["Üç Nesil", "Çocukları, gençleri, anne-babaları ve büyükleri aynı değerler etrafında buluşturan festival deneyimi."],
  ["Namaz Buluşmaları", "Program akışının namaz vakitlerine göre şekillendiği, cemaatle namazın festival hayatının merkezinde olduğu buluşma."],
];

export default function NabutoFestPage() {
  return (
    <main className="overflow-hidden bg-[#fbfaf7]">
      <section className="relative min-h-[88vh]">
        <Image
          src="/nabutofest-ana-afis.jpg"
          alt="NABUTOFEST 2026"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#062d5e]/95 via-[#062d5e]/70 to-transparent" />
        <div className="container-page relative z-10 flex min-h-[88vh] items-center py-24">
          <div className="max-w-3xl text-white">
            <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[.18em] backdrop-blur">
              4 • 5 • 6 Eylül 2026 · Kocayayla / Bursa
            </span>
            <h1 className="display mt-7 text-6xl font-black leading-[.93] md:text-8xl">
              Üç nesil.<br />Aynı meydan.<br />Aynı değerler.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
              Türkiye’de ilk defa program akışı namaz vakitlerine göre planlanan;
              çocukları, gençleri, anne-babaları ve büyükleri aynı değerler etrafında
              buluşturmayı hedefleyen helal eğlence ve aile festivali.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScWr4iafQPIUoYTxiDt0gsq-X1Hxc32U51ngkmx9gxWfcTsAg/viewform" target="_blank" rel="noreferrer"
                 className="rounded-full bg-[#ef4e55] px-8 py-4 font-black text-white shadow-2xl">
                Katılımcı Ön Başvuru ↗
              </a>
              <a href="#festival" className="rounded-full border border-white/40 bg-white/10 px-8 py-4 font-black text-white backdrop-blur">
                Festivali Keşfet
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="festival" className="bg-white py-24">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <span className="text-xs font-black uppercase tracking-[.18em] text-[#08a9ae]">NABUTOFEST NEDİR?</span>
              <h2 className="display mt-5 text-5xl font-black leading-[1] text-[#082f63] md:text-7xl">
                Festivalden daha fazlası.
              </h2>
            </div>
            <div className="text-lg leading-9 text-[#65758a]">
              <p>
                NABUTOFEST; çocukların neşesini, gençlerin heyecanını, anne-babaların emeğini
                ve büyüklerin duasını aynı meydanda buluşturan üç günlük büyük bir aile buluşmasıdır.
              </p>
              <p className="mt-5 font-bold text-[#082f63]">
                Ümmet birliği, aile dirliği ve neslin aslıyla buluşması için…
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f1f7f7] py-24">
        <div className="container-page">
          <span className="text-xs font-black uppercase tracking-[.18em] text-[#ef4e55]">FESTİVALDE NELER VAR?</span>
          <h2 className="display mt-5 max-w-4xl text-5xl font-black text-[#082f63] md:text-7xl">
            Her yaş için başka bir keşif.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {activities.map(([title, text], index) => (
              <article key={title} className="rounded-[30px] bg-white p-8 shadow-sm">
                <span className="text-xs font-black tracking-[.18em] text-[#08a9ae]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-10 text-2xl font-black text-[#082f63]">{title}</h3>
                <p className="mt-4 leading-7 text-[#65758a]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["/nabutofest-ana-afis.jpg", "NABUTOFEST 2026"],
              ["/nabutofest-gonullu.jpg", "NABUTOFEST gönüllü çağrısı"],
              ["/nabutofest-destek.jpg", "NABUTOFEST destek çağrısı"],
            ].map(([src, alt]) => (
              <div key={src} className="overflow-hidden rounded-[30px] bg-[#f6f3ec] shadow-xl">
                <Image src={src} alt={alt} width={1100} height={1375} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#082f63] py-24 text-white">
        <div className="container-page">
          <div className="max-w-4xl">
            <span className="text-xs font-black uppercase tracking-[.18em] text-[#6bd4d6]">BİRLİKTE BÜYÜYELİM</span>
            <h2 className="display mt-5 text-5xl font-black md:text-7xl">
              NABUTOFEST’te sen de yerini al.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScWr4iafQPIUoYTxiDt0gsq-X1Hxc32U51ngkmx9gxWfcTsAg/viewform" target="_blank" rel="noreferrer" className="rounded-[26px] bg-white p-7 text-[#082f63]">
              <strong className="text-2xl">Katılımcı</strong>
              <span className="mt-3 block text-sm text-[#65758a]">Aile veya bireysel ön başvuru →</span>
            </a>
            <a href="/gonullu-ol" className="rounded-[26px] bg-[#1f8f5f] p-7 text-white">
              <strong className="text-2xl">Gönüllü</strong>
              <span className="mt-3 block text-sm text-white/75">Sahada ve üretimde katkı sağla →</span>
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScWr4iafQPIUoYTxiDt0gsq-X1Hxc32U51ngkmx9gxWfcTsAg/viewform?usp=header" target="_blank" rel="noreferrer" className="rounded-[26px] bg-[#ef4e55] p-7 text-white">
              <strong className="text-2xl">Paydaş / Sponsor</strong>
              <span className="mt-3 block text-sm text-white/75">Bir medeniyet tasavvuruna ortak ol →</span>
            </a>
            <a href="/is-birligi" className="rounded-[26px] bg-[#ff9c0a] p-7 text-[#082f63]">
              <strong className="text-2xl">Panayır / Kurum</strong>
              <span className="mt-3 block text-sm text-[#082f63]/75">Festivalde yerini al →</span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f3ec] py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-center">
          <div>
            <span className="text-xs font-black uppercase tracking-[.18em] text-[#1f8f5f]">DUYURULAR</span>
            <h2 className="display mt-5 text-4xl font-black text-[#082f63] md:text-6xl">
              Festival yaklaşırken hiçbir duyuruyu kaçırma.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a href="https://whatsapp.com/channel/0029VbDPOjXJf05fnKMEbF2m" target="_blank" rel="noreferrer"
               className="rounded-full bg-[#1f8f5f] px-7 py-4 font-black text-white">
              WhatsApp Duyuru Kanalı ↗
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScWr4iafQPIUoYTxiDt0gsq-X1Hxc32U51ngkmx9gxWfcTsAg/viewform" target="_blank" rel="noreferrer"
               className="rounded-full bg-[#082f63] px-7 py-4 font-black text-white">
              Ön Başvuru ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

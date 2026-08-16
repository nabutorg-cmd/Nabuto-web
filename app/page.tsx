import Image from "next/image";
import Link from "next/link";
import ImpactStrip from "@/components/ImpactStrip";

const projects = [
  ["NabutoFest", "Helal eğlence, maneviyat, kültür ve aileyi aynı meydanda buluşturan festival.", "/nabutofest", "01"],
  ["Medeniyet Keşif Parkurları", "Ailelerin tarihî ve manevi merkezleri interaktif rotalarla keşfettiği deneyim.", "/projeler", "02"],
  ["Nabuto İzcilik", "Doğada sorumluluk, dayanışma, ibadet bilinci ve karakter gelişimi.", "/projeler", "03"],
  ["Oba Okul", "Medeniyet değerleri ile uygulamalı öğrenmeyi buluşturan alternatif eğitim modeli.", "/projeler", "04"],
];

export default function Home() {
  return (
    <>
      <section className="hero-gradient grid-pattern min-h-screen pt-36 pb-20">
        <div className="container-page grid items-center gap-16 lg:grid-cols-[1.08fr_.92fr]">
          <div className="reveal">
            <span className="text-xs font-black uppercase tracking-[.18em] text-[#08a9ae]">Neslin aslıyla buluştuğu uygulama ve tefekkür ortamları</span>
            <h1 className="display mt-6 text-6xl font-black text-[#082f63] sm:text-7xl lg:text-[92px]">
              Geleneğin hikmeti, <span className="text-[#08a9ae]">geleceğin imkânıyla</span> buluşuyor.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#65758a] md:text-xl">
              Çocukları, gençleri ve aileleri kökleriyle yeniden buluşturan; sosyal, dijital ve fiziksel deneyimler üreten dinamik bir hareket.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/projeler" className="rounded-full bg-[#082f63] px-7 py-4 font-bold text-white shadow-xl">Projeleri keşfet</Link>
              <Link href="/nabutofest" className="rounded-full border border-[#082f6320] bg-white/60 px-7 py-4 font-bold text-[#082f63]">NabutoFest</Link><a href="https://docs.google.com/forms/d/e/1FAIpQLScWr4iafQPIUoYTxiDt0gsq-X1Hxc32U51ngkmx9gxWfcTsAg/viewform" target="_blank" rel="noreferrer" className="rounded-full bg-[#ef4e55] px-7 py-4 font-black text-white shadow-xl">Katılımcı Başvuru</a>
            </div>
          </div>
          <div className="reveal delay-1 relative min-h-[480px]">
            <div className="glass soft-shadow absolute inset-6 grid place-items-center overflow-hidden rounded-[42px]">
              <div className="absolute h-80 w-80 rounded-full bg-[#08a9ae22] blur-3xl" />
              <Image src="/nabuto-logo.png" alt="NABUTO" width={520} height={260} className="relative w-[72%] rounded-3xl" priority />
              <div className="absolute bottom-8 left-8">
                <span className="block text-xs text-[#65758a]">Bir hareketten fazlası</span>
                <strong className="text-[#082f63]">Bir medeniyet ekosistemi</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImpactStrip />

      <section className="bg-white py-24">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[36px] border border-[#082f6312] bg-[#f6f3ec] soft-shadow">
            <Image
              src="/nabutofest-afis.jpg"
              alt="NABUTOFEST 2026 festival afişi"
              width={1100}
              height={1375}
              className="h-auto w-full"
            />
          </div>
          <div>
            <span className="text-xs font-black uppercase tracking-[.18em] text-[#ef4e55]">NABUTOFEST 2026</span>
            <h2 className="display mt-5 text-5xl font-black text-[#082f63] md:text-7xl">
              4 • 5 • 6 Eylül<br />Kocayayla / Bursa
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#65758a]">
              Türkiye’de ilk defa program akışı namaz vakitlerine göre planlanan
              helal eğlence ve aile festivalinde üç nesil aynı değerler etrafında buluşuyor.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScWr4iafQPIUoYTxiDt0gsq-X1Hxc32U51ngkmx9gxWfcTsAg/viewform" target="_blank" rel="noreferrer"
                 className="rounded-full bg-[#ef4e55] px-7 py-4 font-black text-white shadow-xl">
                Katılımcı Ön Başvuru
              </a>
              <Link href="/nabutofest"
                    className="rounded-full border border-[#082f6320] bg-white px-7 py-4 font-bold text-[#082f63]">
                Festival Detayları
              </Link>
            </div>
            <div className="mt-7 rounded-[24px] border border-[#08a9ae20] bg-[#08a9ae0d] p-6">
              <strong className="block text-[#082f63]">Aile veya bireysel katılım mümkün.</strong>
              <span className="mt-2 block text-sm leading-6 text-[#65758a]">
                Bu form ön başvuru niteliğindedir; kesin rezervasyon veya ödeme yükümlülüğü oluşturmaz.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f3ec] py-24">
        <div className="container-page">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-black uppercase tracking-[.18em] text-[#08a9ae]">NABUTOFEST 2026</span>
              <h2 className="display mt-5 max-w-4xl text-5xl font-black text-[#082f63] md:text-7xl">
                Festival daha siteye girer girmez hissedilsin.
              </h2>
            </div>
            <p className="max-w-md text-[#65758a]">
              4 • 5 • 6 Eylül 2026 — Kocayayla / Bursa
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.3fr_.7fr]">
            <a href="/nabutofest" className="group overflow-hidden rounded-[34px] bg-white soft-shadow">
              <Image
                src="/nabutofest-ana-afis.jpg"
                alt="NABUTOFEST 2026 ana festival afişi"
                width={1100}
                height={1375}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
              />
            </a>

            <div className="grid gap-6">
              <a href="/gonullu-ol" className="group overflow-hidden rounded-[30px] bg-white soft-shadow">
                <Image
                  src="/nabutofest-gonullu.jpg"
                  alt="NABUTOFEST gönüllü çağrı afişi"
                  width={1100}
                  height={1375}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </a>

              <a href="/is-birligi" className="group overflow-hidden rounded-[30px] bg-white soft-shadow">
                <Image
                  src="/nabutofest-destek.jpg"
                  alt="NABUTOFEST bağış ve destek afişi"
                  width={1100}
                  height={1375}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </a>
            </div>
          </div>
        </div>
      </section>



      <section className="bg-white py-28">
        <div className="container-page grid gap-16 lg:grid-cols-2">
          <div>
            <span className="text-xs font-black uppercase tracking-[.18em] text-[#ef4e55]">NABUTO nedir?</span>
            <h2 className="display mt-5 text-5xl font-black text-[#082f63] md:text-7xl">Köklerinden güç alan, geleceğe yön veren bir ekosistem.</h2>
          </div>
          <div>
            <p className="text-xl leading-9 text-[#082f63]">
              NABUTO; çocukların, gençlerin ve ailelerin kendi kökleriyle yeniden bağ kurmasını amaçlayan; sosyal, dijital ve fiziksel uygulama ve tefekkür ortamları ile medeniyetimizin bekasına hizmet eden dinamik bir harekettir.
            </p>
            <div className="mt-9 rounded-3xl border border-[#08a9ae20] bg-[#08a9ae0d] p-7">
              <span className="text-xs font-black tracking-[.16em] text-[#ef4e55]">NABUTO İLKESİ</span>
              <p className="mt-3 text-xl font-black text-[#082f63]">“Geleneğin hikmeti, geleceğin imkânıyla buluşmalı.”</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f3ec] py-28">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-black uppercase tracking-[.18em] text-[#08a9ae]">Projeler</span>
              <h2 className="display mt-5 max-w-3xl text-5xl font-black text-[#082f63] md:text-7xl">Birbirini besleyen bütüncül bir yol haritası.</h2>
            </div>
            <Link href="/projeler" className="font-bold text-[#082f63]">Tüm projeleri gör ↗</Link>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {projects.map(([name, desc, href, no]) => (
              <Link href={href} key={name} className="card-hover min-h-80 rounded-[32px] border border-[#082f6310] bg-white p-9">
                <span className="text-xs font-black tracking-[.16em] text-[#ef4e55]">{no}</span>
                <div className="mt-20">
                  <h3 className="text-3xl font-black tracking-tight text-[#082f63]">{name}</h3>
                  <p className="mt-4 max-w-lg leading-7 text-[#65758a]">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-gradient py-28 text-white">
        <div className="container-page grid gap-14 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <span className="text-xs font-black uppercase tracking-[.18em] text-white/60">NabutoFest</span>
            <h2 className="display mt-5 text-5xl font-black md:text-7xl">3 Nesil, 72 Millet; Namazla Birleşen Bir Ümmet.</h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">Çocukların neşesini, gençlerin heyecanını, anne babaların emeğini ve büyüklerin duasını aynı meydanda buluşturan aile ve medeniyet festivali.</p>
          </div>
          <div className="glass rounded-[32px] p-9 text-[#082f63]">
            <span className="font-black text-[#ef4e55]">Biz reklam alanı satmıyoruz.</span>
            <p className="mt-4 text-3xl font-black leading-tight">Bir medeniyet tasavvurunun yeniden ihyasına ortaklar arıyoruz.</p>
            <Link href="/is-birligi" className="mt-8 inline-block rounded-full bg-white px-6 py-4 font-bold">İş birliği yap</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="container-page grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
          <div className="rounded-[36px] bg-[#082f63] p-10 text-white md:p-14">
            <span className="text-xs font-black uppercase tracking-[.18em] text-white/55">Dijital platform</span>
            <h2 className="display mt-6 text-5xl font-black md:text-7xl">Keşif, öğrenme ve katılım tek çatı altında.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">Medeniyet Keşif Parkurları, etkinlikler, rozetler ve aile deneyimleri için büyüyen dijital altyapı.</p>
            <Link href="/projeler" className="mt-8 inline-block rounded-full bg-white px-6 py-4 font-bold text-[#082f63]">Platformu keşfet</Link>
          </div>
          <div className="grid gap-5">
            <Link href="/haberler" className="card-hover rounded-[30px] border border-[#082f6312] bg-[#f6f3ec] p-8">
              <span className="text-xs font-black uppercase tracking-[.16em] text-[#ef4e55]">Güncel</span>
              <h3 className="mt-10 text-3xl font-black text-[#082f63]">NABUTO’dan gelişmeler</h3>
              <p className="mt-4 text-[#65758a]">Projeler, etkinlikler ve kurumsal çalışmalarla ilgili haberler.</p>
            </Link>
            <Link href="/etkinlikler" className="card-hover rounded-[30px] border border-[#082f6312] bg-[#f6f3ec] p-8">
              <span className="text-xs font-black uppercase tracking-[.16em] text-[#08a9ae]">Takvim</span>
              <h3 className="mt-10 text-3xl font-black text-[#082f63]">Etkinliklere katılın</h3>
              <p className="mt-4 text-[#65758a]">Yaklaşan buluşmalar, festival programları ve kayıt bilgileri.</p>
            </Link>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-4 z-40 px-4">
        <div className="mx-auto flex max-w-xl items-center justify-between gap-4 rounded-full border border-white/70 bg-[#082f63]/95 px-5 py-3 text-white shadow-2xl backdrop-blur">
          <div className="min-w-0">
            <strong className="block truncate text-sm">NABUTOFEST 2026</strong>
            <span className="block truncate text-xs text-white/70">Katılımcı ön başvuruları açık</span>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScWr4iafQPIUoYTxiDt0gsq-X1Hxc32U51ngkmx9gxWfcTsAg/viewform"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 rounded-full bg-[#ef4e55] px-5 py-3 text-sm font-black text-white"
          >
            Başvur
          </a>
        </div>
      </div>

    </>
  );
}

import Image from "next/image";
import Link from "next/link";

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
              <Link href="/nabutofest" className="rounded-full border border-[#082f6320] bg-white/60 px-7 py-4 font-bold text-[#082f63]">NabutoFest</Link>
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
    </>
  );
}

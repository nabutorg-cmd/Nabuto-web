import Image from "next/image";
import Link from "next/link";

const projects = [
  ["NABUTOFEST", "Üç nesli aynı değerler etrafında buluşturan helal eğlence ve aile festivali.", "/nabutofest-ana-afis.jpg", "/nabutofest"],
  ["Medeniyet Keşif Parkurları", "Çocukların ve ailelerin şehri gezerken tarih, değer ve medeniyetle bağ kurduğu deneyim.", "/nabutofest-gonullu.jpg", "/medeniyet-kesif-parkurlari"],
  ["Aile & Nesil", "Çocuğu, genci, anne-babayı ve büyükleri aynı gelişim yolculuğunda buluşturan çalışmalar.", "/nabutofest-destek.jpg", "/projeler"],
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f5f0e7] text-[#082f63]">
      <section className="relative min-h-[92vh] bg-[#082f63] text-white">
        <Image src="/nabutofest-ana-afis.jpg" alt="NABUTO" fill priority className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#082f63] via-[#082f63]/90 to-[#082f63]/35" />
        <div className="container-page relative z-10 flex min-h-[92vh] items-end pb-20 pt-32 md:pb-28">
          <div className="max-w-5xl">
            <span className="text-xs font-black uppercase tracking-[.24em] text-[#7ad4cf]">NABUTO</span>
            <h1 className="display mt-6 text-6xl font-black leading-[.92] tracking-[-.045em] md:text-8xl lg:text-[7.4rem]">
              Neslin aslıyla<br />buluştuğu yer.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
              Çocukların, gençlerin ve ailelerin kendi kök değerleriyle yeniden bağ kurabileceği
              uygulama ve tefekkür ortamları inşa ediyoruz.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/hakkimizda" className="rounded-full bg-[#ef4e55] px-7 py-4 font-black text-white">NABUTO’yu Keşfet</Link>
              <Link href="/projeler" className="rounded-full border border-white/35 px-7 py-4 font-black text-white">Projelerimiz</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f0e7] py-28 md:py-36">
        <div className="container-page grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div className="text-xs font-black uppercase tracking-[.22em] text-[#ef4e55]">Neden NABUTO?</div>
          <div>
            <h2 className="display max-w-5xl text-5xl font-black leading-[1.02] tracking-[-.035em] md:text-7xl">
              Sorunları değil,<br />çözümleri konuşuyoruz.
            </h2>
            <p className="mt-8 max-w-3xl text-lg leading-9 text-[#53677b]">
              NABUTO; yeni neslin kendi medeniyet değerleriyle bağ kurmasını yalnızca anlatan değil,
              bunu yaşayabileceği ortamlar tasarlayan bir hareket. Sosyal, dijital ve fiziksel
              deneyimleri aynı vizyon altında buluşturuyoruz.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="container-page">
          <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <span className="text-xs font-black uppercase tracking-[.22em] text-[#08a9ae]">Neler yapıyoruz?</span>
              <h2 className="display mt-5 text-5xl font-black tracking-[-.035em] md:text-7xl">Fikirleri deneyime dönüştürüyoruz.</h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-[#65758a] lg:justify-self-end">
              Festivalden keşif parkurlarına, aile çalışmalarından yeni nesil eğitim modellerine uzanan büyüyen bir ekosistem.
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map(([title, text, image, href], i) => (
              <Link key={title} href={href} className="group grid overflow-hidden rounded-[34px] bg-[#f5f0e7] lg:grid-cols-2">
                <div className={`relative min-h-[380px] ${i % 2 ? "lg:order-2" : ""}`}>
                  <Image src={image} alt={title} fill className="object-cover transition duration-700 group-hover:scale-[1.025]" />
                </div>
                <div className="flex min-h-[380px] flex-col justify-between p-9 md:p-14">
                  <span className="text-xs font-black tracking-[.18em] text-[#ef4e55]">0{i + 1}</span>
                  <div>
                    <h3 className="display text-4xl font-black tracking-[-.03em] md:text-6xl">{title}</h3>
                    <p className="mt-5 max-w-xl text-lg leading-8 text-[#65758a]">{text}</p>
                    <span className="mt-7 inline-block font-black">Keşfet →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#082f63] py-28 text-white">
        <div className="container-page grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <span className="text-xs font-black uppercase tracking-[.22em] text-[#7ad4cf]">NABUTOFEST 2026</span>
            <h2 className="display mt-6 text-5xl font-black leading-[.98] tracking-[-.035em] md:text-7xl">
              Üç nesil.<br />Aynı meydan.<br />Aynı değerler.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/70">
              4 • 5 • 6 Eylül 2026 — Kocayayla / Bursa. Program akışı namaz vakitlerine göre planlanan helal eğlence ve aile festivali.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScWr4iafQPIUoYTxiDt0gsq-X1Hxc32U51ngkmx9gxWfcTsAg/viewform" target="_blank" rel="noreferrer" className="rounded-full bg-[#ef4e55] px-7 py-4 font-black">Katılımcı Ön Başvuru ↗</a>
              <Link href="/nabutofest" className="rounded-full border border-white/30 px-7 py-4 font-black">Festivali Keşfet</Link>
            </div>
          </div>
          <div className="relative min-h-[620px] overflow-hidden rounded-[34px]">
            <Image src="/nabutofest-ana-afis.jpg" alt="NABUTOFEST 2026 afişi" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-[#f5f0e7] py-28">
        <div className="container-page">
          <span className="text-xs font-black uppercase tracking-[.22em] text-[#08a9ae]">Birlikte etki oluşturalım</span>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <h2 className="display text-5xl font-black leading-[1] tracking-[-.035em] md:text-7xl">
              Bu hareketin bir parçası ol.
            </h2>
            <p className="text-lg leading-8 text-[#65758a]">
              Gönüllü ol, iş birliği yap veya NABUTO projelerine destek ver. Birlikte daha kalıcı bir etki oluşturalım.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <Link href="/gonullu-ol" className="rounded-[28px] bg-white p-8 text-2xl font-black">Gönüllü Ol <span className="float-right">→</span></Link>
            <Link href="/is-birligi" className="rounded-[28px] bg-[#08a9ae] p-8 text-2xl font-black text-white">İş Birliği <span className="float-right">→</span></Link>
            <Link href="/iletisim" className="rounded-[28px] bg-[#ef4e55] p-8 text-2xl font-black text-white">Bize Ulaş <span className="float-right">→</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}

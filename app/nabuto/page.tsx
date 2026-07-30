import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
export const metadata: Metadata = { title: "NABUTO Hakkında" };
const items = [
  ["Misyon", "Çocukların, gençlerin ve ailelerin kendi kökleriyle yeniden bağ kurmasını sağlayan uygulama ve tefekkür ortamları geliştirmek."],
  ["Vizyon", "Medeniyetimizin değerlerinden beslenen, çağın imkânlarını etkin kullanan sürdürülebilir bir gelişim ekosistemi kurmak."],
  ["Yaklaşım", "Sorunları değil çözümleri konuşan; geleneğin hikmetini geleceğin imkânlarıyla buluşturan bir hareket olmak."],
];
export default function Page() {
  return <>
    <PageHero eyebrow="NABUTO" title="Neslin aslıyla buluştuğu bir medeniyet hareketi." text="Sosyal, dijital ve fiziksel ortamları aynı amaç etrafında birleştiren; aileyi, eğitimi ve toplumsal bağı güçlendiren dinamik bir ekosistem." />
    <section className="bg-white py-24"><div className="container-page grid gap-5 md:grid-cols-3">
      {items.map(([t,d]) => <article key={t} className="rounded-[28px] border border-[#082f6312] p-8"><h2 className="text-3xl font-black text-[#082f63]">{t}</h2><p className="mt-5 leading-8 text-[#65758a]">{d}</p></article>)}
    </div></section>
    <section className="bg-[#f6f3ec] py-24"><div className="container-page max-w-4xl"><span className="text-xs font-black tracking-[.18em] text-[#ef4e55]">NABUTO MANİFESTOSU</span><p className="mt-6 text-3xl font-black leading-tight text-[#082f63] md:text-5xl">Bir medeniyeti inşa etmek için de, imha etmek için de tek bir araç yeterlidir: Eğitim. Kendi medeniyetinin değerlerinden beslenmeyen bir eğitim ise, kendi medeniyetini kendi elleriyle imha eder.</p></div></section>
  </>;
}

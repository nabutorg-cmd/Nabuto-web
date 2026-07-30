import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
export const metadata: Metadata = { title: "İş Birliği" };
const groups=[["Sponsor firmalar","Maddi ve ayni katkılarla sürdürülebilir etki oluşturun."],["STK ve kurumlar","Atölye, gönüllü ekip, saha hizmeti ve lojistik desteği sağlayın."],["Okullar","Öğrencileri ve aileleri nitelikli etkinliklerle buluşturun."],["Belediyeler","Mekân, ulaşım, altyapı ve yerel koordinasyonla toplumsal faydayı büyütün."]];
export default function Page(){return <>
<PageHero eyebrow="İş birliği" title="Birlikte daha büyük bir etki oluşturalım." text="Kurumsal gücü, gönüllü emeğini ve toplumsal ağı ortak bir medeniyet hedefi etrafında buluşturan esnek iş birliği modelleri."/>
<section className="bg-white py-24"><div className="container-page grid gap-5 md:grid-cols-2">{groups.map(([n,d])=><article key={n} className="rounded-[30px] border border-[#082f6312] p-9"><h2 className="text-3xl font-black text-[#082f63]">{n}</h2><p className="mt-4 leading-7 text-[#65758a]">{d}</p></article>)}</div><div className="container-page mt-12"><div className="flex flex-wrap gap-3"><Link href="/sponsor-ol" className="inline-block rounded-full bg-[#ef4e55] px-7 py-4 font-bold text-white">Sponsor ol</Link><Link href="/gonullu-ol" className="inline-block rounded-full border border-[#082f6320] bg-white px-7 py-4 font-bold text-[#082f63]">Gönüllü ol</Link></div></div></section>
</>}

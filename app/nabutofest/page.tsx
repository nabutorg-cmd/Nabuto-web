import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
export const metadata: Metadata = { title: "NabutoFest" };
export default function Page(){return <>
<PageHero eyebrow="NabutoFest" title="3 Nesil, 72 Millet; Namazla Birleşen Bir Ümmet." text="Helal eğlence, maneviyat, kültür, yeni nesil eğitim ve aileyi namazgâh merkezli bir festival atmosferinde buluşturan büyük birlik yolculuğu."/>
<section className="bg-white py-24"><div className="container-page grid gap-6 lg:grid-cols-2">
<div><span className="text-xs font-black tracking-[.18em] text-[#08a9ae]">FESTİVAL VİZYONU</span><h2 className="display mt-5 text-5xl font-black text-[#082f63]">Kalabalığın ötesinde; birlik, sinerji ve gelecek.</h2></div>
<div className="space-y-5 text-lg leading-8 text-[#65758a]"><p>Her festivalde bir kalabalık oluşur. Ancak çok azı büyük bir birlik, bir sinerji ve bir gelecek inşa eder.</p><p>NabutoFest; çocukların neşesini, gençlerin heyecanını, anne babaların emeğini ve büyüklerin duasını aynı meydanda buluşturur.</p></div>
</div></section>
<section className="dark-gradient py-24 text-white"><div className="container-page"><h2 className="display max-w-4xl text-5xl font-black md:text-7xl">Biz reklam alanı satmıyoruz. Bir medeniyet tasavvurunun yeniden ihyasına ortaklar arıyoruz.</h2></div></section>
</>}

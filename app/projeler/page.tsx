import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
export const metadata: Metadata = { title: "Projeler" };
const projects = [
 ["NabutoFest","Namazgâh merkezli aile, maneviyat, kültür ve helal eğlence festivali."],
 ["Medeniyet Keşif Parkurları","Tarihî ve manevi merkezlerde ailece uygulanabilen interaktif keşif rotaları."],
 ["Medeniyet Keşif Platformu","Türkiye çapındaki rotaları, QR görevlerini ve dijital rehberliği bir araya getiren platform."],
 ["Nabuto İzcilik","Doğa, dayanışma, karakter ve ibadet bilincini birlikte geliştiren izcilik modeli."],
 ["Nabuto Çocuk Köyü","Çocukların üretim, oyun, keşif ve topluluk deneyimiyle büyüdüğü yaşayan öğrenme alanı."],
 ["Oba Okul","Örgün eğitime alternatif olarak tasarlanan, medeniyet merkezli uygulamalı eğitim modeli."]
];
export default function Page(){return <>
<PageHero eyebrow="NABUTO projeleri" title="Festivalden eğitim modeline uzanan güçlü bir yol haritası." text="Her proje kendi alanında değer üretirken diğer projeleri de besler; böylece tekil etkinliklerden sürdürülebilir bir medeniyet ekosistemine ulaşılır."/>
<section className="bg-[#f6f3ec] py-24"><div className="container-page grid gap-5 md:grid-cols-2">
{projects.map(([n,d],i)=><article key={n} className="card-hover min-h-72 rounded-[32px] bg-white p-9"><span className="text-xs font-black text-[#ef4e55]">0{i+1}</span><h2 className="mt-16 text-3xl font-black text-[#082f63]">{n}</h2><p className="mt-4 leading-7 text-[#65758a]">{d}</p></article>)}
</div></section></>}

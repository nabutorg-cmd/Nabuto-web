import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
export const metadata: Metadata = { title: "İletişim" };
export default function Page(){return <>
<PageHero eyebrow="İletişim" title="Geleceği birlikte inşa edelim." text="Sponsorluk, gönüllülük, kurumsal iş birliği ve NABUTO projeleri hakkında bizimle iletişime geçebilirsiniz."/>
<section className="bg-white py-24"><div className="container-page grid gap-7 lg:grid-cols-2">
<div className="rounded-[32px] bg-[#082f63] p-10 text-white"><h2 className="text-4xl font-black">NABUTO Derneği</h2><div className="mt-10 space-y-4 text-lg"><p>info@nabuto.org</p><p>nabutorg@gmail.com</p><p>0532 654 20 22</p><p>@nabuto.official</p><p>www.nabuto.org</p></div></div>
<div className="rounded-[32px] border border-[#082f6312] p-10"><span className="text-xs font-black tracking-[.18em] text-[#ef4e55]">ADRES</span><p className="mt-5 text-2xl font-black leading-snug text-[#082f63]">Karaman Mah. Fulya (170) Sokak, Dış Kapı No: 1<br/>Karaman Dernekler Yerleşkesi</p><p className="mt-8 text-[#65758a]">Bursa, Türkiye</p></div>
</div></section>
</>}

import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
export const metadata: Metadata = { title: "Etkinlikler" };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Etkinlik takvimi" title="Aynı niyet etrafında buluşuyoruz." text="NABUTO etkinlikleri, festival programları ve keşif buluşmaları yakında burada yayımlanacak." />
      <section className="bg-white py-24">
        <div className="container-page rounded-[34px] border border-[#082f6312] bg-[#f6f3ec] p-10 md:p-16">
          <span className="text-xs font-black uppercase tracking-[.18em] text-[#ef4e55]">Yakında</span>
          <h2 className="display mt-5 max-w-3xl text-5xl font-black text-[#082f63] md:text-7xl">Etkinlik takvimi hazırlanıyor.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#65758a]">Program, kayıt ve katılım bilgileri yönetim paneliyle birlikte aktif hale getirilecek.</p>
        </div>
      </section>
    </>
  );
}

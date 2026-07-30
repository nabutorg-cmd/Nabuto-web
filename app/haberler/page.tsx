import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
export const metadata: Metadata = { title: "Haberler" };

const items = [
  ["NABUTO dijital platformu yayında", "Kurumsal web sitemizin yeni altyapısı kullanıma açıldı.", "Dijital"],
  ["NabutoFest hazırlıkları sürüyor", "Festival programı, iş birlikleri ve saha planlamaları adım adım ilerliyor.", "NabutoFest"],
  ["Medeniyet Keşif Parkurları geliştiriliyor", "Ailece deneyimlenebilecek şehir rotaları için içerik çalışmaları devam ediyor.", "Projeler"],
];

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Haberler" title="NABUTO’dan gelişmeler." text="Projeler, etkinlikler ve kurumsal çalışmalarla ilgili güncel duyurular." />
      <section className="bg-[#f6f3ec] py-24">
        <div className="container-page grid gap-5 md:grid-cols-3">
          {items.map(([title, text, tag]) => (
            <article key={title} className="card-hover rounded-[30px] bg-white p-8">
              <span className="text-xs font-black uppercase tracking-[.16em] text-[#08a9ae]">{tag}</span>
              <h2 className="mt-12 text-3xl font-black tracking-tight text-[#082f63]">{title}</h2>
              <p className="mt-4 leading-7 text-[#65758a]">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

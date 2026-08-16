import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "İletişim" };

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Geleceği birlikte inşa edelim."
        text="Sponsorluk, gönüllülük, kurumsal iş birliği ve NABUTO projeleri hakkında bizimle iletişime geçebilirsiniz."
      />

      <section className="bg-[#f6f3ec] py-24">
        <div className="container-page grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div className="grid gap-6">
            <div className="rounded-[32px] bg-[#082f63] p-9 text-white">
              <span className="text-xs font-black uppercase tracking-[.18em] text-white/55">
                NABUTO Derneği
              </span>
              <div className="mt-8 space-y-4 text-lg">
                <p>info@nabuto.org</p>
                <p>nabutorg@gmail.com</p>
                <p>0532 654 20 22</p>
                <p>@nabuto.official</p>
                <p>www.nabuto.org</p>
              </div>
            </div>

            <div className="rounded-[32px] bg-white p-9">
              <span className="text-xs font-black uppercase tracking-[.18em] text-[#ef4e55]">
                Adres
              </span>
              <p className="mt-5 text-2xl font-black leading-snug text-[#082f63]">
                Karaman Mah. Fulya (170) Sokak, Dış Kapı No: 1
                <br />
                Karaman Dernekler Yerleşkesi
              </p>
              <p className="mt-7 text-[#65758a]">Bursa, Türkiye</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}

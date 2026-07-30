type Props = { eyebrow: string; title: string; text: string };

export default function PageHero({ eyebrow, title, text }: Props) {
  return (
    <section className="hero-gradient grid-pattern pt-36 pb-24">
      <div className="container-page reveal">
        <span className="text-xs font-black uppercase tracking-[.18em] text-[#08a9ae]">{eyebrow}</span>
        <h1 className="display mt-5 max-w-5xl text-5xl font-black text-[#082f63] md:text-8xl">{title}</h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-[#65758a] md:text-xl">{text}</p>
      </div>
    </section>
  );
}

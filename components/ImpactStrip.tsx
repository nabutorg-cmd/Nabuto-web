const items = [
  ["3 Nesil", "aynı meydanda"],
  ["72 Millet", "aynı ümmet bilinciyle"],
  ["6 Ana Proje", "birbirini besleyen ekosistem"],
  ["Türkiye", "medeniyet odaklı gelecek"],
];

export default function ImpactStrip() {
  return (
    <section className="border-y border-[#082f6310] bg-white">
      <div className="container-page grid divide-y divide-[#082f6310] md:grid-cols-4 md:divide-x md:divide-y-0">
        {items.map(([value, label]) => (
          <div key={value} className="px-6 py-8 text-center">
            <strong className="block text-2xl font-black text-[#082f63]">{value}</strong>
            <span className="mt-1 block text-sm text-[#65758a]">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

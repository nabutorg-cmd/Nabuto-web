import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="container-page flex flex-col items-center justify-between gap-6 text-center text-sm text-[#65758a] md:flex-row md:text-left">
        <Image src="/nabuto-logo.png" alt="NABUTO" width={132} height={54} className="h-12 w-auto rounded-md object-cover" />
        <p>© {new Date().getFullYear()} NABUTO. Tüm hakları saklıdır.</p>
        <div className="flex gap-5">
          <Link href="/iletisim">İletişim</Link>
          <a href="https://www.instagram.com/nabuto.official" target="_blank" rel="noreferrer">@nabuto.official</a>
        </div>
      </div>
    </footer>
  );
}

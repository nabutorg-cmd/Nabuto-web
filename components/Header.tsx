"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  ["NABUTO", "/nabuto"],
  ["Projeler", "/projeler"],
  ["NabutoFest", "/nabutofest"],
  ["İş Birliği", "/is-birligi"],
  ["Haberler", "/haberler"],
  ["Galeri", "/galeri"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#082f6312] bg-[#fcfbf8e8] backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" aria-label="NABUTO ana sayfa">
          <Image src="/nabuto-logo.png" alt="NABUTO" width={156} height={64} className="h-14 w-auto rounded-lg object-cover object-center" priority />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => <Link key={href} href={href} className="text-sm font-bold text-[#082f63] hover:text-[#08a9ae]">{label}</Link>)}
          <Link href="/iletisim" className="rounded-full bg-[#082f63] px-5 py-3 text-sm font-bold text-white">İletişim</Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-full border border-[#082f6320] md:hidden" aria-label="Menüyü aç">
          <span className="text-xl">{open ? "×" : "☰"}</span>
        </button>
      </div>
      {open && (
        <nav className="container-page flex flex-col gap-5 border-t border-[#082f6312] py-6 md:hidden">
          {links.map(([label, href]) => <Link onClick={() => setOpen(false)} key={href} href={href} className="text-2xl font-bold text-[#082f63]">{label}</Link>)}
          <Link onClick={() => setOpen(false)} href="/iletisim" className="text-2xl font-bold text-[#ef4e55]">İletişim</Link>
        </nav>
      )}
    </header>
  );
}

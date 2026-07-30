"use client";
import { FormEvent, useState } from "react";
export default function ApplicationForm({ type }: { type: "gonullu" | "sponsor" }) {
  const [sent,setSent]=useState(false); const sponsor=type==="sponsor";
  function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();setSent(true)}
  return <form onSubmit={submit} className="rounded-[34px] border border-[#082f6312] bg-white p-8 md:p-10">
    <div className="grid gap-5 md:grid-cols-2">
      {[["Ad soyad","text"],["E-posta","email"],["Telefon","text"],[sponsor?"Kurum / firma":"Şehir","text"]].map(([l,t])=><label key={l} className="grid gap-2 text-sm font-bold text-[#082f63]">{l}<input required type={t} className="rounded-2xl border border-[#082f6320] px-4 py-3 outline-none focus:border-[#08a9ae]"/></label>)}
    </div>
    <label className="mt-5 grid gap-2 text-sm font-bold text-[#082f63]">{sponsor?"İş birliği düşünceniz":"Katkı sunmak istediğiniz alan"}<textarea required rows={5} className="rounded-2xl border border-[#082f6320] px-4 py-3 outline-none focus:border-[#08a9ae]"/></label>
    <button className="mt-6 rounded-full bg-[#082f63] px-7 py-4 font-bold text-white">{sponsor?"Görüşme talebi oluştur":"Gönüllü başvurusu oluştur"}</button>
    {sent&&<p className="mt-5 rounded-2xl bg-[#08a9ae12] p-4 text-sm font-bold text-[#082f63]">Form arayüzü hazır. Başvuruların güvenli biçimde gönderilmesi sonraki aşamada etkinleştirilecektir.</p>}
  </form>
}

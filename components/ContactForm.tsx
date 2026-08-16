"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [message, setMessage] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("Gönderiliyor...");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/basvuru", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "iletisim",
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          organization: data.get("subject"),
          message: data.get("message"),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Mesaj gönderilemedi.");
      }

      setState("success");
      setMessage(result.message);
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error ? error.message : "Bir hata oluştu."
      );
    }
  }

  return (
    <form onSubmit={submit} className="rounded-[32px] border border-[#082f6312] bg-white p-8 md:p-10">
      <span className="text-xs font-black uppercase tracking-[.18em] text-[#ef4e55]">
        Mesaj gönder
      </span>

      <div className="mt-7 grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-[#082f63]">
          Ad soyad
          <input required name="name" className="rounded-2xl border border-[#082f6320] px-4 py-3 outline-none focus:border-[#08a9ae]" />
        </label>

        <label className="grid gap-2 text-sm font-bold text-[#082f63]">
          E-posta
          <input required type="email" name="email" className="rounded-2xl border border-[#082f6320] px-4 py-3 outline-none focus:border-[#08a9ae]" />
        </label>

        <label className="grid gap-2 text-sm font-bold text-[#082f63]">
          Telefon
          <input name="phone" className="rounded-2xl border border-[#082f6320] px-4 py-3 outline-none focus:border-[#08a9ae]" />
        </label>

        <label className="grid gap-2 text-sm font-bold text-[#082f63]">
          Konu
          <input name="subject" className="rounded-2xl border border-[#082f6320] px-4 py-3 outline-none focus:border-[#08a9ae]" />
        </label>
      </div>

      <label className="mt-5 grid gap-2 text-sm font-bold text-[#082f63]">
        Mesajınız
        <textarea required name="message" rows={5} className="rounded-2xl border border-[#082f6320] px-4 py-3 outline-none focus:border-[#08a9ae]" />
      </label>

      <button
        disabled={state === "loading"}
        className="mt-6 rounded-full bg-[#ef4e55] px-7 py-4 font-bold text-white disabled:opacity-60"
      >
        {state === "loading" ? "Gönderiliyor..." : "Mesajı gönder"}
      </button>

      {message && (
        <p
          aria-live="polite"
          className={`mt-5 rounded-2xl p-4 text-sm font-bold ${
            state === "success"
              ? "bg-[#08a9ae12] text-[#08676b]"
              : state === "error"
                ? "bg-[#ef4e5512] text-[#a22731]"
                : "bg-[#082f6308] text-[#082f63]"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}

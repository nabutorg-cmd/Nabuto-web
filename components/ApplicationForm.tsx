"use client";

import { FormEvent, useState } from "react";

type Props = {
  type: "gonullu" | "sponsor";
};

type Status = {
  kind: "idle" | "loading" | "success" | "error";
  message: string;
};

export default function ApplicationForm({ type }: Props) {
  const [status, setStatus] = useState<Status>({
    kind: "idle",
    message: "",
  });

  const sponsor = type === "sponsor";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ kind: "loading", message: "Gönderiliyor..." });

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      type,
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      organization: data.get("organization"),
      message: data.get("message"),
    };

    try {
      const response = await fetch("/api/basvuru", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Form gönderilemedi.");
      }

      setStatus({
        kind: "success",
        message: result.message || "Başvurunuz başarıyla alındı.",
      });
      form.reset();
    } catch (error) {
      setStatus({
        kind: "error",
        message:
          error instanceof Error
            ? error.message
            : "Bir hata oluştu. Lütfen tekrar deneyin.",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[34px] border border-[#082f6312] bg-white p-8 md:p-10"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-[#082f63]">
          Ad soyad
          <input
            required
            name="name"
            autoComplete="name"
            className="rounded-2xl border border-[#082f6320] px-4 py-3 outline-none focus:border-[#08a9ae]"
          />
        </label>

        <label className="grid gap-2 text-sm font-bold text-[#082f63]">
          E-posta
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="rounded-2xl border border-[#082f6320] px-4 py-3 outline-none focus:border-[#08a9ae]"
          />
        </label>

        <label className="grid gap-2 text-sm font-bold text-[#082f63]">
          Telefon
          <input
            name="phone"
            autoComplete="tel"
            className="rounded-2xl border border-[#082f6320] px-4 py-3 outline-none focus:border-[#08a9ae]"
          />
        </label>

        <label className="grid gap-2 text-sm font-bold text-[#082f63]">
          {sponsor ? "Kurum / firma" : "Şehir"}
          <input
            name="organization"
            className="rounded-2xl border border-[#082f6320] px-4 py-3 outline-none focus:border-[#08a9ae]"
          />
        </label>
      </div>

      <label className="mt-5 grid gap-2 text-sm font-bold text-[#082f63]">
        {sponsor
          ? "İş birliği düşünceniz"
          : "Katkı sunmak istediğiniz alan"}
        <textarea
          required
          name="message"
          rows={5}
          className="rounded-2xl border border-[#082f6320] px-4 py-3 outline-none focus:border-[#08a9ae]"
        />
      </label>

      <button
        disabled={status.kind === "loading"}
        className="mt-6 rounded-full bg-[#082f63] px-7 py-4 font-bold text-white disabled:cursor-not-allowed disabled:opacity-60"
        type="submit"
      >
        {status.kind === "loading"
          ? "Gönderiliyor..."
          : sponsor
            ? "Görüşme talebi gönder"
            : "Gönüllü başvurusu gönder"}
      </button>

      {status.kind !== "idle" && status.message && (
        <p
          className={`mt-5 rounded-2xl p-4 text-sm font-bold ${
            status.kind === "success"
              ? "bg-[#08a9ae12] text-[#08676b]"
              : status.kind === "error"
                ? "bg-[#ef4e5512] text-[#a22731]"
                : "bg-[#082f6308] text-[#082f63]"
          }`}
          aria-live="polite"
        >
          {status.message}
        </p>
      )}
    </form>
  );
}

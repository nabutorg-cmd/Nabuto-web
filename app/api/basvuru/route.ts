import { NextResponse } from "next/server";

type FormPayload = {
  type?: string;
  name?: string;
  email?: string;
  phone?: string;
  organization?: string;
  message?: string;
};

function clean(value: unknown, max = 1000) {
  return String(value ?? "").trim().slice(0, max);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as FormPayload;

    const type = clean(body.type, 50);
    const name = clean(body.name, 120);
    const email = clean(body.email, 160);
    const phone = clean(body.phone, 60);
    const organization = clean(body.organization, 180);
    const message = clean(body.message, 3000);

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, message: "Lütfen zorunlu alanları doldurun." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "info@nabuto.org";
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "NABUTO Web <onboarding@resend.dev>";

    if (!apiKey) {
      return NextResponse.json(
        {
          ok: false,
          configured: false,
          message:
            "Form hazır ancak e-posta bağlantısı henüz etkinleştirilmedi.",
        },
        { status: 503 }
      );
    }

    const subjectMap: Record<string, string> = {
      gonullu: "Yeni gönüllü başvurusu",
      sponsor: "Yeni sponsorluk görüşme talebi",
      iletisim: "Yeni iletişim mesajı",
    };

    const subject = subjectMap[type] || "NABUTO web sitesi yeni mesajı";

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject,
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6;color:#082f63">
            <h2>${subject}</h2>
            <p><strong>Ad soyad:</strong> ${name}</p>
            <p><strong>E-posta:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${phone || "-"}</p>
            <p><strong>Kurum / Şehir:</strong> ${organization || "-"}</p>
            <p><strong>Mesaj:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Resend error:", errorText);
      return NextResponse.json(
        { ok: false, message: "Mesaj gönderilemedi. Lütfen tekrar deneyin." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Başvurunuz başarıyla alındı. Teşekkür ederiz.",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, message: "Beklenmeyen bir hata oluştu." },
      { status: 500 }
    );
  }
}

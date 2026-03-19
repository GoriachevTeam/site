import { google } from "googleapis";

async function appendToSheet(
  data: {
    name: string;
    phone: string;
    service: string;
  },
  date: string,
) {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
    range: `${process.env.SHEET_NAME}!A:D`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[date, data.name, data.phone, data.service]],
    },
  });
}

async function sendTelegramMessage(
  data: {
    name: string;
    phone: string;
    service: string;
    date: string;
  },
  date: string,
) {
  const text = `
🆕 *Нова заявка*

📋 *Послуга:* ${data.service}
👤 *Ім'я:* ${data.name}
📞 *Телефон:* ${data.phone}
🕐 *Дата:* ${date}
  `.trim();

  await fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text,
        parse_mode: "Markdown",
      }),
    },
  );
}

export async function POST(req: Request) {
  const { token, ...formData } = await req.json();

  const res = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    { method: "POST" },
  );

  const data = await res.json();

  if (!data.success || data.score < 0.5) {
    return Response.json({ success: false });
  }

  try {
    const now = new Date();
    const date = now
      .toLocaleString("uk-UA", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
      .replace(",", "");

    await appendToSheet(formData, date);
    await sendTelegramMessage({ ...formData }, date);

    return Response.json({ success: true });
  } catch (error) {
    console.error("Sheets error:", error);
    return Response.json({ success: false, error: "Failed to save data" });
  }
}

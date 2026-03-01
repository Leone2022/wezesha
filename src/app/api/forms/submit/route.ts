import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const ADMIN_EMAIL = "admin@wezeshaindustries.com";

const submitSchema = z.object({
  formType: z.enum(["contact", "volunteer", "newsletter"]),
  data: z.record(z.string(), z.unknown()),
});

const formTitles: Record<z.infer<typeof submitSchema>["formType"], string> = {
  contact: "Contact Form",
  volunteer: "Volunteer Application",
  newsletter: "Newsletter Subscription",
};

function titleCase(value: string): string {
  return value
    .replace(/_/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

function formatValue(value: unknown): string {
  if (value === null || value === undefined) {
    return "N/A";
  }

  if (typeof value === "string") {
    return value.trim() || "N/A";
  }

  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }

  return JSON.stringify(value);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildEmailContent(formType: z.infer<typeof submitSchema>["formType"], data: Record<string, unknown>) {
  const rows = Object.entries(data).map(([key, value]) => {
    return {
      label: titleCase(key),
      value: formatValue(value),
    };
  });

  const heading = formTitles[formType];
  const text = [`New ${heading} Submission`, "", ...rows.map((row) => `${row.label}: ${row.value}`)].join("\n");

  const htmlRows = rows
    .map(
      (row) =>
        `<tr><td style=\"padding:8px;border:1px solid #e5e5e5;font-weight:600;\">${escapeHtml(row.label)}</td><td style=\"padding:8px;border:1px solid #e5e5e5;\">${escapeHtml(row.value)}</td></tr>`
    )
    .join("");

  const html = `
    <div style="font-family:Arial,sans-serif;color:#171717;line-height:1.5;">
      <h2 style="margin:0 0 12px;">New ${escapeHtml(heading)} Submission</h2>
      <table style="border-collapse:collapse;width:100%;max-width:700px;">
        <tbody>
          ${htmlRows}
        </tbody>
      </table>
    </div>
  `;

  return { text, html };
}

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const portRaw = process.env.SMTP_PORT ?? "587";
  const secureRaw = process.env.SMTP_SECURE;

  if (!host || !user || !pass) {
    return null;
  }

  const hasPlaceholderValues =
    host.includes("your-provider.com") ||
    user.includes("your-smtp-user") ||
    pass.includes("your-smtp-password");

  if (hasPlaceholderValues) {
    return null;
  }

  const port = Number(portRaw);

  if (Number.isNaN(port)) {
    return null;
  }

  const secure = secureRaw ? secureRaw.toLowerCase() === "true" : port === 465;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
    auth: {
      user,
      pass,
    },
  });
}

export async function POST(request: Request) {
  const parsedBody = submitSchema.safeParse(await request.json());

  if (!parsedBody.success) {
    return NextResponse.json({ error: "Invalid form payload." }, { status: 400 });
  }

  const transporter = getTransporter();

  if (!transporter) {
    return NextResponse.json(
      { error: "Mail service is not configured. Please set SMTP environment variables." },
      { status: 500 }
    );
  }

  const { formType, data } = parsedBody.data;
  const fromEmail = process.env.SMTP_FROM ?? process.env.SMTP_USER;

  if (!fromEmail) {
    return NextResponse.json({ error: "SMTP_FROM or SMTP_USER is required." }, { status: 500 });
  }

  const recipient = process.env.FORMS_RECIPIENT_EMAIL ?? ADMIN_EMAIL;
  const subject = `Wezesha Website: ${formTitles[formType]}`;
  const { text, html } = buildEmailContent(formType, data);

  const replyToValue = data.email;
  const replyTo = typeof replyToValue === "string" && replyToValue.trim() ? replyToValue.trim() : undefined;

  try {
    await transporter.sendMail({
      from: fromEmail,
      to: recipient,
      subject,
      text,
      html,
      replyTo,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}

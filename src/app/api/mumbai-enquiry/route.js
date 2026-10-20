import nodemailer from "nodemailer";

export const runtime = "nodejs";

const services = new Set([
  "Software development", "Digital marketing", "Website development",
  "Mobile app development", "CRM or ERP development", "Branding and creative",
  "Marketing and software",
]);

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ success: false, message: "Please submit a valid enquiry." }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return Response.json({ success: false, message: "Please submit a valid enquiry." }, { status: 400 });
  }

  const fields = {};
  for (const [key, limit] of Object.entries({ name: 120, email: 254, company: 250, service: 100, description: 5000 })) {
    const value = body[key] ?? "";
    if (typeof value !== "string" || value.length > limit) {
      return Response.json({ success: false, message: "Please check your form details and field lengths." }, { status: 400 });
    }
    fields[key] = value.trim();
  }

  const { name, email, company, service, description } = fields;
  if (!name || !company || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || /[\r\n]/.test(name) || !services.has(service)) {
    return Response.json({ success: false, message: "Please enter your name, valid work email, company or website, and service needed." }, { status: 400 });
  }

  const smtpEmail = process.env.MUMBAI_SMTP_EMAIL || process.env.SMTP_EMAIL;
  const smtpPassword = process.env.MUMBAI_SMTP_PASSWORD || process.env.SMTP_PASSWORD;
  if (!smtpEmail || !smtpPassword) {
    return Response.json({ success: false, message: "Enquiries are temporarily unavailable. Please contact mumbai@accoladesmedia.co.in." }, { status: 503 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: { user: smtpEmail, pass: smtpPassword },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 20000,
    });
    const rows = [["Name", name], ["Work email", email], ["Company or website", company], ["Service needed", service], ["Project description", description || "Not provided"]];
    await transporter.sendMail({
      from: { name: "Accolades Mumbai Website", address: smtpEmail },
      to: process.env.MUMBAI_ENQUIRY_TO || "leadsaccolades@gmail.com",
      cc: process.env.MUMBAI_ENQUIRY_CC || "mumbai@accoladesmedia.co.in",
      replyTo: { name, address: email },
      subject: `Mumbai Project Enquiry — ${service}`,
      text: `New project enquiry from the Mumbai page\n\n${rows.map(([label, value]) => `${label}: ${value}`).join("\n\n")}`,
      html: `<h2>Mumbai Project Enquiry</h2>${rows.map(([label, value]) => `<p><strong>${label}:</strong><br />${escapeHtml(value).replace(/\r?\n/g, "<br />")}</p>`).join("")}`,
    });
    return Response.json({ success: true, message: "Your project enquiry has been sent." });
  } catch (error) {
    console.error("Mumbai enquiry delivery failed:", error.code || "MAIL_DELIVERY_FAILED");
    return Response.json({ success: false, message: "Unable to send your enquiry. Please try again or email mumbai@accoladesmedia.co.in." }, { status: 500 });
  }
}

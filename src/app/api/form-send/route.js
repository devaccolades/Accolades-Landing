import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const position = formData.get("position");
    const termsAccepted = formData.get("termsAccepted");
    const file = formData.get("file");

    let attachments = [];

    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
        contentType: file.type,
      });
    }

    // const { firstName, lastName, email, phone, position, termsAccepted } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Accolades Careers" <${process.env.SMTP_EMAIL}>`,
      to: "career.accolades@gmail.com",
      subject: "New Job Application",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #008080;">New Job Application</h2>
          <p><strong>First Name:</strong> ${firstName}</p>
          <p><strong>Last Name:</strong> ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Applied Position:</strong> ${position}</p>
          <p><strong>Agreed to Terms:</strong> ${
            termsAccepted ? "Yes" : "No"
          }</p>
          </div>
          `,
      attachments,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Application send error:", error);
    return Response.json(
      { success: false, message: "Failed to send application." },
      { status: 500 }
    );
  }
}

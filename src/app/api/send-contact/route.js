import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { fullName, whatsapp, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Accolades Website" <${process.env.SMTP_EMAIL}>`,
      to: "leadsaccolades@gmail.com",
      // to: "manjima.accolades@gmai.com",
      cc: [
        // "manjima.accolades@gmail.com",
        "mail@accoladesintegrated.com",
      ],
      subject: "New Contact Form Submission Accolades Website",
      html: `
  <div style="font-family: Arial, sans-serif; padding: 20px;">
    <h2 style="color: #008080;">New Contact Message</h2>
    <p><strong>Full Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Whatsapp:</strong> ${whatsapp}</p>
    <p style="margin-top: 10px;"><strong>Message:</strong></p>
    <div style="background-color: #f1f1f1; padding: 10px; border-left: 4px solid #008080;">
      ${message}
    </div>
  </div>
`,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({
      success: true,
      message: "Contact email sent successfully!",
    });
  } catch (error) {
    console.error("Email send error:", error);
    return Response.json(
      { success: false, message: "Failed to send contact email." },
      { status: 500 },
    );
  }
}

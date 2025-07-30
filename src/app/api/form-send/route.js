import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { firstName, lastName, email, phone, position, termsAccepted } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Accolades Careers" <${process.env.SMTP_EMAIL}>`,
      to: "manjimanm001@gmail.com",
      subject: "New Job Application",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #008080;">New Job Application</h2>
          <p><strong>First Name:</strong> ${firstName}</p>
          <p><strong>Last Name:</strong> ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Applied Position:</strong> ${position}</p>
          <p><strong>Agreed to Terms:</strong> ${termsAccepted ? "Yes" : "No"}</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, message: "Application email sent successfully!" });
  } catch (error) {
    console.error("Application send error:", error);
    return Response.json({ success: false, message: "Failed to send application." }, { status: 500 });
  }
}

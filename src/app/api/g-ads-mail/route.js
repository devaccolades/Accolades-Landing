import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, service } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Accolades Website" <${process.env.SMTP_EMAIL}>`,
      // to: "leadsaccolades@gmail.com",
      to: "manjima.accolades@gmail.com",
      subject: "New Form Submission From Google Ads Page",
      html: `
        <h3> Form Details</h3>
        <p><strong>Name:</strong> ${name || "N/A"}</p>
        <p><strong>Email:</strong> ${email || "N/A"}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Service:</strong> ${service || "N/A"}</p>
      `,

      if(message) {
        htmlContent += `<p><strong>Message:</strong> ${message}</p>`;
      },
    };

    await transporter.sendMail(mailOptions);
    return Response.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Email send error:", error);
    return Response.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }
}

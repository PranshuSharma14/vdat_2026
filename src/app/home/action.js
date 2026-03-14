"use server";
import nodemailer from "nodemailer";

export async function submitMessage(data) {
  try {
    const { fullName, email, subject, message, phone } = data;

    if (!fullName || !email || !subject || !message) {
      return { message: "Please fill all fields", error: true };
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: "2023csb1108@iitrpr.ac.in",
      subject: `Contact Form Submission: ${subject}`,
      html: `
        <h3>Contact Form Submission</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not Provided"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    
    return { message: "Message sent successfully!", error: false };
  } catch (error) {
    console.error("Email Error:", error);
    return { message: "Failed to send message", error: true };
  }
}

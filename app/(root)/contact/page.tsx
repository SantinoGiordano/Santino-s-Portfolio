

import ContactForm from "@/components/MailForm";
import nodemailer from "nodemailer";

type MailPayload = {
  email: string;
  message: string;
  subject?: string;
  name?: string;
};

const sendMail = async ({ email, message, subject, name }: MailPayload) => {
  "use server";
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SNTP_USERNAME,
        pass: process.env.SNTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.MAIL_RECEIVER_ADRESS,
      subject: subject || `New message from ${name || "Contact Form"}`,
      text: `
        Name: ${name || "N/A"}
        Email: ${email}
        Subject: ${subject || "No subject"}
        Message:
        ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true, error: null };
  } catch (error: unknown) {
    console.error("Error sending email:", error);

    return {
      success: false,
      error: error && typeof error === "object" && "message" in error
        ? (error as { message?: string }).message || "Failed to send email"
        : "Failed to send email",
    };
  }
};

export default function Contact() {
  return (
   <div className="p-10 bg-gradient-to-br from-black via-gray-900 to-black min-h-screen flex items-center justify-center px-4 pt-20">
      <ContactForm sendMail={sendMail} />
    </div>
  );
}

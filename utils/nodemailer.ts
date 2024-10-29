import nodemailer from "nodemailer";

interface MailData {
  name: string;
  email: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASSWORD,
  },
});

export const sendMail = async ({ name, email, message }: MailData) => {
  const info = await transporter.sendMail({
    from: email,
    to: process.env.USER_EMAIL,
    subject: `Digihounds | New message from ${name}`,
    text: message,
  });

  console.log("Message sent: %s", info.messageId);
};

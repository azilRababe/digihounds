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
    html: `
    <p>${message}</p>
    <img src="cid:kitty2.0" alt="Excuse me!" />
  `,
    attachments: [
      {
        filename: "cuteKitty.gif",
        path: "public/images/kitty.gif",
        cid: "kityy2.0",
      },
    ],
  });

  console.log("Message sent: %s", info.messageId);
};

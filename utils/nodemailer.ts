import nodemailer from "nodemailer";

export const sendEmail = async (
  name: string,
  email: string,
  message: string
) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD,
    },
  });

  let mailOptions = {
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
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.log("Error: ", error);
  }
};

import nodemailer from "nodemailer";

export const sendEmail = (name: string, email: string, message: string) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  let mailOptions = {
    from: email,
    to: process.env.EMAIL,
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

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });
};

import { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "@/utils/nodemailer";

export default async function contactHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    try {
      await sendEmail(name, email, message);
      res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
      res.status(500).json({ error: `Failed to send message | ${error}` });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DIGIHOUNDS | DIGITAL MARKETING AGENCY",
  description:
    "We are a digital marketing agency that specializes in SEO, PPC, and social media marketing. We help businesses grow their online presence and increase their revenue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}

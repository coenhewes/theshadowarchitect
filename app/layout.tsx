import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shadow Architect Consulting | Maximum Influence Psychology",
  description: "Boutique consultancy implementing the most sophisticated influence frameworks for businesses. Transform decision-making environments through advanced psychological architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

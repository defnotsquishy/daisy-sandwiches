import type { Metadata } from "next";
import "./globals.css";
import { StructuredData } from "@/components/site/structured-data";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://daisy-sandwiches-godalming.nathanyu2010.chatgpt.site",
  ),
  title: {
    default: "Daisy Sandwiches | Fresh Sandwiches & Catering in Godalming",
    template: "%s | Daisy Sandwiches",
  },
  description:
    "Fresh sandwiches, coffee, homemade cakes and catering from Daisy Sandwiches at Godalming Station.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Daisy Sandwiches",
    title: "Daisy Sandwiches | Fresh Sandwiches & Catering in Godalming",
    description:
      "Fresh sandwiches, coffee, homemade cakes and catering from Daisy Sandwiches at Godalming Station.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        {children}
        <StructuredData />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),
  title: {
    default: "Dagim | Portfolio",
    template: "%s | Dagim",
  },
  description: "Software Engineer portfolio: projects, bio and contact.",
  icons: {
    icon: [
      { url: "img/favicon.ico" },
      { url: "img/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "img/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "img/apple-touch-icon.png",
  },
  openGraph: {
    title: "Dagim | Portfolio",
    description: "Projects, bio and contact.",
    url: "https://your-domain.com",
    siteName: "Dagim Portfolio",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dagim | Portfolio",
    description: "Projects, bio and contact.",
    images: ["/og.png"],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} relative bg-[#09090B]`}>
        {/* Background overlay */}
        <div
          className="fixed inset-0 z-0
                     bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
                     from-cyan-400/10 via-[#09090B] to-[#09090B]
                     pointer-events-none"
        />

        {/* Content */}
        <main className="relative z-10 container">{children}</main>
      </body>
    </html>
  );
}

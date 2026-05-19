import type { Metadata } from "next";
import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import Navbar from "@/components/Navbar";
import { MantineProvider } from "@mantine/core";

export const metadata: Metadata = {
  title: "Elma🪐Events",
  description: "Організація незабутніх подій",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        <MantineProvider>
          <Navbar />
          <main className="pt-16">{children}</main>
        </MantineProvider>
      </body>
    </html>
  );
}

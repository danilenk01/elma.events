import type { Metadata } from "next";
import "./globals.css";
import "@mantine/core/styles.css";
import Navbar from "@/components/Navbar";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import { theme } from "@/theme";

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
    <html lang="uk" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          {/* <Navbar /> */}
          <main className="pt-16">{children}</main>
        </MantineProvider>
      </body>
    </html>
  );
}

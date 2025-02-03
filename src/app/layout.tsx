import "@mantine/core/styles.css";

import {
  ColorSchemeScript,
  Container,
  MantineProvider,
  Space,
  mantineHtmlProps,
} from "@mantine/core";
import { Header } from "@/components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  creator: "Wendell Kenneddy",
  icons: [
    { rel: "icon", url: "/favicon.ico", sizes: "any" },
    { rel: "icon", url: "/icon64.svg", type: "image/svg+xml" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png", type: "image/png" },
  ],
  other: { "theme-color": "#1f1f1f" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>

      <body>
        <MantineProvider theme={{ primaryColor: "teal" }} defaultColorScheme="dark">
          <Header />

          <Space h="xl" />

          <Container fluid p={0} maw={1024}>
            {children}
          </Container>

          <Space h="xl" />
        </MantineProvider>
      </body>
    </html>
  );
}

import "@mantine/core/styles.css";

import {
  ColorSchemeScript,
  Container,
  MantineProvider,
  Space,
  mantineHtmlProps,
} from "@mantine/core";
import { Header } from "@/components/header";

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

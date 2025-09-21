"use client";

import { Container, CssBaseline } from "@mui/material";

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <Container sx={{ py: 3, position: "relative" }}>
          {children} {modal}
        </Container>
      </body>
    </html>
  );
}

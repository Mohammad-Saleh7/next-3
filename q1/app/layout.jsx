import DrawerAppBar from "@/components/Nav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DrawerAppBar />
        {children}
      </body>
    </html>
  );
}

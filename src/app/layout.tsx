import "./globals.css";
import { PlusJakartaSans } from "../styles/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={PlusJakartaSans.className}>{children}</body>
    </html>
  );
}

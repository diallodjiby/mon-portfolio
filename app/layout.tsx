import "./globals.css";
import Navbar from "@/components/navbar";
import { LanguageProvider } from "@/lib/LanguageContext";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
      <LanguageProvider>
        <Navbar />
        {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

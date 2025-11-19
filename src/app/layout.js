import "./globals.css";
import { Poppins } from "next/font/google";
import { Great_Vibes } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
});

export const metadata = {
  title: "Barber Shop - Seus Especialistas em Estilo",
  description:
    "Barbearia de alta qualidade com profissionais experientes e serviços dedicados ao seu sucesso pessoal.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${poppins.className} ${greatVibes.variable}`}>
      <body>{children}</body>
    </html>
  );
}

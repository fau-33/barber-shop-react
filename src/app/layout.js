import "./globals.css";

export const metadata = {
  title: "Barber Shop",
  description: "Barber Shop corte de cabelo e barba",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Lexend, Nanum_Myeongjo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const nanumMyeongjo = Nanum_Myeongjo({
  weight: ['400', '700'],
  style: ['normal'],
  variable: "--font-nanum-myeongjo",
  subsets: ["latin"],
});

const lexend = Lexend({
  weight: ['400', '700'],
  style: ['normal'],
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bruna Laprovitera | Psicóloga Clínica – Atendimento Online e Acolhimento Profissional",
  description:
    "Psicóloga clínica especializada em ansiedade, depressão, estresse, autoconhecimento e apoio emocional. Atendimento online com acolhimento, sigilo e profissionalismo para ajudar você a viver com mais equilíbrio e bem-estar.",
  keywords: [
    "psicóloga",
    "psicóloga online",
    "terapia online",
    "terapia",
    "atendimento psicológico online",
    "atendimento psicológico",
    "ansiedade",
    "depressão",
    "autoconhecimento",
    "saúde mental",
    "psicoterapia",
    "psicoterapia online",
    "psicologia clínica",
    "Bruna Laprovitera",
    "Bruna Arruda Laprovitera",
    "Laprovitera",
    "terapia cognitivo comportamental",
    "tcc",
    "terapia comportamental dialética",
    "dbt",
  ],
  authors: [{ name: "Bruna Laprovitera" }],
  creator: "Bruna Laprovitera",
  publisher: "Bruna Laprovitera",
  metadataBase: new URL("https://seudominio.com"),
  openGraph: {
    title: "Bruna Laprovitera | Psicóloga Clínica",
    description:
      "Acolhimento profissional para ansiedade, depressão, estresse e desenvolvimento emocional. Terapia online com conforto e sigilo.",
    url: "https://seudominio.com",
    siteName: "Bruna Laprovitera – Psicóloga Clínica",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruna Laprovitera | Psicóloga Clínica",
    description:
      "Psicóloga clínica especializada em saúde emocional. Atendimento online com sigilo, acolhimento e profissionalismo.",
  },
};

async function getNavData() {
  return {
    links: [
      { label: 'Início', href: '#' },
      { label: 'Serviços', href: '#especialidades' },
      { label: 'Sobre Mim', href: '#sobre' },
      { label: 'Abordagens', href: '#abordagens' },
      { label: 'Próximo Passo', href: '#cta' },
    ],
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const navData = await getNavData();

  return (
    <html lang="pt-br">
      <body
        className={`${nanumMyeongjo.variable} ${lexend.variable} antialiased`}
      >
        <Navbar links={navData.links} />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
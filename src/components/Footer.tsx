import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, FileText } from "lucide-react";
import logo from '../../public/Logo Bruna.svg';
import logo2 from '../../public/Logo Bruna2.svg';

async function getFooterData() {
    return [
        {
            icon: <Instagram size={28} />,
            link: 'https://www.instagram.com/psibrunalaprovitera/',
            label: 'Siga no Instagram'
        },
        {
            icon: <Linkedin size={28} />,
            link: 'https://www.linkedin.com/in/bruna-laprovitera-710072245/',
            label: 'Conecte-se no Linkedin'
        },
        {
            icon: <FileText size={28} />,
            link: 'https://buscatextual.cnpq.br/buscatextual/busca.do',
            label: 'Currículo Lattes'
        },
    ]
}

export default async function Footer() {
    const footerData = await getFooterData();

    return (
        <footer className="bg-dark-gray-azure pt-16 pb-8 px-6 text-center">
            <Link href="#inicio" className="relative inline-block mb-8 group h-16 w-16 mx-auto">
                <Image
                    src={logo}
                    fill
                    className="object-contain transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                    alt="Logo Bruna Laprovitera"
                />
                <Image
                    src={logo2}
                    fill
                    className="object-contain opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                    alt="Logo Bruna Laprovitera Alternativa"
                />
            </Link>

            <nav
                className="flex justify-center gap-8 border-t border-white/10 pt-10 mb-10 max-w-md mx-auto"
                aria-label="Links das redes sociais"
            >
                {footerData.map((social, index) => (
                    <Link
                        href={social.link}
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light-gray hover:text-pastel-gray-orange -translate-y-0 hover:-translate-y-2 transition-all duration-300"
                        aria-label={social.label}
                    >
                        {social.icon}
                    </Link>
                ))}
            </nav>

            <div className="flex flex-col gap-2 text-xs md:text-sm text-light-gray/60 font-lexend">
                <p>&copy; {new Date().getFullYear()} Bruna Laprovitera • Psicóloga Clínica</p>
                <p>
                    Desenvolvido por{" "}
                    <Link
                        href="https://portfoliojoaopedro-tan.vercel.app/"
                        target="_blank"
                        className="text-light-gray hover:text-pastel-gray-orange underline underline-offset-4 transition-colors"
                    >
                        João Pedro Mergulhão
                    </Link>
                </p>
            </div>
        </footer>
    );
}
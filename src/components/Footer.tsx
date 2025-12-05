import Image from "next/image";
import Link from "next/link";
import logo from '../../public/Logo clara.png';
import instagram from '../../public/instagram.png';
import linkedin from '../../public/linkedin.png';
import curriculo from '../../public/curriculo.png';

async function getFooterData() {
    return [
        {
            icon: instagram,
            link: 'https://www.instagram.com/psibrunalaprovitera/',
            alt: 'Instagram'
        },
        {
            icon: linkedin,
            link: 'https://www.linkedin.com/in/bruna-laprovitera-710072245/',
            alt: 'Linkedin'
        },
        {
            icon: curriculo,
            link: 'https://buscatextual.cnpq.br/buscatextual/busca.do',
            alt: 'Lattes'
        },
    ]
}

export default async function Footer() {

    const footerData = await getFooterData();

    return (
        <footer className="bg-primary-dark p-4 md:p-20 pb-4! text-center">
            <Image
                src={logo}
                className="size-16 mx-auto mb-6"
                alt="Logo Bruna Laprovitera"
            />

            <div
                className="
            flex justify-center gap-6 border-b-2 border-secondary 
            pb-8 mt-3 mb-8 mx-auto max-w-md
        "
            >
                {footerData.map((data, index) => (
                    <Link href={data.link} key={index} target="_blank">
                        <Image
                            src={data.icon}
                            alt={data.alt}
                            className="size-10 hover:-translate-y-1 transition"
                        />
                    </Link>
                ))}
            </div>

            <div className="flex flex-col gap-1 text-sm text-secondary">
                <span>&copy; 2026 Bruna Laprovitera</span>

                <span>
                    Desenvolvido por{" "}
                    <Link
                        href="https://portfoliojoaopedro-tan.vercel.app/"
                        target="_blank"
                        className="underline hover:text-primary-light transition"
                    >
                        João Pedro Mergulhão
                    </Link>
                </span>
            </div>

        </footer>
    )
}

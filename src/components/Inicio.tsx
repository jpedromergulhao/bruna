import Link from "next/link"
import { ReactNode } from "react"

interface CtaProps {
    label: string,
    number: string,
    message: string
}

interface InicioProps {
    cta: CtaProps
}

export default function Inicio({ cta }: InicioProps): ReactNode {

    const whatsappLink: string = `https://wa.me/${cta.number}?text=${encodeURIComponent(cta.message)}`;

    return (
        <section
            id="#"
            className="w-full min-h-screen bg-[url('/background2.png')] bg-cover bg-[position:80%_center] md:bg-center flex items-center px-2 md:px-20 lg:px-30 py-20"
        >
            <div
                data-aos="fade-up"
                data-aos-duration="1500"
                className="flex flex-col gap-5 w-full max-w-2xl 
                p-6 md:p-8 rounded-lg bg-black/55 text-light-gray 
                shadow-[0_0_150px_50px_rgba(0,0,0,0.7)]"
            >
                <h1 className="text-3xl md:text-5xl italic tracking-tight leading-tight">
                    Um espaço seguro para compreender suas emoções e encontrar equilíbrio.
                </h1>

                <p className="text-base md:text-lg opacity-90">
                    Acolhimento clínico fundamentado em TCC, ACT e DBT para ajudar você a enfrentar desafios emocionais com mais clareza, suporte e cuidado.
                </p>

                <Link
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" px-10 py-4 
        bg-pastel-gray-orange 
        text-dark-gray-azure 
        text-xs font-bold uppercase tracking-[0.2em] 
        rounded-full 
        shadow-[0_10px_20px_-10px_rgba(216,164,143,0.5)] 
        hover:bg-dark-gray-azure hover:text-light-orange hover:shadow-none 
        hover:-translate-y-0.5
        transition-all duration-500 
        w-full md:w-fit text-center 
        cursor-pointer
    "
                >
                    {cta.label}
                </Link>
            </div>
        </section>
    )
}
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
            className="w-full max-h-screen bg-[url('/background.jpeg')] bg-cover bg-center px-30 py-50"
        >
            <div className="flex flex-col gap-5 max-w-2xl 
    p-8 rounded-lg 
    bg-black/55
    shadow-[0_0_250px_100px_rgba(0,0,0,0.8)]">
                <h1 className="text-5xl italic tracking-tight">
                    Um espaço seguro para compreender suas emoções e encontrar equilíbrio.
                </h1>

                <p className="text-lg">
                    Acolhimento clínico fundamentado em TCC, ACT e DBT para ajudar você a enfrentar desafios emocionais com mais clareza, suporte e cuidado.
                </p>

                <Link
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-2 bg-primary text-sm w-fit rounded-2xl hover:bg-primary-light transition cursor-pointer"
                >
                    {cta.label}
                </Link>
            </div>
        </section>
    )
}
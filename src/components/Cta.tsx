import Link from "next/link";
import { ReactNode } from "react";

interface CtaProps {
    label: string,
    number: string,
    message: string,
}

interface CtaComponenteProps {
    cta: CtaProps
}

export default function Cta({ cta }: CtaComponenteProps): ReactNode {

    const whatsappLink: string = `https://wa.me/${cta.number}?text=${encodeURIComponent(cta.message)}`;

    return (
        <section id="cta" className="p-20 bg-primary text-center">
            <h3
                className="text-3xl font-bold mb-2"
            >
                Dê o primeiro passo para cuidar de você:
                <br></br>
                <span className="text-primary-dark italic font-normal"> agende sua primeira sessão</span>
            </h3>

            <p
                className="text-sm text-center max-w-1/2 mx-auto mb-8"
            >
                Na primeira sessão, você terá um espaço seguro para falar sobre o que está vivendo.
                Vamos entender suas necessidades, seus objetivos e decidir juntos o caminho terapêutico
                mais adequado para você, com acolhimento, clareza e sem pressa.
            </p>

            <Link
                href={whatsappLink}
                className="px-15 py-3 bg-primary-dark text-sm w-fit rounded-2xl hover:bg-primary-light transition cursor-pointer"
            >
                {cta.label}
            </Link>
        </section>
    )
}
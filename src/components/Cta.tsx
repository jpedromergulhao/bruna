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
        <section
            id="cta"
            className="py-20 px-6 md:px-20 bg-gray-azure text-center text-light-gray"
        >
            <div
                data-aos="fade-up"
                data-aos-duration="1500"
                className="max-w-4xl mx-auto flex flex-col items-center gap-6"
            >
                <h2 className="text-3xl md:text-4xl font-bold leading-tight font-nanum-myeongjo">
                    Dê o primeiro passo para cuidar de você:
                    <span className="block text-light-orange italic font-normal mt-2">
                        agende sua primeira sessão
                    </span>
                </h2>

                <p className="text-base md:text-lg opacity-90 max-w-2xl font-lexend leading-relaxed">
                    Na primeira sessão, você terá um espaço seguro para falar sobre o que está vivendo.
                    Vamos entender suas necessidades e objetivos para decidirmos juntos o caminho
                    terapêutico mais adequado.
                </p>

                <Link
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        mt-4 px-12 py-4 
                        bg-dark-gray-azure text-light-orange
                        text-sm font-bold uppercase tracking-widest
                        rounded-full border border-white/10
                        hover:bg-light-orange hover:text-dark-gray-azure 
                        transition-all duration-500 shadow-xl
                        w-full md:w-fit
                    "
                >
                    {cta.label}
                </Link>
            </div>
        </section>
    );
}
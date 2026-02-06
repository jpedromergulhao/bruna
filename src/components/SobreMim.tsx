import Image from "next/image";
import Foto from '../../public/smartphone.svg';

interface SobreMimProps {
    name: string,
    crp: string,
}

async function getTextData(name: string, crp: string) {
    return {
        texts: [
            `Sou Dra. ${name}, psicóloga formada pela Universidade Católica de Pernambuco - UNICAP (CRP ${crp}). Atuo oferecendo um acompanhamento acolhedor, ético e baseado em práticas terapêuticas comprovadas.`,
            'Trabalho com Terapia Cognitivo-Comportamental (TCC), Terapia de Aceitação e Compromisso (ACT) e Terapia Comportamental Dialética (DBT), abordagens eficazes para ansiedade, depressão e estresse.',
            'Acredito que buscar apoio psicológico é um passo importante de coragem. Meu compromisso é oferecer um espaço seguro e sem julgamentos para você construir uma vida mais equilibrada.',
        ]
    }
}

export default async function SobreMim({ name, crp }: SobreMimProps) {
    const textData = await getTextData(name, crp);

    return (
        <section
            id="sobre"
            className="py-16 md:py-24 bg-pastel-gray-orange px-6 md:px-20 lg:px-[150px] overflow-hidden"
        >
            <div className="flex flex-col md:flex-row gap-10 lg:gap-20 max-w-7xl mx-auto items-center justify-center">

                <div className="text-dark-gray-azure flex-1 order-2 md:order-1">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 font-nanum-myeongjo italic text-center md:text-left">
                        Sobre Mim
                    </h2>

                    <div
                        data-aos="fade-right"
                        data-aos-duration="1500"
                        className="space-y-6 text-center md:text-left"
                    >
                        {textData.texts.map((text, index) => (
                            <p key={index} className="text-base md:text-lg leading-relaxed font-lexend opacity-90">
                                {text}
                            </p>
                        ))}
                    </div>
                </div>

                <div
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    className="flex-1 order-1 md:order-2 w-full max-w-[280px] md:max-w-xs lg:max-w-sm"
                >
                    <figure className="relative h-full flex items-center justify-center">
                        <Image
                            src={Foto}
                            alt={`Dra. ${name} - Psicóloga Clínica (CRP ${crp})`}
                            priority
                            className="w-full h-auto max-h-[500px] object-contain drop-shadow-2xl transition-transform duration-700 hover:rotate-2"
                        />
                        <figcaption className="sr-only">
                            Foto de perfil da psicóloga Bruna Laprovitera exibida em uma moldura de smartphone.
                        </figcaption>
                    </figure>
                </div>

            </div>
        </section>
    );
}
import Image from "next/image";
import Foto from '../../public/smartphone.png';

interface SobreMimProps {
    name: string,
    crp: string,
}

async function getTextData(name: string, crp: string) {
    return {
        texts: [
            `Sou Dra. ${name} psicóloga formada pela Universidade Católica de Pernambuco - UNICAP (CRP ${crp})  atuo oferecendo um acompanhamento acolhedor, ético e baseado em práticas terapêuticas comprovadas. Trabalho com Terapia Cognitivo-Comportamental (TCC), Terapia de Aceitação e Compromisso (ACT) e Terapia Comportamental Dialética (DBT), abordagens eficazes para ansiedade, depressão, estresse, dificuldades emocionais e padrões de comportamento que impactam o dia a dia.`,
            'Acredito que cada pessoa tem sua própria história e que buscar apoio psicológico é um passo importante de coragem e autocuidado. Por isso, meu compromisso é oferecer um espaço seguro e sem julgamentos, onde você possa compreender suas emoções, fortalecer habilidades e construir uma vida mais leve e equilibrada.',
            'Se você deseja cuidar da sua saúde emocional ou iniciar um processo de autoconhecimento, estou aqui para caminhar ao seu lado com empatia, respeito e profissionalismo.',
        ]
    }
}

export default async function SobreMim({ name, crp }: SobreMimProps) {

    const textData = await getTextData(name, crp);

    return (
        <section id="sobre" className="p-20 bg-primary max-h-screen">
            <div className="flex flex-row gap-10 max-w-2/3 items-center m-auto">
                <div>
                    <h3 className="italic text-5xl font-bold mb-8">Sobre Mim</h3>
                    {textData.texts.map((text, index) => (
                        <p key={index} className="text-sm mt-6">
                            {text}
                        </p>
                    ))}
                </div>
                <Image
                    src={Foto}
                    alt="Foto de Bruna Laprovitera"
                    className="h-full max-w-1/3 rounded-2xl drop-shadow-xl/50"
                />
            </div>
        </section>
    )
}
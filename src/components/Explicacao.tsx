import { ReactNode } from "react";
import { CarouselExplicacao } from "./CarouselExplicacal";

async function getExplicacaoData() {
    return [
        {
            title: 'Terapia Cognitivo‑Comportamental (TCC)',
            description: 'A TCC ajuda você a identificar e transformar padrões de pensamento e comportamento que causam sofrimento. É uma terapia prática, focada em soluções e em desenvolver ferramentas para lidar melhor com ansiedade, depressão, estresse e desafios do dia a dia.',
        },
        {
            title: 'Terapia de Aceitação e Compromisso (ACT)',
            description: 'Na ACT, você aprende a lidar com pensamentos e emoções difíceis sem se prender a eles. A abordagem fortalece sua capacidade de agir de acordo com seus valores, criando mais equilíbrio, presença e qualidade de vida, mesmo diante das dificuldades.',
        },
        {
            title: 'Terapia Comportamental Dialética (DBT)',
            description: 'A DBT é voltada para quem sente emoções muito intensas ou tem dificuldade em controlá-las. Ela combina aceitação e mudança, ensinando habilidades de regulação emocional, mindfulness e melhora nos relacionamentos, trazendo mais estabilidade e bem-estar.',
        },
    ]
}

export default async function Explicacao() {
    const explicacaoData = await getExplicacaoData();

    return (
        <section
            id="abordagens"
            className="py-16 md:py-24 bg-light-gray px-6 md:px-20 lg:px-[150px]"
            aria-labelledby="abordagens-title"
        >
            <h2 id="abordagens-title" className="text-dark-gray-azure text-3xl md:text-4xl font-bold mb-12 text-center font-nanum-myeongjo italic">
                Abordagens Terapêuticas
            </h2>
            <CarouselExplicacao data={explicacaoData} />
        </section>
    )
} 
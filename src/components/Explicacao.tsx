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
        <section id="abordagens" className="p-20 bg-secondary text-center">
            <h3 className="text-primary-dark! italic text-3xl font-bold mb-10">O que é TCC, ACT e DBT?</h3>
            <CarouselExplicacao data={explicacaoData} />
        </section>
    )
}   
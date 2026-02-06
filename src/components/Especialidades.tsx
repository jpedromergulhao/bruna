import { AccordionEspecialidades } from "./AccordionEspecialidades";

async function getEspecialidadesData() {
    return {
        especialidades: [
            {
                title: 'Atendimento Online',
                description:
                    'Sessões realizadas por chamada de vídeo, com a mesma qualidade, sigilo e acolhimento do atendimento presencial. Ideal para quem busca flexibilidade, comodidade e continuidade no cuidado psicológico.',
            },
            {
                title: 'Ansiedade e Estresse',
                description:
                    'Apoio terapêutico para compreender causas, reduzir sintomas e desenvolver estratégias eficazes para lidar com preocupações excessivas, tensão constante e sobrecarga emocional.',
            },
            {
                title: 'Depressão e Desânimo',
                description:
                    'Acompanhamento sensível e profissional para ajudar você a recuperar a motivação, restabelecer o equilíbrio emocional e construir confiança no seu processo de cura.',
            },
            {
                title: 'Autoconhecimento e Desenvolvimento Emocional',
                description:
                    'Trabalho terapêutico voltado a ampliar sua compreensão sobre si, seus padrões e suas necessidades, fortalecendo autoestima, limites pessoais e escolhas mais conscientes.',
            },
            {
                title: 'Relacionamentos e Comunicação',
                description:
                    'Apoio para desenvolver vínculos mais saudáveis, melhorar a comunicação e compreender conflitos emocionais que impactam relações familiares, afetivas e profissionais.',
            },
            {
                title: 'Apoio em Momentos de Mudança',
                description:
                    'Acompanhamento durante fases desafiadoras, como luto, transições de carreira, término de relacionamento ou mudanças importantes na vida.',
            },
        ],
    };
}

export default async function Especialidades() {

    const especData = await getEspecialidadesData();

    return (
        <section
            id="especialidades"
            className="py-16 md:py-24 bg-dark-gray-azure px-6 md:px-20 lg:px-[150px]"
        >
            <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
                <div className="w-full text-light-gray text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl mb-10 font-nanum-myeongjo">
                        Meus Serviços
                    </h2>
                    <AccordionEspecialidades especialidades={especData.especialidades} />
                </div>
            </div>
        </section>
    )
}
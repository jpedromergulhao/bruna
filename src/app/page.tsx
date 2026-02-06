import Cta from "@/components/Cta";
import Especialidades from "@/components/Especialidades";
import Explicacao from "@/components/Explicacao";
import Inicio from "@/components/Inicio";
import SobreMim from "@/components/SobreMim";

async function getHomeData() {
  return {
    name: 'Bruna Arruda Laprovitera',
    crp: '02/32980',
    cta: {
      label: 'Falar comigo',
      number: '+5581991999249',
      message: 'Olá Bruna, vim pelo site e gostaria de agendar uma sessão com você. Poderia me passar mais detalhes?',
    },
  };
}

export default async function Home() {

  const homeData = await getHomeData();

  return (
    <>
      <Inicio cta={homeData.cta} />
      <Especialidades />
      <SobreMim name={homeData.name} crp={homeData.crp} />
      <Explicacao />
      <Cta cta={homeData.cta} />
    </>
  )
}

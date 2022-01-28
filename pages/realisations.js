import ContainerBlock from "../components/ContainerBlock"
import Evaluations from "../components/Evaluations"
import Interventions from "../components/Interventions"
import PageHeader from "../components/PageHeader"
import Partners from "../components/Partners"

const realisations = () => {
  return (
    <ContainerBlock
      title="Nos Réalisations et Projets - Victim's Hope DRC"
      description="Découvrez un bref aperçu de nos récentes réalisations et projets en cours"
    >
      <PageHeader
        title="Réalisations et Projets" 
        description="Au fil des ans, nous avons intervenus de différents manières à la création d'activités génératrices de revenus et à l'accompagnement des communautés locales"
        bg="/images/bg-realisations.JPG" 
      />
      <Interventions />
      <Evaluations />
      <Partners />
    </ContainerBlock>
  )
}

export default realisations

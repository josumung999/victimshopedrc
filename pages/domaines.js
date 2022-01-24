import ContainerBlock from "../components/ContainerBlock"
import Humanitaire from "../components/Humanitaire"
import PageHeader from "../components/PageHeader"
import Rsi from "../components/Rsi"

const domaines = () => {
  return (
    <ContainerBlock
      title="Domaines d'intervention - Victim's Hope DRC"
      description="Nous intervenons au profit des victimes de catastrophes par des interventions humanitaire et par la recherche"
    >
      <PageHeader 
        title="Domaines d'Intervention"
        description="Nous intervenons au profit des victimes de catastrophes par des interventions humanitaire et par la recherche"
        bg="/images/domain-header.jpg"
      />
      <Humanitaire />
      <Rsi />
    </ContainerBlock>
  )
}

export default domaines

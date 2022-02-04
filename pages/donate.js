import ContainerBlock from "../components/ContainerBlock"
import Donation from "../components/Donation"
import PageHeader from "../components/PageHeader"

const donate = () => {
  return (
    <ContainerBlock
      title="Faire un Don - Victim's Hope DRC"
      description="Faire un Don à Victim's Hope pour soutenir nos projets humanitaire"
    >
      <PageHeader
        title="Faire un Don"
        description="Étant une organisation à but non lucratif, nous apportons notre soutien aux victimes grâce au soutien de la communauté internationale, du Gouvernement, des cotisations des memebres et appuis des personnes de de bonne volonté. Rejoignez notre cause en soutenant nos différents projets"
        bg='/images/bg-donation.jpg'
      />
      <Donation />
    </ContainerBlock>
  )
}

export default donate

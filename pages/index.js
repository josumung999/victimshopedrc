import Head from 'next/head'
import Image from 'next/image'
import ContainerBlock from '../components/ContainerBlock'
import Hero from '../components/Hero'
import Mission from '../components/Mission'
import Summary from '../components/Summary'
import Vision from '../components/Vision'

export default function Home() {
  return (
    <ContainerBlock
      title="Victim's Hope - Organisation de droit congolais"
      description="Victim's Hope DRC vise à Promouvoir les Droits Humains à travers une assistance opportune et efficace à l’endroit des victimes vulnérabilisées par différentes crises de nature humaines et naturelles dans le contexte fragile"
    >
      <Hero />
      <Mission />
      <Vision />
      <Summary />
    </ContainerBlock>
  )
}

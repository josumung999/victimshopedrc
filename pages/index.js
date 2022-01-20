import Head from 'next/head'
import Image from 'next/image'
import ContainerBlock from '../components/ContainerBlock'
import Hero from '../components/Hero'
import Mission from '../components/Mission'
import Vision from '../components/Vision'

export default function Home() {
  return (
    <ContainerBlock
      title="Victim's Hope - Organisation de droit congolais"
      description="Lorem Ipsum"
    >
      <Hero />
      <Mission />
      <Vision />
    </ContainerBlock>
  )
}

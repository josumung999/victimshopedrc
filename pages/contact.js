import Contact from "../components/Contact"
import ContainerBlock from "../components/ContainerBlock"
import PageHeader from "../components/PageHeader"

const contact = () => {
  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {}
    Array.from(e.currentTarget.elements).forEach(field => {
      if (!field.name) return;
      formData[field.name] = field.value;
    })
    fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify(formData)
    })
    console.log(formData);
  }

  return (
    <ContainerBlock
      title="Nous Contacter - Victim's Hope DRC"
      description="Rejoignez notre communauté aujourd'hui, laissez nous un message et nous serions ravis de vous répondre"
    >
      <PageHeader
        title="Rejoignez-nous Aujourd'hui"
        description="Rejoignez notre communauté aujourd'hui, laissez nous un message et nous serions ravis de vous répondre"
        bg="/images/bg-contact.jpeg"
      />
      <Contact handleOnSubmit={handleOnSubmit} />
    </ContainerBlock>
  )
}

export default contact

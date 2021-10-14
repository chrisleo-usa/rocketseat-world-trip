import type { GetStaticProps, NextPage } from 'next'
import { Center, Heading } from "@chakra-ui/react"
import { HeroImage } from '../../components/HeroImage'
import { Header } from '../../components/Header'
import { TopicsList } from '../../components/TopicsList'
import { Slider } from '../../components/Slider'
import { Continent } from '../../types/continent'
import dbJson from '../../db.json'

interface Continents {
  continentes: Continent[]
}

const Continents: NextPage<Continents> = ({ continentes }) => {
  return (
    <>
      <Header />
      <HeroImage
        imageSrc="/banner.png"
        title="5 Continentes, infinitas possibilidades." 
        text="Chegou a hora de tirar do papel a viagem que você sempre sonhou."
      />
      <TopicsList />
      <Center
        h={0.25}
        w="3.75rem"
        bg="darkText.700"
        mx="auto" 
        mb={["6", null, "3.25rem"]}
      />
      <Heading
        fontSize={{ base: "xl", md: "4xl"}}
        color="darkText.700"
        fontWeight="medium"
        textAlign="center"
        lineHeight="base"
      >
        Vamos nessa? <br/>
        Então escolha seu continente
      </Heading>

      <Slider content={continentes}/>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { continentes } = dbJson

  return {
    props: {
      continentes
    }, 
    revalidate: 60 * 24
  }
}

export default Continents

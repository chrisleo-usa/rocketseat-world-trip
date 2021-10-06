import type { GetStaticProps, NextPage } from 'next'
import { Center, Heading } from "@chakra-ui/react"
import { HeroImage } from '../components/HeroImage'
import { Header } from '../components/Header'
import { TopicsList } from '../components/TopicsList'
import { Slider } from '../components/Slider'
import { ContinentBanner } from '../types/continentBanner'

interface Home {
  data: ContinentBanner[]
}

const Home: NextPage<Home> = ({ data }) => {
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

      <Slider content={data}/>

    </>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const data = [
    {
      imageUrl: 'https://source.unsplash.com/1280x450/?europe',
      title: 'Europa',
      subtitle: 'O continente mais antigo',
      slug: 'europa'
    },  
    {
      imageUrl: 'https://source.unsplash.com/1280x450/?north-america',
      title: 'América do Norte',
      subtitle: 'O continente mais antigo',
      slug: 'america-do-norte'
    },
    {
      imageUrl: 'https://source.unsplash.com/1280x450/?south-america',
      title: 'América do Sul',
      subtitle: 'O continente mais antigo',
      slug: 'america-do-sul'
    },
    {
      imageUrl: 'https://source.unsplash.com/1280x450/?asia',
      title: 'Ásia',
      subtitle: 'O continente mais antigo',
      slug: 'asia'
    },
    {
      imageUrl: 'https://source.unsplash.com/1280x450/?oceania',
      title: 'Oceania',
      subtitle: 'O continente mais antigo',
      slug: 'oceania'
    },
  ]

  return {
    props: {
      data
    }, 
    revalidate: 60 * 24
  }
}

export default Home

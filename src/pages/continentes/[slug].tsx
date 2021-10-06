import { Text, Box, SimpleGrid, Flex } from "@chakra-ui/react"
import { GetStaticPaths, GetStaticProps } from "next"
import { CitiesList } from "../../components/CitiesList"
import { Header } from "../../components/Header"
import { ContinentBanner } from "../../types/continentBanner"
import { Banner } from "../../components/Banner"

interface ContinentProps {
  slug: string
  continent: ContinentBanner
}

const Continent = ({ slug, continent }: ContinentProps) => {
  return (
    <>
      <Header prevButton />
      <main>
        <Banner continent={continent} />
        <Box mx="auto" maxW="1160px" px={{ base: 4, md: 8, lg: 0 }}>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacingX="4.375rem"
            spacingY={6}
            py={{ base: 6, lg: 20 }}
          >
            <Box>
              <Text fontSize={{ base: "sm", md: "lg", lg: "2xl" }} letterSpacing="wide" color="darkText.700" textAlign="justify">
                A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
              </Text>
            </Box>

            <SimpleGrid columns={3} px={4} mb={8} alignItems="center" justifyContent="center">
              <Flex direction="column" align="center">
                <Text fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }} fontWeight="semibold" color="gold.700">50</Text>
                <Text fontSize={{ base: "lg", md: "xl", lg: "2xl" }} fontWeight="semibold" color="darkText.700">países</Text>
              </Flex>

              <Flex direction="column" align="center">
                <Text fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }} fontWeight="semibold" color="gold.700">60</Text>
                <Text fontSize={{ base: "lg", md: "xl", lg: "2xl" }} fontWeight="semibold" color="darkText.700">línguas</Text>
              </Flex>

              <Flex direction="column" align="center">
                <Text fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }} fontWeight="semibold" color="gold.700">24</Text>
                <Text fontSize={{ base: "lg", md: "xl", lg: "2xl" }} fontWeight="semibold" color="darkText.700" whiteSpace="nowrap">cidades +100</Text>
              </Flex>
            </SimpleGrid>
          </SimpleGrid>
          <CitiesList />
        </Box>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug

  const data = [
    {
      imageUrl: 'https://source.unsplash.com/1440x500/?europe',
      title: 'Europa',
      subtitle: 'O continente mais antigo',
      slug: 'europa'
    },  
    {
      imageUrl: 'https://source.unsplash.com/1440x500/?north-america',
      title: 'América do Norte',
      subtitle: 'O continente mais antigo',
      slug: 'america-do-norte'
    },
    {
      imageUrl: 'https://source.unsplash.com/1440x500/?south-america',
      title: 'América do Sul',
      subtitle: 'O continente mais antigo',
      slug: 'america-do-sul'
    },
    {
      imageUrl: 'https://source.unsplash.com/1440x500/?asia',
      title: 'Ásia',
      subtitle: 'O continente mais antigo',
      slug: 'asia'
    },
    {
      imageUrl: 'https://source.unsplash.com/1440x500/?oceania',
      title: 'Oceania',
      subtitle: 'O continente mais antigo',
      slug: 'oceania'
    },
  ]

  const continent = data.find(element => element.slug === slug)

  return {
    props: {
      slug,
      continent
    },
    revalidate: 60 * 30
  }
}

export default Continent
import { Text, Box, SimpleGrid, Flex } from "@chakra-ui/react"
import { GetStaticPaths, GetStaticProps } from "next"
import { CitiesList } from "../../components/CitiesList"
import { Header } from "../../components/Header"
import { Continent as ContinentData } from "../../types/continent"
import { Banner } from "../../components/Banner"
import dbJson from '../../db.json'
import { Statistic } from "../../components/Statistic"
interface ContinentProps {
  continentData: ContinentData
}

const Continent = ({ continentData }: ContinentProps) => {
  return (
    <>
      <Header onClickPrevButton="/continentes" />
      <main>
        <Banner imageUrl={continentData.imageUrl} title={continentData.name} />
        <Box mx="auto" maxW="1160px" px={{ base: 4, md: 8, xl: 0 }}>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacingX="2rem"
            spacingY={6}
            py={{ base: 6, lg: 20 }}
          >
            <Box>
              <Text fontSize={{ base: "sm", md: "lg", lg: "2xl" }} letterSpacing="wide" color="darkText.700" textAlign="justify">
                {continentData.description}
              </Text>
            </Box>

            <SimpleGrid columns={3} px={4} mb={8} alignItems="center" justifyContent="center">
              <Flex direction="column" align="center">
                <Statistic
                  value={continentData.countriesNumber}
                  category="países" 
                />
              </Flex>

              <Flex direction="column" align="center">
                <Statistic
                  value={continentData.languagesQuantity}
                  category="línguas" 
                />
              </Flex>

              <Flex direction="column" align="center">
                <Statistic
                  value={continentData.citiesNumber}
                  category="cidades" 
                />
              </Flex>
            </SimpleGrid>
          </SimpleGrid>
          <CitiesList countries={continentData.countries}/>
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
  const id = params?.slug

  const response = dbJson
  const continentData = response.continentes.find(element => String(element.id) === id)

  return {
    props: {
      continentData
    },
    revalidate: 60 * 30
  }
}

export default Continent
import { SimpleGrid, Heading } from "@chakra-ui/react"
import { Country } from "../../types/continent"
import { Card } from "./Card"

interface CitiesListProps {
  countries?: Country[]
}

export const CitiesList = ({ countries }: CitiesListProps) => {
  return (
    <>
      <Heading
        as="h3"
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
        fontWeight="medium"
        color="darkText.700"
        mb={{ base: 5, md: 10 }}
      >
        Cidades +{countries?.length}
      </Heading>

      <SimpleGrid spacing={{ base: 5, lg: "2.812rem" }} columns={{ base: 1, md: 2, lg: 4 }}>
        {countries?.map((element, index) => (
          <Card country={element} key={index}/>
        ))}
      </SimpleGrid>
    </>
  )
}
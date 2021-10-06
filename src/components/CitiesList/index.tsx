import { SimpleGrid, Heading } from "@chakra-ui/react"
import { Card } from "./Card"

const data = {
  imageUrl: 'https://source.unsplash.com/375x250/?europe',
  title: 'Europa',
  subtitle: 'O continente mais antigo',
  slug: 'europa'
}

export const CitiesList = () => {
  return (
    <>
      <Heading
        as="h3"
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
        fontWeight="medium"
        color="darkText.700"
        mb={{ base: 5, md: 10 }}
      >
        Cidades +100
      </Heading>

      <SimpleGrid spacing={{ base: 5, lg: "2.812rem" }} columns={{ base: 1, md: 2, lg: 4 }}>
        {new Array(data, data, data, data, data).map((element, index) => (
          <Card key={index}/>
        ))}
        <Card />
      </SimpleGrid>
    </>
  )
}
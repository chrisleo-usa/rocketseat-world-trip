import { Flex, Box, Image, Text } from "@chakra-ui/react"
import { Country } from "../../../types/continent"

interface CardProps {
  country: Country
}

export const Card = ({ country }: CardProps) => {
  return (
    <Flex maxW="256px" direction="column" mx="auto" mb={4} borderTopRadius="8px"  overflow="hidden">
      <Box>
        <Image src={country.imageUrl} alt={country.name}/>
      </Box>
      <Flex
        justify="space-between"
        align="center"
        minH="142px"
        px={6}
        pt={5}
        pb={6}
        border="1px"
        borderColor="yellow.300"
        borderBottomRadius="8px"
        bg="white"
      >
        <Box>
          <Text mb={3} fontSize="xl" color="darkText.700">
            {country.capital}
          </Text>
          <Text color="darkText.400">
            {country.name}
          </Text>
        </Box>
        <Box
          w="50px"
          h="50px"
          bgImage={country.flag}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
        >
        </Box>
      </Flex>
    </Flex>
  )
}
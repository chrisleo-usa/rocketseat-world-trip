import { Flex, Box, Image, Text } from "@chakra-ui/react"

export const Card = () => {
  return (
    <Flex direction="column" mx="auto" mb={4} borderTopRadius="8px"  overflow="hidden">
      <Box>
        <Image src="https://source.unsplash.com/256x173/?europe" alt="cidade"/>
      </Box>
      <Flex
        justify="space-between"
        align="center"
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
            Londres
          </Text>
          <Text color="darkText.400">
            Reino Unido
          </Text>
        </Box>
        <Box w="30px" h="30px" bgColor="black" borderRadius="full">
        </Box>
      </Flex>
    </Flex>
  )
}
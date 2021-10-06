import { Flex, Heading, Box } from "@chakra-ui/react"
import { ContinentBanner } from "../../types/continentBanner"

interface BannerProps {
  continent: ContinentBanner
}

export const Banner = ({ continent }: BannerProps) => {
  return (
    <Flex
      w="100%"
      maxW="1440px"
      minH={["150px", "300px", "500px"]}
      mx="auto"
      align={{ base: "center", md: "end" }}
      justify={{ base: "center", md: "start" }}
      position="relative"
      bgImage={continent.imageUrl}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex className="banner-opacity">
        <Box
          w="100%"
          maxW="1160px"
          pl={{ md: "140px" }}
          pb={{ md: "59px" }}
        >
          <Heading
            color="white"
            position="relative"
            fontSize={["1.875rem", "4xl", "5xl"]}
            fontWeight={{ base: "semibold", md: "medium"}}
          >
            {continent.title}
          </Heading>
        </Box>
      </Flex>
    </Flex>
  )
}
import { Box, Flex, Heading, Text, Stack, Image } from '@chakra-ui/react'

interface BannerProps {
  imageSrc: string
  title?: string
  text?: string
}

export const HeroImage = ({ imageSrc, title, text }: BannerProps) => {
  return (
    <section>
      <Flex
        w="100%"
        maxW="1440px"
        minH={["166px", "250px", "335px"]}
        bgImage={`url(${imageSrc})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        mx="auto"
      >
        <Flex w="100%" maxW="1160px" mx="auto" position="relative" align="center">
          <Flex direction="column" px={4} py={7} maxW={{lg: "524px"}}>
            <Stack spacing="2">
              <Heading
                as="h2"
                fontSize={["xl", "2xl", "4xl"]}
                color="white"
                lineHeight="base"
                fontWeight="medium"
              >
                {title}
              </Heading>
              <Text
                fontSize={["sm", "md", "xl"]}
                color="white"
                letterSpacing="wide"
              >
                {text}
              </Text>
            </Stack>
          </Flex>
          <Box position="absolute" right="0" bottom="-10" display={["none", null, null, "block"]}>
            <Image src="/Airplane.png" alt="airplane image"/>
          </Box>
        </Flex>
      </Flex>
    </section>
  )
}

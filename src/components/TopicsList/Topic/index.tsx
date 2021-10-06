import { useBreakpoints } from 'react-breakpoints-hook';
import { Flex, Text, Icon, Image } from "@chakra-ui/react"
import { CircleIcon } from "../../CircleIcon"

interface TopicProps {
  iconSrc?: string
  iconAlt?: string
  text?: string
  direction?: "column" | "row"
}

export const Topic = ({ iconSrc, iconAlt, text, direction = "column" }: TopicProps) => {
  const { md } = useBreakpoints({
    md: { min: 768, max: null }
  })

  return (
    <>
      {md ? (
        <Flex align="center" direction={direction}>
          <Image
            objectFit="cover"
            src={iconSrc}
            alt={iconAlt}
            w="85px"
            mb={6}
          />
          <Text color="darkText.700" fontSize="lg" fontWeight="medium" ml={2}>{text}</Text>
        </Flex>
      ) : (
        <Flex align="center">
          <Icon as={CircleIcon} />
          <Text color="darkText.700" fontSize="lg" fontWeight="medium" ml={2}>{text}</Text>
        </Flex>
      )}
    </>
    // <Flex align="center">
    //   {icon}
    //   <Text color="darkText.700" fontSize="lg" fontWeight="medium" ml={2}>{text}</Text>
    // </Flex>
  )
}

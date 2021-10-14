import { Text } from "@chakra-ui/react"

interface StatisticProps {
  value?: number 
  category?: string
}

export const Statistic = ({ value, category }: StatisticProps) => {
  return (
    <>
      <Text
        fontSize={{ base: "2xl", md: "4xl", lg:"5xl" }}
        fontWeight="semibold"
        color="gold.700"
      >
        {value}  
      </Text>
      <Text
        fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
        fontWeight="semibold"
        color="darkText.700"
      >
        {category}
      </Text>
    </>
  )
}
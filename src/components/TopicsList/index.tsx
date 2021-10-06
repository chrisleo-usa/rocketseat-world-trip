import { useBreakpoints } from 'react-breakpoints-hook';
import { Box, Flex, SimpleGrid, Stack } from '@chakra-ui/react'
import { Topic } from './Topic'

export const TopicsList = () => {
  const { sm, md } = useBreakpoints({
    sm: { min: 1, max: 767 },
    md: { min: 768, max: 3000 }
  })

  return (
    <section>
      <Box px={["3.125rem", null, "unset"]} py={["9", null, "20"]} maxW="1160px" mx="auto">
        {md && (
          <SimpleGrid columns={5}>
            <Topic iconSrc="/cocktail.svg" iconAlt="cocktail icon" text="vida noturna"/>
            <Topic iconSrc="/surf.svg" iconAlt="surf icon" text="praia"/>

            <Topic iconSrc="/building.svg" iconAlt="building icon" text="moderno"/>
            <Topic iconSrc="/museum.svg" iconAlt="museum icon" text="clássico"/>

            <Topic iconSrc="/earth.svg" iconAlt="earth icon" text="e mais..."/>
          </SimpleGrid>
        )}
        {sm && (
          (
            <Stack spacing="6">
              <Flex justify="space-between" align="center">
                <Topic iconSrc="/cocktail.svg" iconAlt="cocktail icon" text="vida noturna"/>
                <Topic iconSrc="/surf.svg" iconAlt="surf icon" text="praia"/>
              </Flex>
  
              <Flex justify="space-between" align="center">
                <Topic iconSrc="/building.svg" iconAlt="building icon" text="moderno"/>
                <Topic iconSrc="/museum.svg" iconAlt="museum icon" text="clássico"/>
              </Flex>
  
              <Flex justify="center" align="center">
                <Topic iconSrc="/earth.svg" iconAlt="earth icon" text="e mais..."/>
              </Flex>
            </Stack>
          )
        )}
        
      </Box>
    </section>
  )
}
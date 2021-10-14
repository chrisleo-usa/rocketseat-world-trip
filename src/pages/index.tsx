import { GetStaticProps } from 'next'
import Link from 'next/link'
import { Box, Image, Flex } from "@chakra-ui/react"

const Home = () => {
  return (
    <main>
      <Flex
        w="100vw"
        h="100vh"
        px={10}
        justify="center"
        align="center"
      >
        <Link href="/continentes" passHref>
          <a>
            <Box minW="250px" maxW="368px" w="full">
              <Image
                objectFit="cover"
                src="/logo.svg"
                alt="logo"
                w="100%"
                h="100%"
              />
            </Box>
          </a>
        </Link>
      </Flex>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}

export default Home

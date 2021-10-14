import { Flex, Box, Image, Heading, Button } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

interface HeaderProps {
  prevButton?: boolean
}

export const Header = ({ prevButton }: HeaderProps) => {
  const router = useRouter()
  return (
    <>
    {prevButton ? (
      <header>
        <Flex align="center" w="100%" maxW="1160px" py={4} mx="auto">
          <Box as="button" onClick={() => router.push('/')}>
            <ChevronLeftIcon
              w={{ base: 6, md: 8 }}
              h={{ base: 6, md: 8 }}
              ml={4} 
            />
          </Box>
          <Heading as="h1" cursor="pointer" mx="auto">
            <Link href="/" passHref>
              <Image
                objectFit="cover"
                src="/logo.svg"
                alt="logo"
                minW={{
                sm:
                "120px",
                lg:
                "180px"
                }} 
              />
            </Link>
          </Heading>
        </Flex>
      </header>
    ) : (
      <header>
        <Flex justify="center" align="center">
          <Box maxW="187px" py={4}>
            <Heading as="h1" cursor="pointer">
              <Link href="/" passHref>
                <Image
                  objectFit="cover"
                  src="/logo.svg"
                  alt="logo"
                  minW={{
                  sm:
                  "120px",
                  lg:
                  "180px"
                  }} 
                />
              </Link>
            </Heading>
          </Box>
        </Flex>
      </header>
    )}
      
    </>
  )
}

// import Swiper core and required modules
import { Image, Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ContinentBanner } from '../../types/continentBanner';

interface SliderProps {
  content: ContinentBanner[]
}

export const Slider = ({ content }: SliderProps) => {
  const params = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      clickable: true
    },
    navigation: {},
  }

  return (
    <Box w="100%" maxW={"1240px"} minH={["15.625rem", "xs", "28.125rem"]} my={6} mx="auto">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        {...params}
      >
        {content.map((content, index) => (
          <SwiperSlide key={index}>
            <Flex position="relative" minH={["15.625rem", "xs", "21.875rem", "28.128rem"]}>
              <Flex
                position="absolute"
                direction="column"
                justify="center"
                w="100%"
                h="100%"
                className="swiper-content"
              >
                <Link href={`/continentes/${content.slug}`} passHref>
                  <Box>
                    <Heading
                      as="h2"
                      color="white"
                      fontSize={["2xl", "4xl", "5xl"]}
                      textAlign="center"
                      position="relative"
                    >
                      {content.title}
                    </Heading>
                    <Text
                      color="white"
                      fontSize={["sm", "lg", "2xl"]}
                      mt={3}
                      fontWeight="bold"
                      textAlign="center"
                      position="relative"
                    >
                      {content.subtitle}
                    </Text>
                  </Box>
                </Link>
              </Flex>
              <Image src={content.imageUrl} alt="continent image"/>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
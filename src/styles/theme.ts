import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    ice: {
      500: "#F5F8FA"
    },
    darkText: {
      400: "#999999",
      700: "#47585B",
      900: "000000"
    },
    gold: {
      700: "#FFBA08",
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'ice.500'
      }
    }
  }
})
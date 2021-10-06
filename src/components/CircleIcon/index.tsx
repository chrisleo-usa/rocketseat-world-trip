import { Icon } from '@chakra-ui/react'

export const CircleIcon = () => {
  return (
    <Icon viewBox="0 0 200 200" color="gold.700" boxSize={3}>
      <path
        fill="currentColor"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
    </Icon>
  )
}
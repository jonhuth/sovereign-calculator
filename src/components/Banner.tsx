import { Button, Flex, Link, Spacer } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

const Banner = () => (
  <Flex>
    <Button colorScheme='orange' variant='ghost' justifySelf="flex-start">
      <Link href='/'>Sovereign Calculators</Link>
    </Button>
    <Spacer />
    <ColorModeSwitcher justifySelf="flex-end" />
  </Flex>
);

export default Banner;
import { Button, Flex, Link, Spacer } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Link as RouteLink } from "react-router-dom";

const Banner = () => (
  <Flex>
    <Button colorScheme='orange' variant='ghost' justifySelf="flex-start">
      <Link as={RouteLink} to={'/'}>Sovereign Calculators</Link>
    </Button>
    <Spacer />
    <ColorModeSwitcher justifySelf="flex-end" />
  </Flex>
);

export default Banner;
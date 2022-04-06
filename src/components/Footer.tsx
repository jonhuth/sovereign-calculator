import { Box, Flex, Link } from "@chakra-ui/react";
import { personalSiteUrl } from '../constants';

const Footer = () => (
  <Flex
    width="100%"
    justifyContent="end"
    alignItems="center"
    direction="column"
    padding={4}>
    <Box mt={8}>Made with ❤ by <Link href={personalSiteUrl}>Jonathan</Link></Box>
  </Flex>
);

export default Footer;
import { Flex, Box, Link } from '@chakra-ui/react';

const personalSiteUrl = 'https://jonhuth.github.io/personal/';

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
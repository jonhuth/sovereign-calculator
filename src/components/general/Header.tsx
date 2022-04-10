import { Box, Heading, Text } from '@chakra-ui/react';

const Header = ({ header, subHeader }: { header: string, subHeader: string }) => (
  <Box>
    <Heading fontSize='4xl'>{header}</Heading>
    <Text fontSize='2xl'>{subHeader}</Text>
  </Box>
);

export default Header;
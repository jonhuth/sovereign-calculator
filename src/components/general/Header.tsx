import { Box, Heading, Text } from '@chakra-ui/react';

const Header = ({ header, subHeader, my }: { header: string, subHeader: string, my: number }) => (
  <Box my={my}>
    <Heading fontSize='4xl'>{header}</Heading>
    <Text fontSize='2xl'>{subHeader}</Text>
  </Box>
);

export default Header;
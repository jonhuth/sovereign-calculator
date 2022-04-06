import { Box, Center, Link } from "@chakra-ui/react";

interface _Item {
  title: string,
  link: string
};

const Item = ({ title, link }: _Item) => (
  <Box borderWidth='1px' maxWidth={500} h={100} borderRadius='lg' overflow='hidden' bg='orange'>
    <Center h='80px'>
      <Link href={link}>{title}</Link>
    </Center>
  </Box>
);

export default Item;
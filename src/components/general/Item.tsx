import { Flex, Link } from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";

interface _Item {
  title: string,
  link: string
};

const Item = ({ title, link }: _Item) => (
  <Flex borderWidth='1px' maxWidth={500} w={350} h={100} borderRadius='lg' bg='orange'
    justifyContent="center"
    alignItems="center"
    direction="column">
    <Link as={RouteLink} to={link}>{title}</Link>
  </Flex>
);

export default Item;
import {Box, Button, Center, Flex, Grid, Link, SimpleGrid, Spacer, VStack} from "@chakra-ui/react";
import {ColorModeSwitcher} from "../ColorModeSwitcher";
import * as React from "react";
import Footer from "../Components/Footer";

const Home = () => {
  return <Box textAlign="center" fontSize="xl">
    <Grid minH="100vh" p={3}>
      <Flex>
        <Button colorScheme='orange' variant='ghost' justifySelf="flex-start">Sovereign Calculators</Button>
        <Spacer />
        <ColorModeSwitcher justifySelf="flex-end"/>
      </Flex>
      <SimpleGrid columns={2} spacing={10}>
        <Center bg="orange" height="80px"><Link>Impermanent Loss Calculator</Link></Center>
        <Center bg="orange" height="80px"><Link>Fee Drag Calculator</Link></Center>
      </SimpleGrid>
      <Footer></Footer>
    </Grid>
  </Box>;
}

export default Home;
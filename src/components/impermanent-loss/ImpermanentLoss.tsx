import { Box, Grid, Heading, Text } from '@chakra-ui/react';
import Banner from "../general/Banner";
import Footer from '../general/Footer';
import ImpermanentLossForm from "./ImpermanentLossForm";

const ImpermanentLoss = () => {
  return <Box textAlign="center" fontSize="xl">
    <Grid minH="100vh" p={3}>
      <Banner></Banner>
      <Box>
        <Heading fontSize='4xl'>Impermanent Loss Calculator</Heading>
        <Text fontSize='2xl'>Tool to analyze tradeoffs of providing liquidity in crypto</Text>
      </Box>
      <ImpermanentLossForm></ImpermanentLossForm>
      <Footer></Footer>
    </Grid>
  </Box>;
}

export default ImpermanentLoss;
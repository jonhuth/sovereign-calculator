import { Box, Grid, Heading, Text } from '@chakra-ui/react';
import Banner from "../general/Banner";
import Footer from '../general/Footer';
import Header from '../general/Header';
import ImpermanentLossForm from "./ImpermanentLossForm";

const ImpermanentLoss = () => {
  return <Box textAlign="center" fontSize="xl">
    <Grid minH="100vh" p={3}>
      <Banner></Banner>
      <Header header='Impermanent Loss Calculator' subHeader='Tool to analyze tradeoffs of providing liquidity in crypto' />
      <ImpermanentLossForm />
      <Footer></Footer>
    </Grid>
  </Box>;
}

export default ImpermanentLoss;
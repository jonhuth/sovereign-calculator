import { Box, Grid } from '@chakra-ui/react';
import Banner from "../general/Banner";
import Footer from '../general/Footer';
import Header from '../general/Header';
import ImpermanentLossForm from "./ImpermanentLossForm";

const ImpermanentLoss = () => {
  return <Box textAlign="center" fontSize="xl">
    <Grid minH="100vh" p={3}>
      <Banner></Banner>
      <Header
        my={8}
        header='Impermanent Loss Calculator'
        subHeader='Analyze tradeoffs between HODLing and providing liquidity' />
      <ImpermanentLossForm />
      <Footer></Footer>
    </Grid>
  </Box>;
}

export default ImpermanentLoss;
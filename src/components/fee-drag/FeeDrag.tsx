import { Box, Grid } from "@chakra-ui/react";
import Banner from "../general/Banner";
import Footer from "../general/Footer";
import Header from '../general/Header';
import FeeDragForm from './FeeDragForm';

const FeeDrag = () => {
  return <Box textAlign="center" fontSize="xl">
    <Grid minH="100vh" p={3}>
      <Banner></Banner>
      <Header
        my={8}
        header='Fee Drag Calculator'
        subHeader='Analyze opportunity cost of ETF Fees on performance' />
      <FeeDragForm />
      <Footer></Footer>
    </Grid>
  </Box>;
}

export default FeeDrag;
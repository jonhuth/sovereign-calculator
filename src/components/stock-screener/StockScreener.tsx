import { Box, Grid } from "@chakra-ui/react";
import Banner from "../general/Banner";
import Footer from "../general/Footer";

const StockScreener = () => {
  return <Box textAlign="center" fontSize="xl">
    <Grid minH="100vh" p={3}>
      <Banner></Banner>
      <Box>Coming Soon!</Box>
      <Footer></Footer>
    </Grid>
  </Box>;
}

export default StockScreener;
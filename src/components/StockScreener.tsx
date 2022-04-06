import { Box, Grid } from "@chakra-ui/react";
import Banner from "./Banner";
import Footer from "./Footer";

const StockScreener = () => {
  return <Box textAlign="center" fontSize="xl">
    <Grid minH="100vh" p={3}>
      <Banner></Banner>
      <Box>TODO</Box>
      <Footer></Footer>
    </Grid>
  </Box>;
}

export default StockScreener;
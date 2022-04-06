import {Box, Center, Grid, Link, SimpleGrid} from "@chakra-ui/react";
import Banner from "./Banner";
import Footer from "./Footer";
import Item from "./Item";

const Home = () => {
  return <Box textAlign="center" fontSize="xl">
    <Grid minH="100vh" p={3}>
      <Banner></Banner>
      <SimpleGrid columns={2} spacing={10}>
        <Item title='Impermanent Loss Calculator' link='/impermanent-loss'></Item>
        <Item title='Fee Drag Calculator' link='/fee-drag'></Item>
        <Item title='Portfolio Comparison' link='/portfolio-comparison'></Item>
        <Item title='Stock Screener' link='/stock-screener'></Item>
      </SimpleGrid>
      <Footer></Footer>
    </Grid>
  </Box>;
}

export default Home;
import { Box, Grid, SimpleGrid, Text } from "@chakra-ui/react";
import Banner from "./general/Banner";
import Footer from "./general/Footer";
import Header from './general/Header';
import Item from "./general/Item";

const Home = () => {
  return <Box textAlign="center" fontSize="xl">
    <Grid minH="100vh" p={3}>
      <Banner></Banner>
      <Header
        my={8}
        header='Sovereign Individual'
        subHeader='Tools for the Sovereign Age!' />
      <Box justifySelf={'center'}>
        <Text fontSize='1x1' mb='10'>Tools</Text>
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={5} justifySelf='center'>
          <Item title='Impermanent Loss Calculator' link='/impermanent-loss'></Item>
          <Item title='Fee Drag Calculator' link='/fee-drag'></Item>
          <Item title='Portfolio Comparison' link='/portfolio-comparison'></Item>
          <Item title='Stock Screener' link='/stock-screener'></Item>
        </SimpleGrid>
      </Box>
      <Footer></Footer>
    </Grid>
  </Box>;
}

export default Home;
import { ChakraProvider, theme } from "@chakra-ui/react"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import FeeDrag from "./components/FeeDrag";
import Home from "./components/Home";
import ImpermanentLoss from "./components/ImpermanentLoss";
import PortfolioComparison from "./components/PortfolioComparison";
import StockScreener from "./components/StockScreener";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/impermanent-loss" element={<ImpermanentLoss />} />
        <Route path="/fee-drag" element={<FeeDrag />} />
        <Route path="/portfolio-comparison" element={<PortfolioComparison />} />
        <Route path="/stock-screener" element={<StockScreener />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>

  </ChakraProvider>
)

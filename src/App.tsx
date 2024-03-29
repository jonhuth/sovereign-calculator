import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FeeDrag from "./components/fee-drag/FeeDrag";
import Home from "./components/Home";
import ImpermanentLoss from "./components/impermanent-loss/ImpermanentLoss";
import PortfolioComparison from "./components/portfolio-comparison/PortfolioComparison";
import StockScreener from "./components/stock-screener/StockScreener";

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

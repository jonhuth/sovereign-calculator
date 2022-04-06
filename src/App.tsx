import { ChakraProvider, theme } from "@chakra-ui/react"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import ImpermanentLoss from "./components/ImpermanentLoss";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/impermanent-loss" element={<ImpermanentLoss />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>

  </ChakraProvider>
)

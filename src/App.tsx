import * as React from "react"
import {ChakraProvider, theme,} from "@chakra-ui/react"
import Home from "./home/Home";

export const App = () => (
  <ChakraProvider theme={theme}>
    {/*<Router>*/}

    {/*</Router>*/}
    <Home/>
  </ChakraProvider>
)

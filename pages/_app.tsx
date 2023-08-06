import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "@/components/navbar";
import { theme } from "@/components";
import { trpc } from "@/utils/trpc";
import { ToastContainer } from "react-toastify";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <ToastContainer theme="colored" />
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default trpc.withTRPC(App);

import '../styles/globals.css'
import '../styles/navbar.css'
import { MoralisProvider } from "react-moralis";
import Navbar from '../components/Navbar';
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    // <ChakraProvider>
      <MoralisProvider appId={process.env.NEXT_PUBLIC_APP_ID} serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}>
        <Navbar />
        <Component {...pageProps} />
      </MoralisProvider>
    // </ChakraProvider>
  )
}

export default MyApp

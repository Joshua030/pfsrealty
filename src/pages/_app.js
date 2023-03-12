import '@/styles/globals.css'
import Navbar from '../../components/navBar/Navbar'

export default function App({ Component, pageProps }) {
  return(
    <>
    <Navbar /> 
     <Component {...pageProps} />
    </>
    ) 
}

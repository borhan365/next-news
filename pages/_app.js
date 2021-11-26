import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
// import { Container } from '../styles/Common.styled'
import '../styles/Common.styled.js'
// import { GlobalStyle } from '../styles/Global.Styled'
import '../styles/Style.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp

import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from '@styles/global'
import theme from '@styles/theme'
import Header from '@src/componentes/Header';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp

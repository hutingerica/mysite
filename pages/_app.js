import GlobalStyles from '../components/GlobalStyles'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps}){
  return (
    <>
      <GlobalStyles/>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
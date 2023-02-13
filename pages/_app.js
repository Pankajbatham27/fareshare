import '../styles/globals.css'
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import NextNProgress from 'nextjs-progressbar';




export default function App({ Component, pageProps }) {
  return (
    <>
      <NextNProgress />
      <Component {...pageProps} />
    </>
  )
}

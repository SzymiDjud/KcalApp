import '@/styles/globals.css'
import Layout from "../components/Layout";
import { Roboto } from 'next/font/google'
''
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export default function App({ Component, pageProps }) {
  return (
    <>
    <style jsx global>{`
      html {
        font-family: ${roboto.style.fontFamily};
      }
    `}</style>
      <Layout>
          <Component {...pageProps} />
      </Layout> 
  </>
 
  )
}

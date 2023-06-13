import '@/styles/globals.css'
import Layout from "../components/Layout";
import { Roboto } from 'next/font/google'
import { SessionProvider } from "next-auth/react"

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export default function App({ Component, pageProps }) {
  return (
    <>
    <style jsx global>{`
      html {
        font-family: ${roboto.style.fontFamily};
      }
    `}</style>
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  </>
 
  )
}

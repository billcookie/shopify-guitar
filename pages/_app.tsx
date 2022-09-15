import { AppProps } from "next/app"

interface Props {
  children: React.ReactNode
}

function Noop({ children }: Props) {
  <>{children}</>
}


function MyApp({Component, pageProps}: AppProps & {Component: {Layout: any}}) {

  const Layout = Component.Layout ?? Noop
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

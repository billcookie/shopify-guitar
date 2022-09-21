import { AppProps } from "next/app"
import "../assets/main.css"
import { useUI } from "@components/ui/context"
import UIProvider from "@components/ui/context"
import "keen-slider/keen-slider.min.css"

interface Props {
  children: React.ReactNode
}

function Noop({ children }: Props) {
  <>{children}</>
}


function MyApp({Component, pageProps}: AppProps & {Component: {Layout: any}}) {

  const Layout = Component.Layout ?? Noop

  const ui = useUI()

  console.log(ui)
  return (

    <UIProvider >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  )
}

export default MyApp

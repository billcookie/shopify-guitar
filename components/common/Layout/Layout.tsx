import style from "./Layout.module.css"
import { Footer, Navbar  } from "@components/common"


interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
  <div className={style.root}>
    <Navbar />
    <main className="fit">
      {children}
    </main>
    <Footer />
  </div>
  )
}

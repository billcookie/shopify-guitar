import style from "./Layout.module.css"
import Footer  from "@components/common/Footer"

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
  <div className={style.root}>
    <main className="fit">
      {children}
    </main>
    <Footer />
  </div>
  )
}

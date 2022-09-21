import style from "./Layout.module.css"
import { Footer, Navbar  } from "@components/common"
import { Sidebar } from "@components/ui"
import { CartSidebar } from "@components/cart"
import { useUI } from "@components/ui/context"
import { ApiProvider } from '@common'

interface Props {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  const { isSidebarOpen, closeSidebar } = useUI()
  return (
    <ApiProvider>
      <div className={style.root}>
        <Navbar />
        <Sidebar
          onClose={closeSidebar}
          isOpen={isSidebarOpen}>
          <CartSidebar />
        </Sidebar>
        <main className="fit">
          { children }
        </main>
        <Footer />
      </div>
    </ApiProvider>
  )
}

export default Layout

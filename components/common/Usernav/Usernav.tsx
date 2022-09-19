import style from "./Usernav.module.css"
import Link from "next/link"
import { Bag as Cart, Heart } from "@components/icons"
import { useUI } from "@components/ui/context"

function Usernav() {
  const { openSidebar } = useUI()
  return (
    <nav>
      <ul className={style.list}>
        <li className={style.item}>
          <Link href="/">
          <Cart onClick={openSidebar}/>
          </Link>
        </li>
        <li className={style.item}>
        <Link href="/wishlist">
            <a><Heart /></a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Usernav

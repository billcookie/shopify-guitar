import style from "./Usernav.module.css"
import Link from "next/link"
import { Bag, Heart } from "@components/icons"
function Usernav() {

  return (
    <nav>
      <ul className={style.list}>
        <li className={style.item}>
          <Link href="/">
            <a><Bag /></a>
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

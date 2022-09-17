import style from "./Usernav.module.css"
import Link from "next/link"
function Usernav() {

  return (
    <nav>
      <ul className={style.list}>
        <li className={style.item}>
          <Link href="/">
            <a>Cart</a>
          </Link>
        </li>
        <li className={style.item}>
        <Link href="/">
            <a>Wishlist</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Usernav

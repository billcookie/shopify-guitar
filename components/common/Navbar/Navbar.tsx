import { Container } from "@components/ui";
import Link from "next/link"
import style from "./Navbar.module.css"
import { Usernav } from "@components/common"

function Navbar() {

  return (
    <Container>
      <div className={style.root}>
        <div className="flex flex-1 items-center">
          <Link href="/">
            <a className={style.logo}>
              Guitar Store
            </a>
          </Link>
          <nav className="ml-6 space-x-6">
          <Link href="/">
            <a className={style.link}>All</a>
          </Link>
          <Link href="/">
            <a className={style.link}>Clothes</a>
          </Link>
          <Link href="/">
            <a className={style.link}>Accessories</a>
          </Link>
          <Link href="/">
            <a className={style.link}>Shoes</a>
          </Link>
          </nav>
          <div className="flex flex-1 justify-end space-x-8">
            <Usernav />
          </div>
        </div>
      </div>
    </Container>
  )
}

// space-x-6 provides margin for all children apart from the first one.


export default Navbar

import { Container } from "@components/ui";
import Link from "next/link"
import style from "./Navbar.module.css"
import { Usernav } from "@components/common"
import Image from "next/image";

function Navbar() {

  return (
    <Container>
      <div className={style.root}>
        <div className="flex flex-1 items-center">
          <Link href="/">
            <a>
            <Image  className={style.logo}
                  src={"/../public/logo.png"}
                  alt={"logo.png"}
                  width={100}
                  height={100}
                />
            </a>
          </Link>
          <nav className="ml-6 space-x-6">
          <Link href="/">
            <a className={style.link}>All</a>
          </Link>
          <Link href="/">
            <a className={style.link}>Guitars</a>
          </Link>
          <Link href="/">
            <a className={style.link}>Accessories</a>
          </Link>
          <Link href="/">
            <a className={style.link}>Amps</a>
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

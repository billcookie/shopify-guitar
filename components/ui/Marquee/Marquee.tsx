import style from "./Marquee.module.css"
import Ticker from "react-ticker"
import cn from "classnames"

interface Props {
  children: React.ReactNode[]
  variant?: "primary" | "secondary"
}


function Marquee({children, variant = "primary"}: Props) {
  const rootClassName = cn(
    style.root,
    {
      [style.secondary]: variant === "secondary"
    }
  )

  return (
    <div className={style.root}>
      <Ticker offset={300}>
        { () =>
          <div className={style.container}>
            {children}
          </div>
        }
      </Ticker>
    </div>
  )
}

// to change ticker start location change offset

export default Marquee

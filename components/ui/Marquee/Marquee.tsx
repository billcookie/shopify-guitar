import style from "./Marquee.module.css"
import Ticker from "react-ticker"

interface Props {
  children: React.ReactNode[]
}


function Marquee({children}: Props) {
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

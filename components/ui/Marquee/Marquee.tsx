import style from "./Marquee.module.css"

interface Props {
  children: React.ReactNode[]
}


function Marquee({children}: Props) {
  return (
    <div className={style.root}>
      <div className={style.container}>
        {children}
      </div>

    </div>
  )
}


export default Marquee

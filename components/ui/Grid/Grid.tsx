import style from "./Grid.module.css"
interface Props {
  children: React.ReactNode
}


function Grid({children}: Props) {

  return (
    <div className={style.root}>
      {children}
    </div>
  )
}

export default Grid

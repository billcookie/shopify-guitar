import style from "./Grid.module.css"
import cn from "classnames"
interface Props {
  children: React.ReactNode
  layout?: "A" | "B"
}


function Grid({children, layout = "A"}: Props) {

  const rootClassName = cn(
    style.root,{
      [style.layoutA]: layout === "A",
      [style.layoutB]: layout === "B"

    }
  )
  return (
    <div className={rootClassName}>
      {children}
    </div>
  )
}

export default Grid

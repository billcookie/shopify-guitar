import style from "./Swatch.module.css"
import { Check } from "@components/icons"
interface Props {
  color?: string
  label?: string
  variant?: "size" | "color" | string
}

function Swatch({color, label, variant}:Props) {

  label = label?.toLowerCase()
  variant = variant?.toLocaleLowerCase()

  return (
    <button
      style={color ? {backgroundColor: color} : {}}
      className={style.root}>
      {/* <span>
        <Check />
      </span> */}
      { variant === "size" ? label : null }
    </button>
  )
}


export default Swatch

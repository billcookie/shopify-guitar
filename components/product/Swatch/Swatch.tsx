import style from "./Swatch.module.css"
import { Check } from "@components/icons"
import cn from "classnames"
interface Props {
  color?: string
  label?: string
  active?: boolean
  variant?: "size" | "color" | string
  onClick: () => void
}

function Swatch({color, label, variant, active,
   ...rest}:Props) {

  label = label?.toLowerCase()
  variant = variant?.toLocaleLowerCase()

  const rootClassName = cn(
    style.root,
    {
      [style.active]: active,
      [style.color]: color,
      [style.size]: variant === "size"
    }
  )

  return (
    <button
      style={color ? {backgroundColor: color} : {}}
      className={rootClassName}
      { ...rest }>
      { variant === "color" && active &&
        <span>
          <Check />
        </span>
      }
    </button>
  )
}


export default Swatch

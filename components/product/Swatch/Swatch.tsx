import style from "./Swatch.module.css"
import { Check } from "@components/icons"
import { isDark } from "@lib/color"
import cn from "classnames"
interface Props {
  size?: "sm" | "md" | "lg"
  color?: string
  label?: string
  active?: boolean
  variant?: "size" | "color" | string
  onClick: () => void
}

function Swatch({color, label, variant, active, size="md",
   ...rest}:Props) {

  label = label?.toLowerCase()
  variant = variant?.toLocaleLowerCase()

  const rootClassName = cn(
    style.root,
    {
      [style.active]: active,
      [style.color]: color,
      [style.size]: variant === "size",
      [style.dark]: color && isDark(color),
      [style.sm]: size === "sm"
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

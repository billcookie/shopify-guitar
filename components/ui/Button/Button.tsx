import { ReactNode, ButtonHTMLAttributes } from "react"
import style from "./Button.module.css"
import cn from "classnames"


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[]
}

function Button ({children,
  className,
  ...rest}: Props) {


  return (
    <button
    className={cn(style.root, className)}
    type="button"
    {...rest}>
      {children}
    </button>
  )
}

export default Button

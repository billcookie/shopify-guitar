import {
  ButtonHTMLAttributes,
  ComponentType, HTMLAttributes, ReactNode } from "react"
import { LoadingDots } from "@components/ui"
import style from "./Button.module.css"
import cn from "classnames"


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[]
  isLoading?: boolean
  Component?: string | ComponentType<HTMLAttributes<HTMLElement>>
  href?: string

}

function Button ({
  children,
  className,
  isLoading = false,
  Component = "button",
  ...rest}: Props) {

    const rootClassName = cn(
      style.root,
      className,
      {
        [style.loading]: isLoading
      }
    )
  return (
    <Component
    className={rootClassName}
    type="button"
    {...rest}>
      {children}
      { isLoading &&
        <i className="pl-2 m-0 flex">
          <LoadingDots />
        </i>
      }
    </Component>
  )
}

export default Button

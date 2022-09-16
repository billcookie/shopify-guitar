
interface Props {
  children: React.ReactNode
  element?: React.ComponentType<React.HTMLAttributes<HTMLElement>>
}

function Container({children, element: Component = "div"}: Props) {
return (
  <Component className="px-6 mx-auto max-w-8xl">
    {children}
  </Component>
)

}

export default Container

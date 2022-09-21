import style from "./ProductSlider.module.css"
interface Props {
  children: React.ReactNode
}

function ProductSlider({children}: Props) {

  return (
    <div className={style.root}>
      <div className="h-full transition-opacity">
        {children}
      </div>
    </div>
  )

}

export default ProductSlider

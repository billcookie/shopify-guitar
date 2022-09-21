import style from "./ProductSlider.module.css"
import React, { Children, isValidElement } from "react"
import { useKeenSlider } from "keen-slider/react"
interface Props {
  children: React.ReactNode
}

function ProductSlider({children}: Props) {

  const [sliderRef, _] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      console.log("changing to slide: ", slider.track.details.rel)
    },
  })

  // documentation is outdated a little bit.

  return (
    <div className={style.root}>
      <div ref={sliderRef as any} className="keen-slider h-full transition-opacity">
        { Children.map(children, child => {
          if (isValidElement(child)) {
            return {
              ...child,
              props: {
                ...child.props,
                className: `${
                  child.props.className ? `${child.props.className}` : ""
                } keen-slider__slide`
              }
            }

            // return React.cloneElement(child, {
            //   className: `${
            //     child.props.className ? `${child.props.className}` : ""
            //   } keen-slider__slide`
            // })
          }

          return child
        }
        )}
      </div>
    </div>
  )
}

export default ProductSlider

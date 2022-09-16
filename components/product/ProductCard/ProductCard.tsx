import { Product } from "@common/types/product"
import Link  from "next/link"
import Image from "next/image"
import style from "./ProductCard.module.css"

interface Props {
  product: Product
}
const placeholderImage = "/product-image-placeholder.svg"
function ProductCard({product}: Props) {
  return (
    <Link href={`/products/${product.slug}`}>
      <a className={style.root}>
        <div className={style.productBg}></div>
        <div className={style.productTag}>
          <h3 className={style.productTitle}>
            <span>{product.name}</span>
          </h3>
          <span className={style.productPrice}>
            {product.price.value} {product.price.currencyCode}
          </span>
        </div>
        { product.image && (
          <Image
          className={style.productImage}
            alt={product.name ?? "Product image"}
            src={product.image[0].url ?? placeholderImage}
            height={540}
            width={540}
            quality="85"
            layout="responsive"
          />
        )
        }
      </a>
    </Link>
  )
}

export default ProductCard

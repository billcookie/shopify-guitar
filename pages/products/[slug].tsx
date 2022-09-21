import { Layout } from "@components/common"
import { getConfig } from "@framework/api/config"
import { ProductView } from "@components/product"
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next"
import {
  getAllProductsPaths,
  getProduct
} from "@framework/product"
import { Container } from "@components/ui"
// fetch all of the products slugs
export const getStaticPaths: GetStaticPaths = async () => {

  const config = getConfig()

  const { products } = await getAllProductsPaths(config)

  return {
    paths: products.map(p => ({params: {slug: p.slug}})),
    fallback: false
  }
}

// provide product spefici data to the page
export const getStaticProps = async ({
  params }: GetStaticPropsContext<{slug: string}>
) => {

  const config = getConfig()
  const { product } = await getProduct({
    config,
    variables: {slug: params!.slug}
  })
  return {
    props: {
      product
    }
  }
}

export default function ProductSlug({
  product }: InferGetStaticPropsType<typeof getStaticProps>
) {

  return (
    <>
      { product && <ProductView product={product} />}
    </>
  )
}

ProductSlug.Layout = Layout

// NOTE: make sure to assign a key for the iterations so that DOM manipulation can be applied.
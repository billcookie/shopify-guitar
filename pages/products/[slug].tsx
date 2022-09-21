import { Layout } from "@components/common"
import { getConfig } from "@framework/api/config"
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
    <Container>
      <p>id: {product?.id}</p>
      <p>name: {product?.name}</p>
      <p>price value: {product?.price.value}</p>
      <p>price currency: {product?.price.currencyCode}</p>
      <p>description: {product?.description}</p>

      <h1 className="mb-4">OPTIONS</h1>
      <div>
        { product?.options.map(option =>
          <div key="">
            <p>Name: {option.displayName}</p>
            { option.values.map(value =>
              <div key="">
                <p>Label: {value.label}</p>
                <p>Hex Color: {value.hexColor}</p>
              </div>
            )}
          </div>
        )}
      </div>
      <h1 className="mb-4">VARIANTS</h1>
      <div>
        { product?.variants.map(variant =>
          <div key="">
            <p>Variant Name: {variant.name}</p>
            { variant.options.map(vo =>
              <div key="">
                <p>Name: {vo.displayName}</p>
                { vo.values.map(value =>
                  <div key="">
                    <p>Label: {value.label}</p>
                    <p>Hexcolot: {value.hexColor}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </Container>
  )
}

ProductSlug.Layout = Layout

// NOTE: make sure to assign a key for the iterations so that DOM manipulation can be applied.

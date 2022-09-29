import type { InferGetStaticPropsType } from "next"
import { getAllProducts } from "@framework/product"
import { getConfig } from "@framework/api/config"
import { Layout }  from "@components/common"
import { ProductCard } from "@components/product"
import { Grid, Hero, Marquee } from "@components/ui"

// import play from "../playground";

export async function getStaticProps() {
  const config = getConfig()
  const products = await getAllProducts(config)

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60 // every four hours will check new products
  }
}

export default function Home({
  products
}: InferGetStaticPropsType< typeof getStaticProps>) {

  return (
    <>
      <Grid>
      { products.slice(0,3).map(product =>
        <ProductCard
          key={product.id}
          product={product}
        />
      )}
      </Grid>
      <Hero
      headline="Think, Create, Play"
      description="Here at Bill's Guitars we provide the highest and best sounding Fender guitars from around the world. Most of our guitars are made in either the Fender America factory or here in Japan. We not only sell just guitars, but all one needs to start the journey to begin learning how to play."
      />
      <Marquee>
      { products.slice(3,6).map(product =>
        <ProductCard
          key={product.id}
          variant="slim"
          product={product}
        />
      )}
      </Marquee>
      <Grid layout="B">
      { products.slice(3,6).map(product =>
        <ProductCard
          key={product.id}
          product={product}
        />
      )}
      </Grid>
      <Marquee variant="secondary">
      { products.slice(0,3).map(product =>
        <ProductCard
          key={product.id}
          variant="slim"
          product={product}
        />
      )}
      </Marquee>
    </>
  )
}
Home.Layout = Layout

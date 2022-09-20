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

  // useEffect(()  => {
  //   play();
  // }, [])

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
      headline="Cookies, Ice Cream and muffin"
      description="Cake sweet sweet roll marzipan carrot cake jelly-o fruitcake gingerbread. Chupa chups lemon drops bonbon bear claw shortbread gummi bears. Cake shortbread carrot cake candy brownie. Cake jujubes tart jelly chocolate cake sesame snaps chocolate bar liquorice. Candy donut muffin jujubes shortbread caramels shortbread powder fruitcake. Icing biscuit cake jelly croissant. Sweet roll marzipan jelly-o cookie cupcake."
      />
      <Marquee>
      { products.slice(0,3).map(product =>
        <ProductCard
          key={product.id}
          variant="slim"
          product={product}
        />
      )}
      </Marquee>
      <Grid layout="B">
      { products.slice(0,3).map(product =>
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

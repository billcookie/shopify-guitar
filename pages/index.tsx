import type { InferGetStaticPropsType } from "next"
import getAllProducts from "@framework/product/get-all-products"
// import play from "../playground";

export async function getStaticProps() {

  const products = await getAllProducts()

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
    <div>
      { JSON.stringify(products) }

    </div>
  )
}

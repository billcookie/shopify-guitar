import type { InferGetStaticPropsType } from "next"
import getAllProducts from "@framework/product/get-all-products"
import { getConfig } from "@framework/api/config"
import Layout from "../components/common/Layout/Layout"
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
    <div className="root">
      { JSON.stringify(products) }
    </div>
  )
}
Home.Layout = Layout

// export const metadata = {
//   title: 'Home'
// }
import { getLatestProducts } from "@/lib/actions/product.action";
import ProductList from "@/components/shared/product/product-list";
import { LATEST_PRODUCTS_LIMIT } from "@/lib/constans";

const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <>
      <ProductList data={latestProducts} title="New Arrival" limit={LATEST_PRODUCTS_LIMIT} />
    </>
  );
}

export default HomePage;
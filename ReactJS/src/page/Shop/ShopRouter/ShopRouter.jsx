import router from "../../../utils/Router";
import ProductList from "../ProductPage/ProductList/ProductList";
import ProductDetailShopPage from "../ProductPage/ProductDetail/productDetail";
const ShopRouter = [
  {
    path: router.ADMIN.productPage,
    component: <ProductList />,
  },
  {
    path: router.ADMIN.productDetail,
    component: <ProductDetailShopPage />,
  },
];
export default ShopRouter;

import router from "../../../utils/Router";
import ProductList from "../ProductPage/ProductList/ProductList";
const ShopRouter = [
  {
    path: router.ADMIN.productPage,
    component: <ProductList />,
  },
];
export default ShopRouter;

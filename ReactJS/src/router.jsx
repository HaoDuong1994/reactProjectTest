import MasterLayout from "./page/user/HomePage/masterlayout";
import HomePage from "./page/user/HomePage/homepage";
import { useLocation } from "react-router-dom";
import router from "./utils/Router";
import ShopRouter from "./page/Shop/ShopRouter/ShopRouter";
import ShopLayOut from "./page/Shop/ShopMasterLayout/ShopLayOut";
import Ordered from "./page/user/OrderedPage/Ordered";
import ProfilePage from "./page/user/profilePage/profilePage";
import { Routes, Route } from "react-router-dom";
import Login from "./page/user/LoginPage/Login";
import ProductPage from "./page/user/ProductPage/ProductPage";
import ProductInCartPage from "./Component/productInCart/productInCart";
import ProductDetails from "./page/user/ProductDetailPage/productDetail";
import SignUpPage from "./page/user/SignupPage/signup";
import PaymentPage from "./page/user/PaymentPage/paymentPage";
import OrderSucessPage from "./Component/orderSucessComponent/orderSucess";
import Shopsystem from "./page/user/ShopSystemPage/shopsystem";
import NewsPage from "./page/user/NewsPage/newsPage";
import NewsDetail from "./page/user/NewsPage/NewsDetailPage/NewsDetail";
const renderRouter = () => {
  const userRouter = [
    {
      path: router.USER.homePage,
      component: <HomePage />,
    },
    {
      path: router.USER.profilePage,
      component: <ProfilePage />,
    },
    {
      path: router.USER.productPage,
      component: <ProductPage />,
    },
    {
      path: "/product/:id",
      component: <ProductDetails />,
    },
    {
      path: router.USER.productInCartPage,
      component: <ProductInCartPage />,
    },
    {
      path: router.USER.userSignupPage,
      component: <SignUpPage />,
    },
    {
      path: router.USER.loginPage,
      component: <Login />,
    },
    {
      path: router.USER.paymentPage,
      component: <PaymentPage />,
    },
    {
      path: router.USER.orderSucessPage,
      component: <OrderSucessPage />,
    },
    {
      path: router.USER.orderedPage,
      component: <Ordered />,
    },
    {
      path: router.USER.shopsystem,
      component: <Shopsystem />,
    },
    {
      path: router.USER.newsPage,
      component: <NewsPage />,
    },
    {
      path: "/badminton-news/:id",
      component: <NewsDetail />,
    },
  ];
  return (
    <MasterLayout>
      <Routes>
        {userRouter.map((item) => {
          return (
            <Route
              key={Math.random()}
              path={item.path}
              element={item.component}></Route>
          );
        })}
      </Routes>
    </MasterLayout>
  );
};
const ShopRender = () => {
  return (
    <>
      <ShopLayOut>
        <Routes>
          {ShopRouter.map((route) => {
            return (
              <Route
                key={Math.random()}
                path={route.path}
                element={route.component}></Route>
            );
          })}
        </Routes>
      </ShopLayOut>
    </>
  );
};
const RouterCustom = () => {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith("/shopUser");
  return isAdminPath ? ShopRender() : renderRouter();
};
export default RouterCustom;

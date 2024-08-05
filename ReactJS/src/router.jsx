import MasterLayout from "./page/user/HomePage/masterlayout";
import HomePage from "./page/user/HomePage/homepage";
import router from "./utils/Router";
import ProfilePage from "./page/user/profilePage/profilePage";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
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
const RouterCustom = () => {
  return renderRouter();
};
export default RouterCustom;

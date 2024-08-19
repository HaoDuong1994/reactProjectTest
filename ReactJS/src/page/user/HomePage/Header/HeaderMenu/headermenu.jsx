import styles from "./headermenu.module.css";
import Router from "../../../../../utils/Router";
import { Link } from "react-router-dom";
import { useState } from "react";
function HeaderMenu() {
  const [menus, setMenu] = useState([
    {
      name: "HOME",
      path: Router.USER.homePage,
    },
    {
      name: "PRODUCT",
      path: Router.USER.productPage,
      childMenu: [
        {
          nameChild: "Racket",
          pathChild: "/product/racket",
        },
        {
          nameChild: "Shoes",
          pathChild: "/product/shoes",
        },
        {
          nameChild: "Tshirt",
          pathChild: "/product/tshirt",
        },
        {
          nameChild: "Pants",
          pathChild: "/product/pants",
        },
        {
          nameChild: "Accessory",
          pathChild: "/product/Accessory",
        },
      ],
    },
    {
      name: "SALE OFF",
      path: Router.USER.productPage,
    },
    {
      name: "BADMINTON NEWS",
      path: Router.USER.productPage,
    },
    {
      name: "POLICY",
      path: Router.USER.productPage,
    },
    {
      name: "INTRODUCTION",
      path: Router.USER.productPage,
    },
    {
      name: "CONTACT",
      path: Router.USER.productPage,
    },
  ]);
  return (
    <div>
      <nav className={styles.headerMenu}>
        <ul>
          {menus.map((menu) => {
            return (
              <li key={Math.random()}>
                <Link to={menu.path}>{menu.name}</Link>
                {menu.childMenu && (
                  <ul className={styles.menuChild}>
                    {menu.childMenu.map((childItem) => {
                      return (
                        <li key={Math.random()}>
                          <Link to={childItem.pathChild}>
                            {childItem.nameChild}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
export default HeaderMenu;

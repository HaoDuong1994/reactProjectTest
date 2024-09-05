import { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { tabRacket } from "../../../../../Component/tabItemComponent/tabItem";
import styles from "./homeProduct.module.css";
import getAllProduct from "../../../../../utils/getProduct";
import ProductTab from "../../../../../Component/productConponent/product";
function HomeProduct() {
  //USE effect
  const [isActive, setActive] = useState(0);
  const [allProduct, setAllProduct] = useState();
  const [productFilterCondition, setFilterCondition] = useState("racket");
  const product = allProduct
    ? allProduct.data.filter((product) => {
        return product.productType === productFilterCondition;
      })
    : null;

  const tabsName = [
    {
      id: 1,
      name: "Racket",
    },
    {
      id: 2,
      name: "Shoes",
    },
    {
      id: 3,
      name: "Pant",
    },
    {
      id: 4,
      name: "Shirt",
    },
    {
      id: 5,
      name: "Backpack",
    },
  ];
  const handleActiveClass = (index) => {
    setActive(index);
  };
  useEffect(() => {
    const productApi = async () => {
      const data = await getAllProduct();
      setAllProduct(data);
    };
    productApi();
  }, []);
  return (
    <div className={styles.container}>
      <h3>Special product</h3>
      <nav>
        <ul>
          {tabsName.map((tab, index) => {
            return (
              <li
                className={`${styles.btn} ${
                  isActive === index ? styles.active : ""
                }`}
                key={index}
                onClick={() => {
                  handleActiveClass(index);
                  setFilterCondition(tab.name.toLowerCase());
                }}>
                {tab.name}
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={styles.content}>
        {product ? (
          product.map((item, index) => {
            return <ProductTab key={index} styles={styles} data={item} />;
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
export default HomeProduct;

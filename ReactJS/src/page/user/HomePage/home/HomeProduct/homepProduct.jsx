import { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { tabRacket } from "../../../../../Component/tabItemComponent/tabItem";
import styles from "./homeProduct.module.css";
function HomeProduct() {
  //USE effect
  useEffect(() => {
    fetch("http://localhost:3000/product")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div className={styles.container}>
      <h3>Special product</h3>
      <nav>
        <ul>
          <li
            onClick={() => {
              alert("hello");
            }}>
            23
          </li>
          <li>123123</li>
          <li>1231</li>
          <li>123123</li>
          <li>1231231</li>
        </ul>
      </nav>
    </div>
  );
}
export default HomeProduct;

import styles from "./Img.module.css";
import { useState, useEffect } from "react";
function ImgRender(props) {
  const { data } = props;
  console.log(">>>>> data img >>>>>>>.", data);
  const mainImg = data ? data.img : "";
  const [showImg, setShowImg] = useState(mainImg);
  useEffect(() => {
    setShowImg(mainImg);
  }, [mainImg]);
  // let imgStorage = data ? data.imgStorage : [];
  // const [showImg, setShowImg] = useState(mainImg);
  // const handleShowImg = (url) => {
  //   setShowImg(url);
  // };
  let imgDetails = data ? data.imgDetail : [];
  const handleShowImg = (url) => {
    setShowImg(url);
  };
  return (
    <div className={styles.container}>
      <div className={styles.mainImg}>
        <img src={showImg} />
      </div>
      <div className={styles.ItemImg}>
        <img
          onClick={() => {
            handleShowImg(data.img);
          }}
          src={data ? data.img : ""}
        />
        {imgDetails.map((img, index) => {
          return (
            <img
              onClick={() => {
                handleShowImg(img.url);
              }}
              key={index}
              src={img ? img.url : ""}
            />
          );
        })}
      </div>
    </div>
  );
}
export default ImgRender;

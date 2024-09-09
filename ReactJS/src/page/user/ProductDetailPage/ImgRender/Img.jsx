import styles from "./Img.module.css";
import { useState, useEffect } from "react";
function ImgRender(props) {
  const { data } = props;
  const mainImg = data ? data.img : "";
  useEffect(() => {
    setShowImg(mainImg);
  }, [mainImg]);
  let imgStorage = data ? data.imgStorage : [];
  const [showImg, setShowImg] = useState(mainImg);
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
        {imgStorage.map((img, index) => {
          return (
            <img
              onClick={() => {
                handleShowImg(img.src);
              }}
              key={index}
              src={img ? img.src : ""}
            />
          );
        })}
      </div>
    </div>
  );
}
export default ImgRender;

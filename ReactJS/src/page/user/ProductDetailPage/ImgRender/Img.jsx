import styles from "./Img.module.css";
import { useState } from "react";

function ImgRender() {
  const [urlImg, setUrlImg] = useState(
    "https://cdn.shopvnb.com/uploads/gallery/vot-cau-long-yonex-nanoflare-370-speed-blue-chinh-hang_1722473541.webp"
  );
  const handleClickImg = (url) => {
    setUrlImg(url);
  };
  return (
    <div className={styles.container}>
      <div className={styles.mainImg}>
        <img src={urlImg} />
      </div>
      <div className={styles.ItemImg}>
        <img
          onClick={() => {
            handleClickImg(
              "https://cdn.shopvnb.com/uploads/gallery/vot-cau-long-yonex-nanoflare-370-speed-blue-chinh-hang_1722473541.webp"
            );
          }}
          src="https://cdn.shopvnb.com/uploads/gallery/vot-cau-long-yonex-nanoflare-370-speed-blue-chinh-hang_1722473541.webp"
        />
        <img
          onClick={() => {
            handleClickImg(
              "https://cdn.shopvnb.com/uploads/gallery/vot-cau-long-yonex-nanoflare-370-speed-blue-chinh-hang-1_1722473549.jpg"
            );
          }}
          src="https://cdn.shopvnb.com/uploads/gallery/vot-cau-long-yonex-nanoflare-370-speed-blue-chinh-hang-1_1722473549.jpg"
        />
        <img src="https://cdn.shopvnb.com/uploads/gallery/vot-cau-long-yonex-nanoflare-370-speed-blue-chinh-hang-1_1722473549.jpg" />
        <img src="https://cdn.shopvnb.com/uploads/gallery/vot-cau-long-yonex-nanoflare-370-speed-blue-chinh-hang-1_1722473549.jpg" />
      </div>
    </div>
  );
}
export default ImgRender;

import styles from "../../home/HomeCarasoul/Carousel.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function HomeCaracel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const items = [
    {
      name: "racket",
      imgUrl:
        "https://cdn.shopvnb.com/uploads/gallery/vot-cau-long-lining-axforce-40-black-chinh-hang_1713726243.webp",
    },
    {
      name: "backpack",
      imgUrl:
        "https://cdn.shopvnb.com/uploads/gallery/balo-cau-long-lining-abss275-5-chinh-hang_1694650930.webp",
    },
    {
      name: "Shoes",
      imgUrl:
        "https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-lining-ayzu001-2-do-noi-dia-trung_1714329666.webp",
    },
    {
      name: "Shirt",
      imgUrl:
        "https://cdn.shopvnb.com/uploads/gallery/ao-cau-long-yonex-ac119-nu-cam_1722221932.webp",
    },
    {
      name: "Badminton Bad",
      imgUrl:
        "https://cdn.shopvnb.com/uploads/gallery/tui-cau-long-lining-abju015-1-den-noi-dia-trung_1719956946.jpg",
    },
    {
      name: "Pant",
      imgUrl:
        "https://cdn.shopvnb.com/uploads/gallery/quan-cau-long-yonex-q7-nam-do_1715643927.webp",
    },
  ];
  return (
    <div className={styles.container}>
      <Carousel className={styles.carousel} responsive={responsive}>
        {items.map((item) => {
          return (
            <div key={Math.floor()} className={styles.ItemContainer}>
              <img className={styles.ImgItem} src={item.imgUrl} />
              <h6 className={styles.titleItem}>{item.name}</h6>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
export default HomeCaracel;

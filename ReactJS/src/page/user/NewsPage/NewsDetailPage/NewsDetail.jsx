import { useParams } from "react-router-dom";
import { getNewsDetail } from "../../../../utils/getNewsAPI";
import { useState, useEffect } from "react";
import styles from "./NewsDetail.module.css";
function NewsDetail() {
  const idNews = useParams().id;
  console.log(idNews);
  const [getNews, setNews] = useState(null);
  console.log(getNews);
  useEffect(() => {
    const getnewsDetail = async () => {
      const data = await getNewsDetail(idNews);
      setNews(data.data);
    };
    getnewsDetail();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.newsWrapper}>
        {getNews ? <h2>{getNews.title}</h2> : "Loading ..."}
        <p>20/5/2015</p>
        {getNews ? <img src={getNews.titleImg} /> : "Loading ..."}
        {getNews ? <p>{getNews.descriptionNews}</p> : "Loading ..."}
        {getNews ? <p>{getNews.content}</p> : "Loading ..."}
      </div>
    </div>
  );
}
export default NewsDetail;

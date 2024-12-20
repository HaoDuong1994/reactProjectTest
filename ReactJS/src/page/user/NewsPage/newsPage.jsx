import styles from "./newsPage.module.css";
import { getNewsApi } from "../../../utils/getNewsAPI";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
function NewsPage() {
  console.log(1);
  console.log(moment().format());
  const [listNews, setListNews] = useState([]);
  console.log(listNews);
  useEffect(() => {
    const getNews = async () => {
      const data = await getNewsApi();
      setListNews(data.data);
    };
    getNews();
  }, []);
  return (
    <div className={styles.container}>
      {listNews != []
        ? listNews.map((news) => {
            return (
              <Link to={`/badminton-news/${news.newsId}`}>
                <div className={styles.newsItem}>
                  <img src={news.titleImg} />
                  <div className={styles.newsContent}>
                    <div className={styles.blockContent}>
                      <h6 className={styles.hidden}>{news.title}</h6>
                      <p className={styles.day}>
                        <span>{moment(news.created_at).format("LLL")}</span>
                      </p>
                      <p className={styles.hiddenTitle}>{news.content}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })
        : null}
    </div>
  );
}
export default NewsPage;

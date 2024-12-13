import { useParams } from "react-router-dom";
function NewsDetail() {
  const idNews = useParams().id;
  console.log(idNews);
  return <div>Hello news details</div>;
}
export default NewsDetail;

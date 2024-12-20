import axios from "axios";
const getNewsApi = async () => {
  try {
    const response = await axios.get("http://localhost:3000/news");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const getNewsDetail = async (id) => {
  try {
    console.log(id);
    const response = await axios.get(`http://localhost:3000/news?newsId=${id}`);
    return response.data;
  } catch (error) {
    console.log("error get news detail", error);
  }
};
export { getNewsApi, getNewsDetail };

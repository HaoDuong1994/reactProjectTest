import axios from "axios";
const getNewsApi = async () => {
  try {
    const response = await axios.get("http://localhost:3000/news");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export { getNewsApi };

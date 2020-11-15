import axios from "axios";

export default axios.create({
  baseURL: `http://d93152030961.ngrok.io/api/v1/hotel/hotels`,
});

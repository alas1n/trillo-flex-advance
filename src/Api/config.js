import axios from "axios";

export default axios.create({
  baseURL: `http://3a564ad9296c.ngrok.io/api/v1/hotel/hotels`,
});

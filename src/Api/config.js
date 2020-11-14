import axios from "axios";

export default axios.create({
  baseURL: `http://bd339afb236b.ngrok.io/api/v1/hotel/hotels`,
});

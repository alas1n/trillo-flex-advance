import axios from 'axios';

export default axios.create({
  baseURL: `http://3f61d75e3a44.ngrok.io/api/v1/hotel/hotels`
});
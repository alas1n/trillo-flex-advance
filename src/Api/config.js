import axios from 'axios';

export default axios.create({
  baseURL: `http://241722f76037.ngrok.io/api/v1/hotel/hotels`
});
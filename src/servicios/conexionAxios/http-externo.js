import axios from 'axios';

const httpExterno = axios.create({
  baseURL: 'https://comparador-back-e86e3c459d29.herokuapp.com/', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default httpExterno;

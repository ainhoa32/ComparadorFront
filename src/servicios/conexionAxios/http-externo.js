import axios from 'axios';

const httpExterno = axios.create({
  baseURL: 'https://git.heroku.com/comparador-back.git/', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default httpExterno;

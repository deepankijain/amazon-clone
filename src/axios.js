import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://clone-53e92.herokuapp.com',
});

export default instance;

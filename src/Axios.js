import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://aprabhakaran-indumathy-apgarland-backend.onrender.com',
});

export default instance;

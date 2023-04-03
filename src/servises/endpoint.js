import axios from 'axios';

const KEY = '8e2876d58e8eb34e584ff42c33d08e8b';
const BASE_URL = 'https://api.themoviedb.org/3';

const endpoint = axios.create({
  baseURL: BASE_URL,
});

export { KEY, endpoint };

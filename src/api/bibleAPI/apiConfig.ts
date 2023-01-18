import axios from 'axios';
import { BIBLE_API_URL, BIBLE_API_KEY } from '../../../environment';

const instance = axios.create({
  baseURL: BIBLE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'api-key': BIBLE_API_KEY,
  },
});

export default instance;

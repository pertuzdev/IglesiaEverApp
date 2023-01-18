import axios from 'axios';
import { EVER_API_URL } from '../../../environment';

const instance = axios.create({
  baseURL: EVER_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;

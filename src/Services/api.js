import axios from 'axios';
import { ApiServer } from '~/config';

const api = axios.create({
  baseURL: ApiServer.baseURL
});

export default api;

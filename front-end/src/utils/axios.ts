import axios from "axios";
import { REST_API_URL } from '../redux/constants';

const instance = axios.create({
  baseURL: REST_API_URL,
});

instance.defaults.withCredentials = true;

export default instance;

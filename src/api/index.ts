import axios from 'axios';
import authInterceptor from './axiosAuthInterceptor';

const instance = axios.create({baseURL: 'https://sherlogram.herokuapp.com'});

authInterceptor(instance);

export default instance;

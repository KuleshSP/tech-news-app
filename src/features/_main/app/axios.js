import axios from 'axios';

const requester = axios.create({
  baseURL: 'https://newsapi.org',
  headers: {
    Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    'Content-Type': 'application/json;charset=UTF-8'
  }
});

export default requester;

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '01c491546d3a1d8e207993a1fec3826c',
    language: 'ko-KR'
  }
});

export default instance;
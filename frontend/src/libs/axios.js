import axios from 'axios';

export const customAxios = axios.create({
  baseURL: "/", // 기본 서버 주소 입력
  headers: {
    // access_token: cookies.get('access_token'),
  },
});
import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
export const API_KEY = '?key=gewgffwegegpgewg2jsabbasxxxxxxzlqq'

export function fetchPosts() {
  const url = `${ROOT_URL}/posts${API_KEY}`;
  const request = axios.get(url);
  console.log('url', url, 'req', request);
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

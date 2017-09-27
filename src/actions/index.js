import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
export const API_KEY = '?key=gewgffwegegpgewg2jsaasxxxxxxzlqq'

export function fetchPosts() {
  const request = `${ROOT_URL}/posts${API_KEY}`
  return {
    type: FETCH_POSTS,
    payload: axios.get()
  }
}

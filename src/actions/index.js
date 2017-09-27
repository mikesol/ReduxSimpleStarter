import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';
export const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
export const API_KEY = '?key=gewgffwegegpgewg2jsabbasxxxxxxzlqq'

export function fetchPosts() {
  const url = `${ROOT_URL}/posts${API_KEY}`;
  const request = axios.get(url);
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(values, callback = ()=>{}) {
  const url = `${ROOT_URL}/posts${API_KEY}`;
  const request = axios.post(url, values)
    .then((res)=>callback(res));
  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPost(id) {
  const url = `${ROOT_URL}/posts/${id}${API_KEY}`;
  const request = axios.get(url);
  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost(id, callback = ()=>{}) {
  const url = `${ROOT_URL}/posts/${id}${API_KEY}`;
  const request = axios.delete(url)
    .then((res)=>callback(res));
  return {
    type: DELETE_POST,
    payload: request
  }
}

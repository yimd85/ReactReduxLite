import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/';
const API_KEY = '?key=BOBO1234';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/api/posts${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

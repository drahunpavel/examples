// import axios from 'axios';
import axios from '../../core/axios';

export const postAPI = {
    get: async () => axios.get('posts'),
};

// export default {
//     get: id => axios.get(`/posts${id ? '/' + id : ''}`),
//     remove: id => axios.delete(`/posts/${id}`),
// };
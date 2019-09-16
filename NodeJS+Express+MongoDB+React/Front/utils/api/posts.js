import axios from 'axios';

export const postAPI = {
    get: async () => axios.get('public/post.json'),
};

// export default {
//     get: id => axios.get(`/posts${id ? '/' + id : ''}`),
//     remove: id => axios.delete(`/posts/${id}`),
// };
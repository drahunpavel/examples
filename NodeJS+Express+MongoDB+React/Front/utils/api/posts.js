import axios from 'axios';

export default {
    get: axios.get('public/post.json'),
};

// export default {
//     get: id => axios.get(`/posts${id ? '/' + id : ''}`),
//     remove: id => axios.delete(`/posts/${id}`),
// };
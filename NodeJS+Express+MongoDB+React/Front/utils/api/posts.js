// import axios from 'axios';
import axios from '../../core/axios';

export const postAPI = {
    getAll: async () => axios.get('posts'),
    getOnly: async (id) => axios.get('/post/' + id),
};
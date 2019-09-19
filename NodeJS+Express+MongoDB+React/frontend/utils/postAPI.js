import axios from '../core/axios';

export const postAPI = {
    getAll: async () => axios.get('posts'),
    getOnly: async (id) => axios.get('/posts/' + id),
    remove: async (id) => axios.delete('/posts/' + id),
    update: async (id) => axios.put('/posts/' + id + '/edit')
};
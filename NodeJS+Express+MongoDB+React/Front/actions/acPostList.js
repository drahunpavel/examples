// import * as postAPI from '../utils/api/posts';
import { postAPI } from '../utils/api/posts';

// const PostsListActions = {
//     setItems: items => (console.log('setItems', items),{
//       type: 'POSTS:SET_ITEMS',
//       payload: items,
//     }),
//     appendItem: item => ({
//       type: 'POSTS:APPEND_ITEM',
//       payload: item,
//     }),
//     removeItem: id => ({
//       type: 'POSTS:REMOVE_ITEM',
//       payload: id,
//     }),
//     fetchItem: id => dispatch => {
//         postAPI.get(id).then(({ data }) => {
//         dispatch(PostsListActions.appendItem(data));
//       });
//     },
//     fetchRemoveItem: id => dispatch => {
//       if (global.confirm('Вы действительно хотите удалить статью?')) {
//         dispatch(PostsListActions.removeItem(id));
//         postAPI.remove(id);
//       }
//     },
//     fetchItems: () => dispatch => {
//         postAPI.get().then(({ data }) => {
//           console.log('---------')
//         dispatch(PostsListActions.setItems(data));
//       });
//     },
//   };

//   export default PostsListActions;
export const setItems = (value) => (dispatch) => {
    dispatch({
        type: 'POSTS:SET_ITEMS',
        payload: value,
    });
};
 
export const appendItem = (item) => ({
      type: 'POSTS:APPEND_ITEM',
      payload: item,
});

export const fetchItems = () => (dispatch) => {
    postAPI.getAll().then(({ data }) => {
        dispatch(setItems(data));
    });
};

export const fetchItem = (id) => (dispatch) => {
    postAPI.getOnly(id).then(({ data }) => {
        dispatch(appendItem(data));
    });
};

export const removeItem = (id) => ({
      type: 'POSTS:REMOVE_ITEM',
      payload: id,
});

export const fetchRemoveItem = (id) => (dispatch) => {
      if (global.confirm('Вы действительно хотите удалить статью?')) {
        dispatch(removeItem(id));
        postAPI.remove(id);
      }
};

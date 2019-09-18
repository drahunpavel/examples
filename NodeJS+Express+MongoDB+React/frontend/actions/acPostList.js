
import { postAPI } from '../utils/postAPI';

//запрос на сервер. Получение всех данных
export const fetchItems = () => (dispatch) => {
    postAPI.getAll().then(({ data }) => {
        dispatch(setItems(data));
    });
};

//получает единственный объект из массива
export const fetchItem = (id) => (dispatch) => {
    postAPI.getOnly(id).then(({ data }) => {
        dispatch(appendItem(data));
    });
};

//удаляет запись из бд 
export const fetchRemoveItem = (id) => (dispatch) => {
    if (global.confirm('Вы действительно хотите удалить статью?')) {
      dispatch(removeItem(id));
      postAPI.remove(id);
    }
};

//сохрание данных в редакс
export const setItems = (value) => (dispatch) => {
    dispatch({
        type: 'POSTS:SET_ITEMS',
        payload: value,
    });
};

//записывает выбранный объект в редакс
export const appendItem = (item) => ({
    type: 'POSTS:APPEND_ITEM',
    payload: item,
});

//удаляет запись из редакса
export const removeItem = (id) => ({
    type: 'POSTS:REMOVE_ITEM',
    payload: id,
});


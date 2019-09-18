const initialState = {
    items: null,
    item: null
};

export default (state = initialState, action) => {
    const {type, payload} = action;

    switch(type){
        case 'POSTS:SET_ITEMS':
            return{
                ...state,
                items: payload
            };

        case 'POSTS:APPEND_ITEM':
            return{
                ...state,
                item: payload,
            }
        case 'POSTS:REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter(item => item._id !== payload),
        };

        default: return state;
    };  
};
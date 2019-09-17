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
                item: payload
            }

        default: return state;
    };  
};
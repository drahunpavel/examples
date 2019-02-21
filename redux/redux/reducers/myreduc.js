//значение по умолчанию
let initialState = {
	// items:{
	// 	data: {},
	// 	loading: false,
	// 	isLoaded: false,
    // },
    val:{}
};

//export default (state = initialState, {type,payload}) - сокращенная запись
export default (state = initialState, action) => {
	switch(action.type) {
		
		case "SAVE_MY": {
			return {
				...state,
                val:action.payload
			}
		}
		default: return state;
	}
	return state;
};


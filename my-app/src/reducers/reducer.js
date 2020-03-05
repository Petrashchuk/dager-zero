const initialState = {
    names:['Taras',
    'Petro',
    'Pavlo',
],
};
export default function (state = initialState, action) {
    switch (action.type) {
        case'ADD': {
            return {
                names: [...state.names, action.payload]
            }
            }
        case'REMOVE':{
            return {
                ...state.names,
                names: [...action.payload]
            }
        }
        default: {
            return state
        }
    }
}
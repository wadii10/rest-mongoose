import { ADD, DELETE, GET, GETUSER, UPDATE } from "./actionTypes";

export const init = {
    users : null
};

export const reducer = ( state = init, {type, payload}) => {
    switch (type) {
        case GET: return {
            ...state, users:payload
        };

        case ADD: return {
            ...state, users:[...state.users, payload]
        };

        case DELETE: return {
            ...state, users:state.users.filter(el => el._id !== payload)
        };

        case UPDATE: return {
            ...state, users:state.users.map( el => el._id === payload._id ?payload :el)
        };

        case GETUSER: return {
            ...state, users:payload
        };

        default:
            return state;
    }
}
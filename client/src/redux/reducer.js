import { ADD, GET } from "./actionTypes";

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

        default:
            return state;
    }
}
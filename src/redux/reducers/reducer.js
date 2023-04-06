import { ADD_COUNT } from "../actions/add_count";
import { GET_COUNT } from "../actions/get_count";

const defaultState = {
    count: 0,
} 

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_COUNT": return {...state, count: state.count + action.countload};
        case "GET_COUNT": return {...state, count: state.count - action.countload};

        default:
            return state
    }
}
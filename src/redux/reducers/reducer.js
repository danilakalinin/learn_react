const defaultState = {
    count: 0,
} 



const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_COUNT": return {...state, count: state.count + action.countload};
        case "GET_COUNT": return {...state, count: state.count - action.countload};

        default:
            return state
    }
}

export default reducer
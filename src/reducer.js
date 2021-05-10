export const initialState = {
    user: null,
};

export const actionTypes = {
    SET_USER: "SET_USER",
};

const reducer = (state, action) => {
    console.log(action);
    /// we are listentining fro the actions dispatching
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                // everything what is in the state
                ...state,
                // and updated user from the payload we have dispatched
                user: action.user
            };

        default:
            return state
    }
};

export default reducer;
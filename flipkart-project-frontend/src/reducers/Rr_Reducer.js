
export function rar(state = null, action) {
    switch (action.type) {
        case "SET_RR":
            return action.payload;

        // case "LOGOUT_USER":
        //     return null;

        default:
            return state;
    }
}

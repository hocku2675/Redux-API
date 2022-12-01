const DEFAULT_STATE = {
    data: [],
    error: null,
    loading: false,
}

export const usersReducer = (state = DEFAULT_STATE, { type, payload }) => {
    switch (type) {
        case "USERS/FETCH/START":
            return {
                ...state,
                loading: true,
                error: null,
            }
        case "USERS/FETCH/SUCCESS":
            return {
                ...state,
                loading: false,
                data: payload,
            }
        case "USERS/FETCH/ERROR":
            return {
                ...state,
                loading: false,
                error: payload,
            }
        default:
            return state
    }
}

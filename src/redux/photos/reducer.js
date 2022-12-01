const DEFAULT_STATE = {
    data: [],
    error: null,
    loading: false,
}

export const photosReducer = (state = DEFAULT_STATE, { type, payload }) => {
    switch (type) {
        case "PHOTOS/FETCH/START":
            return {
                ...state,
                loading: true,
                error: null,
            }
        case "PHOTOS/FETCH/SUCCESS":
            return {
                ...state,
                loading: false,
                data: payload,
            }
        case "PHOTOS/FETCH/ERROR":
            return {
                ...state,
                loading: false,
                error: payload,
            }
        default:
            return state
    }
}

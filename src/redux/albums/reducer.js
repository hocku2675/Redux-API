const DEFAULT_STATE = {
    data: [],
    error: null,
    loading: false,
}

export const albumsReducer = (state = DEFAULT_STATE, { type, payload }) => {
    switch (type) {
        case "ALBUMS/FETCH/START":
            return {
                ...state,
                loading: true,
                error: null,
            }
        case "ALBUMS/FETCH/SUCCESS":
            return {
                ...state,
                loading: false,
                data: payload,
            }
        case "ALBUMS/FETCH/ERROR":
            return {
                ...state,
                loading: false,
                error: payload,
            }
        default:
            return state
    }
}

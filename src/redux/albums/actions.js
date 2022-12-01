import { getAlbums } from "../../utils/api"

export const fetchAlbums = () => async (dispatch) => {
    dispatch({ type: "ALBUMS/FETCH/START" })
    try {
        const albums = await getAlbums()
        dispatch({ type: "ALBUMS/FETCH/SUCCESS", payload: albums })
    } catch (error) {
        dispatch({ type: "ALBUMS/FETCH/ERROR", payload: error.message })
    }
}

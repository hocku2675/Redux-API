import { getPhotos } from "../../utils/api"

export const fetchPhotos = () => async (dispatch) => {
    dispatch({ type: "PHOTOS/FETCH/START" })
    try {
        const photos = await getPhotos()
        dispatch({ type: "PHOTOS/FETCH/SUCCESS", payload: photos })
    } catch (error) {
        dispatch({ type: "PHOTOS/FETCH/ERROR", payload: error.message })
    }
}

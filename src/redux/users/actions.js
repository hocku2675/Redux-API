import { getUsers } from "../../utils/api"

export const fetchUsers = () => async (dispatch) => {
    dispatch({ type: "USERS/FETCH/START" })
    try {
        const users = await getUsers()
        dispatch({ type: "USERS/FETCH/SUCCESS", payload: users })
    } catch (error) {
        dispatch({ type: "USERS/FETCH/ERROR", payload: error.message })
    }
}

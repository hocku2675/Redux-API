import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function useApiData(selector, action) {
    const { data, loading, error, ...state } = useSelector(selector)
    const dispatch = useDispatch()
    useEffect(() => {
        if (!data.length && !error && !loading) {
            dispatch(action())
        }
    }, [action, data.length, dispatch, error, loading])
    return { data, loading, error, ...state }
}

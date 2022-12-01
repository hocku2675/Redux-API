import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import { usersReducer } from "./users/reducer"
import { composeWithDevTools } from "@redux-devtools/extension"
import { albumsReducer } from "./albums/reducer"
import { photosReducer } from "./photos/reducer"

const rootReducer = combineReducers({
    users: usersReducer,
    albums: albumsReducer,
    photos: photosReducer,
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

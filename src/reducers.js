import { combineReducers } from "redux"

import postsReducer from "./pages/front-page/reducer";
import articleReducers from "./pages/article/reducer"

export default combineReducers({
   listArticle: postsReducer,
   articleDetails: articleReducers
})
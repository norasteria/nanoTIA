import {fetchSnippet} from "../../api"

export const fetchPost = (page = 1) => async (dispatch, getState) => {
   const {listArticle} = getState()
   const posts = await fetchSnippet(page, listArticle.posts);

   dispatch({
      type: "FETCH_POST",
      payload: {
         posts,
         loading: false
      }
   })
}
import {fetchArticle} from "../../api"

export const getArticle = (slug) => async dispatch => {
   const articles = await fetchArticle(slug)

   dispatch({
      type: "FETCH_ARTICLE",
      payload: {
         articles,
         loading: false
      }
   })
}
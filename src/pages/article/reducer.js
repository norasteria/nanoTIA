const initialState = {
   articles: {},
   loading: true
}

export default (state, action) => {
   switch (action.type) {
      case "FETCH_ARTICLE":
         return {
            ...state,
            ...action.payload
         }
   
      default:
         return {
            ...state,
            ...initialState
         }
   }
}
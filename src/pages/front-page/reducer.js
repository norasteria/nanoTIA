const initialState = {
   loading: true,
   posts: [
      {
         categories: [],
         seo: { description: "", image: "", title: "" },
         slug: ""
      }  
   ]
}

export default (state, action) => {
   switch (action.type) {
      case "FETCH_POST":
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
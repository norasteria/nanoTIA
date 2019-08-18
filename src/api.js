import axios from "axios"

const tiaApi = "https://id.techinasia.com/wp-json/techinasia/2.0/posts/"

export const fetchSnippet = (page, currentState = []) => new Promise(resolve => {
   axios
      .get(`${tiaApi}?page=${page}&per_page=20`)
      .then(({data}) => {
         const snippet = data.posts.map(post => ({
            seo: post.seo,
            slug: post.slug,
            categories: post.ga_type,
            author: post.author,
            date: post.date
         }));

         const newData = currentState.concat(snippet)

         resolve(newData.filter(data => data.slug))
      })
})

export const fetchArticle = (slug) => new Promise(resolve => {
   axios
      .get( tiaApi + slug )
      .then(({data}) => resolve(data.posts[0]))
})
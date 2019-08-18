import React, { Component } from 'react'
import {connect} from "react-redux"
import {fetchPost} from "./action"

import Body from "../../components/ArticleBody"
import PostItem from "../../components/PostListItem"
import Loader from "../../components/PostListLoader"
import ButtonTop from "../../components/ScrollTopButton"

class FrontPage extends Component {
  state = {
    reqPage: 1,
    visibleBtnTop: false,
    maxDisplay: 0
  }

  componentDidMount(){
    this.props.fetchPost()

    // scroll page record
    window.addEventListener('scroll',this.handleScroll)
  }

  handleScroll = () => {
    if(document.documentElement.scrollTop >= this.state.maxDisplay + window.innerHeight){

      this.setState(({reqPage, maxDisplay}) => {
        reqPage++;
        this.props.fetchPost(reqPage)

        return {
          reqPage,
          maxDisplay: maxDisplay + window.innerHeight 
        }
      })
    }
      this.setState({
        visibleBtnTop: document.documentElement.scrollTop > 800
      })
  }

  scrollTopClick = () => {
    document.documentElement.scrollTop = 0;
  }

  render() {
    const { posts, loading } = this.props
    
    return (
      <Body>
        {
          loading? <Loader loading={loading}/> : (
            posts.map(post => (
              <PostItem 
                categories={post.categories} 
                content={post.seo} 
                url={post.slug} 
                author={post.author} 
                updateTime={post.date}
                />
            ))
          )
        }
        <ButtonTop onClick={this.scrollTopClick} visible={this.state.visibleBtnTop}/>
      </Body>
    )
  }
}

const mapStateToProps = ({listArticle}) => {
  return {
    posts: listArticle.posts,
    loading: listArticle.loading
  }
}


export default connect(
  mapStateToProps,
  {fetchPost}
)(FrontPage)
import React, { Component } from 'react'
import {connect} from "react-redux"

import Body from "../../components/ArticleBody"
import Cover from "../../components/ArticleCover"
import {getArticle} from "./action"
class Article extends Component {

  componentDidMount(){
    const {slug} = this.props.match.params
    this.props.getArticle(slug)
  }

  render() {
    const {content, featured_image, ga_type, title} = this.props.article;

    return (
      <Body className="tia-content">
        <a href={`https://id.techinasia.com/category/${ga_type}`}>
          {ga_type && ga_type.toUpperCase()}
        </a>
        <h1 dangerouslySetInnerHTML={{__html: title}} style={{fontFamily: "Proxima Nova Bold", marginTop: "10px"}}/>
        <Cover>
          {featured_image && <img src={featured_image.source} alt={featured_image.title} style={{width: "100%"}}/>}
        </Cover>
        <div  dangerouslySetInnerHTML={{ __html: content }} />
      </Body>
    )
  }
}

const mapStateToProps = ({articleDetails}) => {
  return {
    article: articleDetails.articles
  }
}

export default connect(mapStateToProps, {getArticle})(Article)
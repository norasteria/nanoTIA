import React from "react"
import {Row, Col, Container} from "react-bootstrap"
import styled from "styled-components"
import moment from "moment"


const Snippet = styled.div`
   display: inline-block;
   margin-bottom: 10px;
`

const Title = styled.a`
   font-family: "Proxima Nova Bold";
   color: #333;
   font-size: 20pt
   &:hover{
      color: #bf0016;
      text-decoration: none;
   }

   &:visited{
      color: #999;
   }
`

const Divider = styled.hr`
   color: #E0E0E0;
   text-align: center;
`

export default ({categories, content, url, author, updateTime}) => {
   return (
      <Container style={{marginBottom: 20}}>       
         <Row>
            <Col>            
               <a href={`https://id.techinasia.com/category/${categories}`} style={{color: "#bf0016", fontSize: 12}}>
                  {categories.toUpperCase()}
               </a>
            </Col>
         </Row>        
         <Row>
            <Col md={8}>         
               <Snippet>
                  <Title href={`/${url}`}>{content.title}</Title>
                  <div> {content.description} </div>
                  <Divider/>
                  <Row>
                     <Col md={1}>
                        <img 
                           style={{width: 28, height:28, borderRadius: "50%"}}
                           src={author.avatar_url} 
                           alt={author.display_name}/> 
                     </Col>
                     <Col style={{fontSize: 12}}>
                        <a href={author.author_url} style={{color: "#bf0016"}}>{author.display_name}</a> <br/>
                        <span style={{color: "#999"}}>{moment(updateTime).fromNow()}</span>
                     </Col>
                  </Row>
               </Snippet>
            </Col>
            <Col md={4}>
               <img style={{width: "100%"}} src={content.image} role="presentation"/>
            </Col>
         </Row>
      </Container>
   )
}
import React from "react"
import styled from "styled-components";

const ButtonTop = styled.span`
   bottom: 2.5em;
   color: #999;
   font-size: 18px;
   font-weight: 600;
   position: fixed;
   right: 20px;
   text-transform: uppercase;
   transition: .25s;
   z-index: 1;
   cursor: pointer;
   transform: translateZ(0);
`
export default ({onClick, visible}) => {

   const showBtn = visible? "block" : "none"

   return (
      <ButtonTop onClick={onClick} style={{display: showBtn}}>
         <i className="fa fa-chevron-circle-up"/>
         Top
      </ButtonTop>
   )
}
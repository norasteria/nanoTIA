import React from "react"
import Loader from "react-spinners/BeatLoader"


export default ({loading}) => (
   loading ? (
      <div style={{ textAlign: "center" }}>
         <Loader 
            loading={true}
            color={"#bf0016"}
            sizeUnit={"px"}
            size={30}
         />
         <br/>
         F e t c h i n g  &nbsp;&nbsp;&nbsp;  d a t a . . . 
      </div>
   ): null
)
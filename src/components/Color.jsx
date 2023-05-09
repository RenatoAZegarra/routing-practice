import React from "react"
import { useParams } from "react-router-dom"

const Color = () => {
    const {word, color1, color2} = useParams();
    return (
        <div style ={{color: color1, backgroundColor: color2, textAlign:'center'}}>
            <h1>The Word is : {word} </h1>
        </div>
    )
}

export default Color
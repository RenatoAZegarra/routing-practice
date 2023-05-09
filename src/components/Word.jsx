import React from "react"
import { useParams } from "react-router-dom"

const Word = () => {
    const {word} = useParams();
    return (
        <div style={{textAlign:'center'}}>
            <h1>The Word is : {word} </h1>
        </div>
    )
}

export default Word
import React from "react"
import { useParams } from "react-router-dom"

const Number = () => {
    const {number} = useParams();
    return (
        <div style={{textAlign:'center'}}>
            <h1>The Number is : {number} </h1>
        </div>
    )
}

export default Number
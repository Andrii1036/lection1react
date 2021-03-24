import React from 'react'
import './ContentBody.css'
export const ContentBody = (props)=>{
    return(
        <div className = 'ContentBody'>
        {props.children}
        </div>
    )
}
import React from 'react'
import './MainBody.css'
export const MainBody = (props)=>{
    return (
        <div className = 'MainBody'>
            {props.children}
        </div>
    )
}
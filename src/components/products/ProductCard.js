import React from 'react'
import './ProductCard.css'
import './ProductCardImg.css'
export const ProductCard = (props)=>{
    return(
        <div className = 'ProductCard'>
            <h6>{props.title}</h6>
            <img className = 'ProductCardImg' src = {props.url}></img>
            <p>{props.description}</p>
            <p>{props.price}</p>
        </div>
    )
}
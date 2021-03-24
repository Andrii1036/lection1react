import React from 'react'
import './Article.css'
import './ArticleImg.css'
export const Article = (props) => {
    return (
        <div className='Article'>
            <h3>{props.title}</h3>
            <img className='ArticleImg' src={props.url} />
            <p>{props.description}</p>
        </div>
    )
}
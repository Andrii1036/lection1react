import React from 'react'
import './Header.css'
export const Header = (props) => {
    return (
        <header className='Header'>
            <img src={props.src} alt="" />
            {props.children}
            <input type="text"></input>
        </header>
    )
}
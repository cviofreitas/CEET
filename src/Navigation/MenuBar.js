import React from 'react'
import './MenuBar.css'
const MenuBar = (props) => {
    const message = props.message
    // purpose is the function the button will serve.
    const purpose = props.purpose
    return (
        <div className='menu-bar-container '>
            <button className='menu-bar-button scale-down-click' onClick={() => setTimeout(() => purpose(), "500")} >
                {message}
            </button>
        </div>
    )
}

export default MenuBar
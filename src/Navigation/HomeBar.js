import React from 'react'
import './MenuBar.css'
import './HomeBar.css'
import AddIcon from '@mui/icons-material/Add';
const HomeBar = (props) => {
    const message = props.message
    // purpose is the function the button will serve.
    const purpose = props.purpose
    return (
        <div className='menu-bar-container'>
            <div className='menu-bar-button display-flex justify-content-center' >
                <div className='new-trip-button-container'>
                    <button className='new-trip-button scale-down-click'>
                        <AddIcon fontSize='large' />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default HomeBar
import React from 'react'
import MenuBar from '../Navigation/MenuBar'
import { useNavigate } from 'react-router-dom';
import FirstAttemp from './FirstAttemp';
const Home = () => {

    const navigate = useNavigate();

    // Change the URL to "/new-page"
    const changeURL = () => {
        navigate('/create-profile');
    };

    return (
        <div className='page-container'>
            <div className='page-greeting center-y'>
                <h1>Welcome to <strong className='logo'>ceet</strong> </h1>
                <h4>
                    Travel budgeting made easy.
                </h4>
            </div>
            <MenuBar message='get started >' purpose={changeURL} />
        </div>
    )
}

export default Home
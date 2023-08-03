import React from 'react'
import { useSelector } from 'react-redux'
import HomeBar from '../Navigation/HomeBar';
import MenuBar from '../Navigation/MenuBar';
import './Home.css';
import TripsArray from './TripsArray'
const Home = () => {
    const trips = useSelector(state => state.userTrips)
    const user = useSelector(state => state.userProfile)

    const userFirstname = user.name.first
    return (
        <div className='home-page'>
            <div className='page-greeting'>
                <h2>
                    Welcome, {userFirstname}
                </h2>
            </div>
            <div className='header dashboard'>
                <h2 className='font2'>
                    Dashboard
                </h2>
                <p>
                    Your trips
                </p>
            </div>
            <TripsArray trips={trips} />
            <HomeBar />
        </div>
    )
}

export default Home
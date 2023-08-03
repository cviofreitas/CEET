import React from 'react'
import { useSelector } from 'react-redux';
import TripSummary from './TripSummary';


const TripsArray = ({ trips }) => {
    const countryOfOrigin = useSelector(state => state.userProfile.country)



    let currentCurrency = new Intl.NumberFormat('en-US', {
        style: "currency",
        currency: `${countryOfOrigin}`,
        maximumFractionDigits: 2,
    });


    return (
        <div style={{
            marginBottom: '400px'
        }}>
            {trips.map(trip => <TripSummary trip={trip} />
            )}
        </div>
    )
}

export default TripsArray
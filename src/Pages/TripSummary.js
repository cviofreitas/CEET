import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import './TripSummary.css'

import EditIcon from '@mui/icons-material/Edit';

import getSpentAmount from '../helperFunctions/getSpentAmount';
const TripSummary = ({ trip }) => {
    const [tripInfo, setTripInfo] = useState(trip)
    // user's current currency
    const countryOfOrigin = useSelector(state => state.userProfile.country)
    // trip's country's currency
    let countryTraveled = tripInfo.countryCurrency

    const totalSpent = getSpentAmount(trip)
    console.log(totalSpent)
    useEffect(() => {
        setTripInfo(trip)
    }, [trip])

    let currentCurrency = new Intl.NumberFormat('en-US', {
        style: "currency",
        currency: `${countryOfOrigin}`,
        maximumFractionDigits: 2,
    });

    let travelCurrency = new Intl.NumberFormat('en-US', {
        style: "currency",
        currency: `${countryTraveled}`,
        maximumFractionDigits: 2,
    });

    return (
        <div className='trip-summary display-flex gap20 align-center'>
            <button className='edit-trip-button scale-down-click'><EditIcon /></button>
            <div style={{ width: '65%' }}>
                <h3 className='font2'>
                    {trip.tripName.toUpperCase()}
                </h3>
                <div className='display-flex justify-content-between'>
                    <div className=''>
                        <p>
                            budget
                        </p>
                        <p>
                            <b>{currentCurrency.format(trip.budget)}</b>
                        </p>
                    </div>
                    <div className=''>
                        <p>
                            spent
                        </p>
                        <p>
                            <b>{currentCurrency.format(totalSpent)}</b>
                        </p>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default TripSummary
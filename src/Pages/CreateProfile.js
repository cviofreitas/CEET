import React, { useState } from 'react'
import MenuBar from '../Navigation/MenuBar'
import { useDispatch } from 'react-redux'
import { updateUserProfile } from '../ReduxToolKit/Reducers/userProfileSlice'
import './CreateProfile.css'
import { countryCurrencies } from '../Local/countryCurrencies'
import { useNavigate } from 'react-router-dom';
const CreateProfile = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        country: 'USD',
    });

    // Function to handle form input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    // Function to change page URL
    const navigate = useNavigate();
    const changeURL = () => {
        navigate('/');
    };
    // Function to handle form submission
    const handleSubmit = () => {
        dispatch(updateUserProfile({
            name: { first: formData.firstName, last: formData.lastName },
            email: formData.email,
            country: formData.country
        }))
        changeURL()
    };


    return (
        <div className='page-container' >
            <div style={{
                position: 'relative',
                top: '50vh',
                transform: 'translateY(-70%)'
            }}>
                <div className='page-greeting' >
                    <h1><strong className='logo'>ceet</strong></h1>
                    <h1>
                        Lets get started
                    </h1>
                    <h4>
                        Create your profile.
                    </h4>
                </div>
                <form className='create-profile-form display-flex flex-direction-column'>
                    <label className='display-flex flex-direction-column'>
                        NAME
                        <div className='display-flex gap20 '>
                            <input className='input-1 name-input'
                                placeholder='first'
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                            />
                            <input className='input-1 name-input'
                                placeholder='last'
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                            />
                        </div>
                    </label>
                    <br />
                    <label className='display-flex flex-direction-column'>
                        EMAIL
                        <input className='input-1'
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </label>
                    <br />
                    <label className='display-flex flex-direction-column'>
                        COUNTRY
                        <select className='input-1 custom-select'
                            type="input"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                        >
                            {countryCurrencies.map((countryCurrency) => {
                                const country = Object.keys(countryCurrency)[0];
                                const currency = countryCurrency[country];
                                return <option value={currency}>{country}</option>
                            }
                            )}
                        </select>
                    </label>
                    <br />
                </form>
            </div>
            <MenuBar message='create profile' purpose={handleSubmit} />
        </div>
    )
}

export default CreateProfile
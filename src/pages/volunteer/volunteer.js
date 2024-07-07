import React, { useState } from 'react';
import Select from 'react-select';
import './volunteer.css';

const Volunteer = () => {

    return (
        <div className='volunteer-body-container'>
            <div className='top-left'></div>
            <div className='bottom-right'></div>
            <div className='volunteer-body'>
                <div className='volunteer-blurb'>
                    <h2>VOLUNTEER</h2>
                    <p>We're always looking for new people to help run some our events.</p>
                    <p>Fill out the form on the right to get involved.</p>
                </div>
                <div className='volunteer-form-container'>
                    <div className='input-name-container'><input type="text" label="Name" placeholder="Name" /></div>
                    <div className='input-email-container'><input type="email" label="Email" placeholder="Email" /></div>
                    <div className='input-number-container'>
                        <input type="tel" label="Phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                        <input type="number" label="Age" placeholder='24' />
                    </div>
                    <Select
                        name="event"
                        options={[
                        { value: 'Sandy Hill Super League', label: 'Sandy Hill Super League' },
                        { value: 'Sandy Hill Bball', label: 'Sandy Hill Bball' },
                        ]}
                        isClearable
                    />
                    <div className='submit-button-container'>
                        <button className='submit-button'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Volunteer;

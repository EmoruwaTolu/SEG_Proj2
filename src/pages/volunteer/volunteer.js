import React, { useState } from 'react';
import Select from 'react-select';
import './volunteer.css';
import { useTranslation } from 'react-i18next';

const Volunteer = () => {
    const { t } = useTranslation();

    return (
        <div className='volunteer-body-container'>
            <div className='top-left'></div>
            <div className='bottom-right'></div>
            <div className='volunteer-body'>
                <div className='volunteer-blurb'>
                    <h2>VOLUNTEER</h2>
                    <p>{t("We're always looking for new people to help run some our events.")}</p>
                    <p>{t("Fill out the form on the right to get involved.")}</p>
                </div>
                <div className='volunteer-form-container'>
                    <div className='input-name-container'>
                        <p>{t('Name')}</p>
                        <input type="text" label="Name" placeholder="Name" />
                    </div>
                    <div className='input-email-container'>
                        <p>Email</p>
                        <input type="email" label="Email" placeholder="Email" />
                    </div>
                    <div className='input-number-container'>
                        <div>
                            <p>Phone #</p>
                            <input type="tel" label="Phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                        </div>
                        <div>
                            <p>Age</p>
                            <input type="number" label="Age" placeholder='24' />
                        </div>
                        
                    </div>
                    <div className='event-selector'>
                        <p>Event</p>
                        <Select
                            name="event"
                            options={[
                            { value: 'Sandy Hill Super League', label: 'Sandy Hill Super League' },
                            { value: 'Sandy Hill Bball', label: 'Sandy Hill Bball' },
                            ]}
                            isClearable
                        />
                    </div>
                    
                    <div className='submit-button-container'>
                        <button className='submit-button'>{t('Submit')}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Volunteer;

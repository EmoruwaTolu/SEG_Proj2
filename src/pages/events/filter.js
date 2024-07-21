import React, { useState } from 'react';
import Select from 'react-select';
import './filter.css';

const Filter = ({ filters, updateFilters }) => {

    const [displaySports, setDisplaySports] = useState(false);

    const handleFilterChange = (selectedOption, { name }) => {
        if(selectedOption !== null){
            if(selectedOption.value !== 'Library'){
                setDisplaySports(true)
            }
            else{
                setDisplaySports(false)
            }
        }
        else{
            setDisplaySports(false)
        }
        console.log(displaySports)
        updateFilters({ ...filters, [name]: selectedOption ? selectedOption.value : null });
    };

    return (
        <div className='filter-container'>
        <h2>FILTER</h2>
        <div className='facilities-header'>
            <p>Facilities</p>
            <Select
                name="category"
                options={[
                { value: 'Library', label: 'Library' },
                { value: 'Sports', label: 'Sports' },
                ]}
                onChange={handleFilterChange}
                isClearable={!displaySports}
            />
        </div>
        {displaySports && (
            <div className='sports-filter-container'>
                <p>Sports</p>
                <Select
                    name="sportsType"
                    options={[
                    { value: 'Basketball', label: 'Basketball' },
                    { value: 'Soccer', label: 'Soccer' },
                    { value: 'Volleyball', label: 'Volleyball' },
                    ]}
                    onChange={handleFilterChange}
                    isClearable
                />
            </div>
        )}
        </div>
    );
};

export default Filter;

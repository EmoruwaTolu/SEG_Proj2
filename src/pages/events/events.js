import React, {useState} from 'react';
import Filter from './filter';
import './events.css';

const sampleData = [
    { id: 1, name: 'Ultimate Bingo', category: 'Library', date: '12/03/2024' , start: '5:00 p.m.', end: '8:00 p.m.'},
    { id: 2, name: 'Sandy Hill Super League (Rec)', category: 'Sports', date: '13/03/2024', sportsType: 'Soccer' },
    { id: 3, name: 'Sandy Hill Bball (Rec)', category: 'Sports', date: '16/03/2024', sportsType: 'Basketball' },
    { id: 4, name: 'Sandy Hill Bball (Comp)', category: 'Sports', date: '18/03/2024', sportsType: 'Basketball' },
    { id: 5, name: 'Sandy Hill Super League (Comp)', category: 'Sports', date: '14/03/2024', sportsType: 'Soccer' },
];
  

const Events = () => {

    const [data, setData] = useState(sampleData);
    const [filteredData, setFilteredData] = useState(sampleData);
    const [filters, setFilters] = useState({});

    const updateFilters = (newFilters) => {
        console.log(newFilters)
        setFilters(newFilters);
        filterData(newFilters);
    };

    const filterData = (filters) => {
        let filtered = data;

        for (const key in filters) {
            if (filters[key]) {
                filtered = filtered.filter(item => item[key] === filters[key]);
            }
        }
        console.log(filtered)

        setFilteredData(filtered);
    };
    return (
      <div className="events-body-container">
          <div className='top-left'></div>
          <div className='bottom-right'></div>
          <div className='events-body'>
                <div className='events-filter'>
                    <Filter filters={filters} updateFilters={updateFilters} />
                </div>
                <div className='events-list-container'>
                    <ul>
                        {filteredData.map(item => (
                        <li key={item.id}>{item.name}</li>
                        ))}
                    </ul>
                </div>
          </div>
      </div>
    );
}
  
export default Events;
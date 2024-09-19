import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './filter.css';

function Filter() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:4001/api/api/blog')
      .then((res) => {
        setItems(res.data);
      })
      .catch((error) => {
        console.log('this error is', error);
      });
  }, []);

  return (
    <div className='filter'>
      <input
        className='filter-input'
        placeholder='Search for items...'
        onChange={(e) => setSearch(e.target.value)}
      />
      {items
        .filter((item) => {
          return search.toLowerCase() === ''
            ? item
            : item.name.toLowerCase().includes(search);
        })
        .map((item, index) => (
          <div className='item' key={index}>
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Description:</strong> {item.description}</p>
            <p><strong>Tools:</strong> {item.tools}</p>
            <p><strong>Master:</strong> {item.master}</p>
            <hr className='divider' />
          </div>
        ))}
    </div>
  );
}

export default Filter;

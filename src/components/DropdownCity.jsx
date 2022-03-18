import React from 'react';

const DropdownCity = ({ cities, setCities, cityChosen, setCityChosen }) => {
    const handleChange = (e) => {
        setCityChosen(e.target.value);
    }

  return (
    <select name="countries" id="" placeholder='Country' onChange={handleChange} className='dropdown'>
        <option value="select" selected>City</option>
        {cities?.map(city => (
            <option key={city} value={city}>{city}</option>
        ))}
    </select>
  )
}

export default DropdownCity
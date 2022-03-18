import React, { useEffect } from 'react';

const DropdownCountry = ({ countryName, countryChosen, setCountryChosen }) => {
    const handleChange = (e) => {
        setCountryChosen(e.target.value);
    }
if (countryName) {
  return (
    <select name="countries" id="" placeholder='Country' onChange={handleChange} className='dropdown'>
        <option value="select" selected>Country</option>
        {countryName?.map(country => (
            <option key={country.name} value={country.name}> {country.name}</option>
        ))}
    </select>
  )
}
  
}

export default DropdownCountry
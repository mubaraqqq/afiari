import React from 'react';

const DropdownState = ({ countryStates, stateChosen, setStateChosen }) => {
    const handleChange = (e) => {
        setStateChosen(e.target.value);
    }

  return (
    <select name="countries" id="" placeholder='Country' onChange={handleChange} className='dropdown'>
        <option value="select" selected>State</option>
        {countryStates?.map(state => (
            <option key={state.name} value={state.name}>{state.name}</option>
        ))}
    </select>
  )
}

export default DropdownState
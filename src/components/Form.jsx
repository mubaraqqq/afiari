import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Typography, Card, TextField } from '@mui/material';
import TableData from './TableData';
import axios from 'axios';
import DropdownCountry from './DropdownCountry';
import DropdownState from './DropdownState';
import DropdownCity from './DropdownCity';


const Form = ({ countries, setCountries }) => {
    const [email, setEmail] = useState('');

    const [countryStates, setCountryStates] = useState([]);
    const [cities, setCities] = useState([]);

    const [countryChosen, setCountryChosen] = useState('');
    const [stateChosen, setStateChosen] = useState('');
    const [cityChosen, setCityChosen] = useState('');

    const [entry, setEntry] = useState([]);
    
    // const countryName = countries?.map(country => country.name);

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    }   

    function handleSubmit (e) {
      e.preventDefault();
      setEntry([...entry, {"country": countryChosen, "state": stateChosen, "city": cityChosen, "email": email}]);
    }

    useEffect(() => {
      setEntry(JSON.parse(localStorage.getItem('Entries')));
    }, [])

    useEffect(() => {
      localStorage.setItem('Entries', JSON.stringify(entry));
    }, [entry])
   
    useEffect(() => {
      axios.post('https://countriesnow.space/api/v0.1/countries/states', {
        "country": `${countryChosen}`
      })
      .then((res) => {
        setCountryStates(res.data.data.states);
      })
      .catch((err) => console.log(err))
    }, [countryChosen]);

    useEffect(() => {
      axios.post('https://countriesnow.space/api/v0.1/countries/state/cities', {
        "country": `${countryChosen}`,
        "state": `${stateChosen}`
      })
        .then((res) => {
          setCities(res.data.data);
        })
        .catch((err) => console.log(err))
    }, [stateChosen, countryChosen]);
   

    if (countries && countryStates) {
      return (
          <div className='form'>
            <div className="ellipse1"></div>
            <div className="ellipse2"></div>
              <Card className='form-container'>
                  <Typography variant='h6' component='h6' sx={{fontWeight: 'bold', padding: '.5em 0', fontWeight: '600', fontSize: '31px', lineHeight: '46px', color: '#1C1F1E'
                  }}>Let's know you more</Typography>
                  <span className='subtext'>Fill the appropriate details</span>
                  <form action="" onSubmit={handleSubmit} className='form-actual'>
                    <TextField sx={{width: '350px', borderRadius: '10px'}} id="outlined-basic" label="Email" variant="outlined" className='email' value={email} onChange={handleEmailChange}/>
                    <DropdownCountry className='dropdown' countryName={countries} countryChosen={countryChosen} setCountryChosen={setCountryChosen}/>
                    <DropdownState className='dropdown' countryStates={countryStates} stateChosen={stateChosen} setStateChosen={setStateChosen}/>
                    <DropdownCity className='dropdown' cities={cities} cityChosen={cityChosen} setCityChosen={setCityChosen}/>
                    <button type="submit">Submit</button>
                  </form>   
              </Card>
              <TableData entries={entry}/>
          </div>
      )
    }

  
}

export default Form
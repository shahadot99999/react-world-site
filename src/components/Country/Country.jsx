import { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountry}) => {
    //console.log(country);
    const {name, flags,population , area, cca3}=country;

    const [visited, setVisited]= useState(false);

    const handleVisited = ()=>{
        // setVisited(true);
        setVisited(!visited);
    }

    //console.log(handleVisitedCountry);

    const passWithParams = ()=> handleVisitedCountry(country);
    return (
        <div className={`country ${visited ? 'visited': 'non-visited'}` }>
            <h3 style={{color: visited ? 'purple': 'black'}}>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={()=> handleVisitedCountry(country)}>Mark Visited</button>
            <br/>
            <button onClick={handleVisited}>{visited ? 'Visited': 'Going'}</button>
            {visited ? 'i have visited this country':'i want to visit'}
        </div>
    );
};

export default Country;
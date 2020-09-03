import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
    const { name, region, capital, population } = props.country

    const history = useHistory();
    const countryHendlersClick = (countryName) =>{
        history.push(`/country/${countryName}`)
    }

    const countryStyle = {
        border: '1px solid red',
        margin: '10px',
        padding: '20px',
        borderRadius: '20px',

    }

    return (
        <div style={countryStyle}>
            <h3>{name}</h3>
            <p>Capital: {capital}</p>
            <p>Region: {region}</p>
            <p>Population: {population}</p>
            <Link to={`/country/${name}`}>Show Country Details</Link>
            <br/>
            <br/>
            <button onClick={() => countryHendlersClick(name)}>Click Me</button>
        </div>
    );
};

export default Country;
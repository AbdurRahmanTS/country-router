import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const CountryDetail = () => {
    const {countryName} = useParams()
    const [country, setCountry] = useState([])
    console.log(country)
    const {name, region, capital, population, flag} = country
    useEffect( () => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
    }, [])

    const countryDetailStyles = {
        padding: '40px',
        margin: '50px', 
        border: '1px solid purple', 
        borderRadius: '20px', 
        backgroundColor: 'cyan', 
        textAlign: 'center'
    }
    const countryImgStyle = {
        width: '300px',
        height: '200px'
    }
    return (
        <div style={countryDetailStyles}>
            <img style={countryImgStyle} src={flag} alt={`Flag of ${name}`}/>
            <h1>{name}</h1>
            <h2>Capital: {capital}</h2>
            <h3>Population: {population}</h3>
            <p>Region: {region}</p>
        </div>
    );
};

export default CountryDetail;
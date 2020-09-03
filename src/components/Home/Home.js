import React, { useState, useEffect } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countries, setCountries] = useState([])

    useEffect( () => {
        const url = `https://restcountries.eu/rest/v2/all`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Total Country: {countries.length}</h1>
            {
                countries.map(country => <Country key={country.name} country={country}></Country>)
            }
        </div>
    );
};

export default Home;
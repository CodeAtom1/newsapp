import React, { useEffect, useState } from "react";
import axios from 'axios';


const Weather = (props) =>
{
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    const API_KEY= "d7e494a58b2e423bac184257243108";
    const city="London";

    useEffect(()=>{
        const fetchWeather = async() => {
            try{
                const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`);
                setWeather(response.data);
            }
            catch(err){
                setError('Could not fetch weather data');
            }
        };
        fetchWeather();
    },[]);

    if(error)
    {
        return (<div>{error}</div>);
    }

    if(!weather)
    {
        return (<div>Loading...</div>);
    }

    return (
    <div style={styles.widget}>
        <h3 style={styles.city}>{weather.location.name}</h3>
        <p style={styles.temp}>{Math.round(weather.current.temp_c)}°C</p>
        <p style={styles.desc}>{weather.current.condition.text}</p>
        <p style={styles.otherInfo}>Humidity: {weather.current.humidity}%</p>
        <p style={styles.otherInfo}>Wind: {weather.current.wind_mph} m/s</p>
    </div>)
};

const styles = {
    widget: {
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      maxWidth: '200px',
      textAlign: 'center',
      backgroundColor: '#f0f0f0',
      margin: '50px'
    },
    city: {
      margin: '0',
      fontSize: '1.5em',
      fontWeight: 'bold',
    },
    temp: {
      fontSize: '2em',
      margin: '10px 0',
    },
    desc: {
      fontSize: '1em',
      textTransform: 'capitalize',
    },
    otherInfo: {
      fontSize: '0.9em',
      margin: '5px 0',
    },
  };
  
export default Weather;
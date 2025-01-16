import React, { Component } from "react";
import axios from "axios";

class WeatherClassWidget extends Component {


  /*
    It's called before component is mounted.
    Used to initialize state and method binding.
  */
    constructor(){
        super();
        this.state = {
            weather: null,
            error: null,
        };
    }

    /*
      It's called immediately after component is mounted(inserted into DOM tree).
      Used to initiate API calls, perform any DOM manipulations.
    */
    componentDidMount()
    {
        this.fetchWeather();
    }

    shouldComponentUpdate(nextProps, nextState) {
      // Only update if count changes
      return nextState.count !== this.state.count;
    }

    componentDidUpdate(prevProps, prevState) {
      console.log('Component did update');
    }

    componentWillUnmount() {
      console.log('Component will unmount');
    }

    fetchWeather = async () => {
        const API_KEY = "d7e494a58b2e423bac184257243108";
        const city = "London";

        try{
            var resposne =await axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`);
            this.setState({weather: resposne.data});
        }
        catch(err){
            this.setState({error: err});
        }
    }

    render(){

        const {weather, error} = this.state;

        if(error)
        {
            return (<div style={styles.error}>{this.state.error}</div>);
        }

        if(!weather)
        {
            return (<div style={styles.error}>Loading...</div>);
        }

        return (
          <div style={styles.widget}>
              <h3 style={styles.city}>{weather.location.name}</h3>
              <p style={styles.temp}>{Math.round(weather.current.temp_c)}°C</p>
              <p style={styles.desc}>{weather.current.condition.text}</p>
              <p style={styles.otherInfo}>Humidity: {weather.current.humidity}%</p>
              <p style={styles.otherInfo}>Wind: {weather.current.wind_mph} m/h</p>
          </div>);
    }
}


const styles = {
    widget: {
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      maxWidth: '200px',
      textAlign: 'center',
      backgroundColor: '#f0f0f0',
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
    error:{
      margin: '100px 200px'
    }
  };

export default WeatherClassWidget;
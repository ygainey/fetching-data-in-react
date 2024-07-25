import { useState, useEffect } from 'react'
import './App.css'
import * as weatherService from './services/weatherSevice';
import WeatherSearch from './components/WeatherSearch/WeatherSearch';
import WeatherForecast from './components/WeatherForecast/WeatherForecast';


const App = () => {
  const [weather, setWeather] = useState({})

  const fetchData = async (city) => {
    const data = await weatherService.show(city);
    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_c,
      condition: data.current.condition.text,
    };
    setWeather(newWeatherState);
  };



  return (
    <main>
      <h1>Weather API</h1>
      <WeatherSearch fetchData={fetchData}/>
      <WeatherForecast weather={weather}/>
    </main>
  );
};

export default App;

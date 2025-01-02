import React, { useEffect, useState } from 'react'
import { FaReact } from "react-icons/fa";
import TopButtons from './components/TopButtons';
import Inputs from './components/inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TempAndDetails from './components/TempAndDetails';
import Forecast from './components/Forecast';
import {DateTime} from 'luxon';

import getFormattedWeatherData from './services/weatherService';

const App = () => {

  const [query,setQuery]= useState({q:'gaya'})
  const [units,setUnits]= useState('metric')
  const [Weather,setWeather]= useState(null)


  const getWeather= async()=>{
    await getFormattedWeatherData({... query,units}).then(data =>{
      setWeather(data)
    });
    // console.log(data);
    
  };

  useEffect(() =>{
    getWeather();
  },[query,units]);

  const formatBackground= ()=>{
    if (!Weather) return 'from-cyan-600 to-blue-700'
    const threshold=units==='metric' ? 20:60;
    if(Weather.temp <= threshold) return "from-cyan-600 to-blue-700";
     return "from-yellow-600 to-orange-700";
    
  }


  // getWeather();
  return (
    <div className={`mx-auto max-w-screen-xl max-h-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-lg shadow-gray-400 ${formatBackground()}`}>
     <TopButtons setQuery={setQuery}/>
     <Inputs setQuery={setQuery} setUnits={setUnits}/>

     {
      Weather && (
        <>
        <TimeAndLocation weather={Weather}/>
        <TempAndDetails weather={Weather}/>
        <Forecast title='3 hours step forecast' data={Weather.hourly}/>
        <Forecast title='daily forecast' data={Weather.daily}/>
        </>
      )
     }
     

    </div>
  )
}

export default App

import React,{useState, useEffect} from 'react'
import HourlyDisplay from './HourlyDisplay'
import './hourly.css'

const HourlyWeather = ({hourly}) => {

    return (
        <div>
            
            <div className="hourly">
                {hourly.map((hour, i) => <HourlyDisplay temp={hour.temp} main={hour.weather[0].main} time={i+1}/>)}
            </div>

        </div>
    )
}

export default HourlyWeather

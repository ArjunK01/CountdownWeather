import React from 'react'
import DailyDisplay from './DailyDisplay'

const DailyWeather = ({daily}) => {
    return (
        <div style={{marginBottom: "24px"}}>

            {daily.map((day,i) => <DailyDisplay highTemp={day.temp.max} lowTemp={day.temp.min} time={i+1} main={day.weather[0].main} description={day.weather[0].description}/>)}
        </div>
    )
}

export default DailyWeather

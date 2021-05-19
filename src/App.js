import './App.css';
import API_KEY from './keys';
import { useState, useEffect } from 'react'
import ZipCodeForm from './Components/ZipCodeForm';
import CurrentWeather from './Components/CurrentWeather';
import HourlyWeather from './Components/HourlyWeather';
import DailyWeather from './Components/DailyWeather';
import CityForm from './Components/CityForm';


function App() {
  const [weather, setWeather] = useState(null)
  const [hourly, setHourly] = useState(null)
  const [zip, setZip] = useState(null)
  const [city, setCity] = useState(null)
  const [coordinates, setCoordinates] = useState(null)
  const [toggle, setToggle] = useState(false)

  const changeZip = z => {
    setZip(z)
  }
  const changeCity = c => {
    setCity(c)
  }

  useEffect(() => {
    if (zip) {
      const url = new URL("https://api.openweathermap.org/data/2.5/weather")
      url.searchParams.append("appid", API_KEY)
      url.searchParams.append("zip", zip)
      url.searchParams.append("units", "imperial")
      fetch(url).then(res => res.json()).then(obj => setWeather(obj))
    }
  }, [zip])

  useEffect(() => {
    if (city) {
      const url = new URL("https://api.openweathermap.org/data/2.5/weather")
      url.searchParams.append("appid", API_KEY)
      url.searchParams.append("q", city)
      url.searchParams.append("units", "imperial")
      fetch(url).then(res => res.json()).then(obj => setWeather(obj))
    }
  }, [city])

  useEffect(() => {
    if (coordinates) {
      const url = new URL("https://api.openweathermap.org/data/2.5/onecall")
      url.searchParams.append("appid", API_KEY)
      url.searchParams.append("lon", coordinates[0])
      url.searchParams.append("lat", coordinates[1])
      url.searchParams.append("exclude", "current,minutely,alerts")
      url.searchParams.append("units", "imperial")
      fetch(url).then(res => res.json()).then(obj => setHourly(obj))
    }
  }, [coordinates])

  useEffect(() => {
    if (weather) {
      let temp = []
      temp.push(weather.coord.lon)
      temp.push(weather.coord.lat)
      setCoordinates(temp)
    }
  }, [weather])

  useEffect(() => {
    // console.log(hourly)
  }, [hourly])

  return (
    <div className="cont">
      <div style={{ display: "flex", margin: "0px"}}>
        <div style={{ marginRight: "32px" }}>
          <ZipCodeForm changeZip={changeZip} />
        </div>
        <CityForm changeCity={changeCity} />
      </div>
      {weather && <CurrentWeather temp={weather.main.temp} desc={weather.weather[0].description} type={weather.weather[0].main} />}
      {/* {hourly ? <pre>{JSON.stringify(hourly, undefined, 4)}</pre> : null} */}
      {hourly &&
        <div style={{ display: "flex" }}>
          <div onClick={() => setToggle(false)} style={{ marginRight: "24px", cursor: "pointer" }}>
            <h3 style={{ marginBottom: "8px", color: !toggle ? "black" : "grey" }}>
              HOURLY WEATHER
              </h3>
          </div>
          <div onClick={() => setToggle(true)} style={{ cursor: "pointer" }}>
            <h3 style={{ marginBottom: "8px", color: !toggle ? "grey" : "black" }}>DAILY WEATHER </h3>
          </div> </div>}
      {
        toggle ? (hourly && <DailyWeather daily={hourly.daily} />) : (hourly && <HourlyWeather hourly={hourly.hourly} />)
      }
    </div>
  );
}

export default App;

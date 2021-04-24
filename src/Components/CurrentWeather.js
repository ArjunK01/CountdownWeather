import React, { useState, useEffect } from 'react'
import "./current.css"
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import CloudIcon from '@material-ui/icons/Cloud';
import InvertColorsIcon from '@material-ui/icons/InvertColors';

const CurrentWeather = ({ temp, desc, type }) => {

    const [icon, setIcon] = useState("")
    useEffect(() => {
        console.log(desc)
    }, [])

    useEffect(() => {
        console.log("TYPE", type)
        switch (type) {
            case "Clear":
                setIcon(<WbSunnyIcon />)
                break;
            case "Clouds":
                setIcon(<CloudIcon />)
                break;
            case "Rain":
                setIcon(<InvertColorsIcon />)
                break

        }
    }, [])
    return (
        <div>

            <h3 style={{ marginBottom: "8px" }}>CURRENT WEATHER </h3>

            <div className="current">
                <p className="temp"><span style={{ fontSize: "32px", fontWeight: "bold" }}> {temp}°</span> farenheit</p>
                <p className="desc">{desc.toUpperCase()}</p>
            </div>
            <hr class="solid"></hr>


        </div>
    )
}

export default CurrentWeather

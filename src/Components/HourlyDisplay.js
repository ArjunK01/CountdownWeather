import React, { useEffect, useState } from 'react'
import "./hourlyDisplay.css"

import chooseIcon from './IconFunc.js'

const HourlyDisplay = ({ temp, main, time }) => {
    const [icon, setIcon] = useState("")

    useEffect(() => {
        console.log("HERE")
        setIcon(chooseIcon(main))
    }, [])
    return (
        <div className="hourlyDisplay">
            {icon}
            <p className="temp"><span style={{ fontSize: "22px", fontWeight: "600" }}> {temp}°</span></p>
            <p className="main">{main.toUpperCase()}</p>
        
            <p className="time">{time}</p>
        </div>
    )
}

export default HourlyDisplay

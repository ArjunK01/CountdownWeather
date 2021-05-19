import React, { useEffect, useState } from 'react'
import '../styles/dailyDisplay.css'
import chooseIcon from './IconFunc'

const DailyDisplay = ({ highTemp, lowTemp, main, time, description }) => {
    const [icon, setIcon] = useState("")

    useEffect(() => {
        setIcon(chooseIcon(main))
    }, [])
    return (
        <div>
            <div className="dailyDisplay">
                <p className="time">Day {time}</p>
                <p className="temp"><span style={{ fontSize: "22px", fontWeight: "600" }}> {highTemp}° - {lowTemp}</span></p>
                {icon}
                <p className="main2">{main.toUpperCase()}</p>
                <p className="desc">{description}</p>
            </div>

        </div>
    )
}

export default DailyDisplay

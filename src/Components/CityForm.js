import React, { useState } from 'react'

import './form.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const CityForm = ({ changeCity }) => {

    let [city, setCity] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        changeCity(city)
    }

    return (
        <div>
 
            <form style={{ marginBottom: "8px" }}>
                <TextField style={{ marginRight: "24px" }} styleclassName="inp" id="standard-basic" label="City" value={city} onChange={e => setCity(e.target.value)} />
                <Button variant="container" color="primary" onClick={e => (city) ? onSubmit(e) : e.preventDefault()}>Submit</Button>
            </form>
        </div>
    )
}

export default CityForm

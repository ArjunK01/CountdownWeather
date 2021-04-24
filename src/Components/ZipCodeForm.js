import React, { useState } from 'react'

import './form.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const ZipCodeForm = ({ changeZip }) => {

    let [zip, setZip] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        changeZip(zip)
    }


    return (
        <div>
            <form>
                <TextField className="inp" id="standard-basic" label="ZipCode" value={zip} onChange={e => setZip(e.target.value)} />

                <Button variant="container" color="primary" onClick={e => zip ? onSubmit(e) : e.preventDefault()}>Submit</Button>
            </form>

        </div>
    )
}

export default ZipCodeForm

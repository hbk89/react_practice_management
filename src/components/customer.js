import React from 'react'
import TabelRow from '@material/core/TableRow'
import TabelCell from '@material/core/TableCell'

function Customerprofile(props) {
    return (
        <div>
            <img src = {props.image}/>
            <h2>{props.name}</h2>
        </div>
    )
}

function CustomerInfo(props) {
    return (
        <div>
            <p>{props.birthday}</p>
            <p>{props.gender}</p>
            <p>{props.job}</p>
        </div>
    )
}

function Customer(props) {
    return (
        <div>
            <Customerprofile
                image = {props.data.image}
                name = {props.data.name}
            />
            <CustomerInfo
                birthday = {props.data.id}
                gender = {props.data.gender}
                job = {props.data.job}
            />
        </div>
    )
}

export {Customer, Customerprofile, CustomerInfo};
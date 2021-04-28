import React from 'react'

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
            {/* <img src = {props.data.image} />
            <h2>{props.data.name}</h2>
            <p>{props.data.birthday}</p>
            <p>{props.data.gender}</p> */}
        </div>
    )
}

export {Customer, Customerprofile, CustomerInfo};
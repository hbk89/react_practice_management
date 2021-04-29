import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

function Customer(props) {
    return (
            <TableRow>
                <TableCell><p>{props.data.id}</p></TableCell>
                <TableCell><img src={props.data.image} /></TableCell>
                <TableCell><h2>{props.data.name}</h2></TableCell>
                <TableCell><p>{props.data.birthday}</p></TableCell>
                <TableCell><p>{props.data.gender}</p></TableCell>
                <TableCell><p>{props.data.job}</p></TableCell>
            </TableRow>
    )
}

export default Customer;
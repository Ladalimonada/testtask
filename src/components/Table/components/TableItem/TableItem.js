import React from 'react';

export function TableItem (props) {
    
    const {
        id, firstName, lastName, email, phone
    } = props.data;
    return (
        <>
    <tr onClick={props.onClick}>
        <td>{id}</td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td>{phone}</td>
        </tr>
        </>
    )
}
import React from 'react'

export default function User(props) {
    // destructure
    let { id, firstName, lastName } = props.customer; 
    return (
        <div className='row'>
            {firstName}, {lastName} &nbsp;
            <button type="button">Delete</button>
        </div>
    )
}

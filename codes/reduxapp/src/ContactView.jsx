import React from 'react'

export default function ContactView(props) {
    let {email, name} = props.contact
  return (
    <div>
        {email} &nbsp; {name}
        &nbsp;
        <button onClick={() => props.remove(email)}> delete </button>
    </div>
  )
}

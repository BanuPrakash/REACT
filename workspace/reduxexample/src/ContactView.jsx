import React from 'react'

export default function ContactView({contact, delEvt}) {
  return (
    <div>
        Name: {contact.name} ,
        Email : {contact.email}
        <button type='button' onClick={() => delEvt(contact.email)}>Delete</button>
    </div>
  )
}

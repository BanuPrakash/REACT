import React from 'react'

export default function ContactView({contact, delContact}) {
  return (
    <div>
        Name: {contact.name}, Email: {contact.email} 
        <button onClick={() => delContact(contact.email)}>Delete</button>
    </div>
  )
}

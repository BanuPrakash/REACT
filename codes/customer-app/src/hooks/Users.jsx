import React from 'react'

export default function Users({users , setUid}) {
  return (
    <div>
      {users.map(user => <div key={user.id} onMouseEnter={() => setUid(user.id)}> {user.name} </div>)}
    </div>
  )
}

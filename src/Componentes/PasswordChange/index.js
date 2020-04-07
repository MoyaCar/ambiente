import React, { useState, useEffect } from 'react'
import { withFirebase } from '../Firebase'


const PasswordChangeForm = (props) => {
  const [passwordOne, setPasswordOne] = useState('')
  const [passwordTwo, setPasswordTwo] = useState('')
  const [error, setError] = useState(null)
  const isInvalid = passwordOne === '' || passwordTwo !== passwordOne

  const onSubmit = (event) => {
    event.preventDefault()
    props.firebase
    .doPasswordUpdate(passwordOne)
    .then(()=> {
      setPasswordOne('')
      setPasswordTwo('')
    })
    .catch( error => setError(error))
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='text'
          value={passwordOne}
          onChange={e => setPasswordOne(e.target.value)}
          placeholder='nueva contraseña'/>
        <input
          type='text'
          value={passwordTwo}
          onChange={e => setPasswordTwo(e.target.value)}
          placeholder='repetir contraseña'/>
        <button type='submit' disabled={isInvalid}> Cambiar Contraseña</button>

        {error && <p>{error.message}</p>}
      </form>
    </div>
  )
}

export default withFirebase(PasswordChangeForm)
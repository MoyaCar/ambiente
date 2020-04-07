import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { withFirebase } from '../Firebase'
import * as ROUTES from '../../constants/routes'

const PaswordForgetPage = () => (
  <div>
    <h1>Recuperar la contraseña</h1>
    <RecuperarPaswordForm />
  </div>
)

const RecuperarPaswordForm = (props) => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  const isInvalid = email === ''

  const onSubmit = event => {
    const correo = email
    props.firebase
      .doPasswordReset(correo)//ojo con esto, puede ser un problema
      .then(
        () => setEmail('')
      )
      .catch(error => setError(error))
    event.preventDefault()
  }


  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder='Direccioón de Correo' />

        <button disabled={isInvalid} type='submit'>
          Reiniciar mi contraseña
        </button>
        {error && <p>{error.message}</p>}
      </form>
    </div>
  )
}

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASWORD_FORGET}>Olividaste la Contraseña</Link>
  </p>
)

export default PaswordForgetPage
const RecuperrarPasswordForm = withFirebase(RecuperarPaswordForm)

export { RecuperrarPasswordForm, PasswordForgetLink }

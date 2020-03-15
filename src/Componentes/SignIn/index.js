import React, {useState} from 'react';
import { withRouter } from  'react-router-dom';
import { compose } from 'recompose';

import {SignUpLink} from '../SignUp';
import {withFirebase} from '../Firebase'
import * as ROUTES from '../../constants/routes'

const SignInPage = () => (
  <div>
    <h1>Iniciar Sesión</h1>
    <SignInForm />
    <SignUpLink />
  </div>
)

const SignInFormBase = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const onSubmit = e => {
    e.preventDefault()
    props.history.push(ROUTES.ENCUESTA)
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='text' value={email} placeholder="Email" onChange={ e => setEmail(e.currentTarget.value)} />
        <input type='text' value={password} placeholder='Contraseña' onChange={ e => setPassword(e.currentTarget.value) }/>
        <button type='submit'>Ingresar</button>
      </form>
      {email}  {password}
    </div>
  )
}

const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);

export default SignInPage
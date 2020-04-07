import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from '../SignUp';
import { withFirebase } from '../Firebase';
import { PasswordForgetLink } from '../PasswordForget'
import * as ROUTES from '../../constants/routes';

//Componentes de Material Design
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


const SignInPage = () => (
  <div class='row justify-content-center'>
    <div>
    <h1>Iniciar Sesión</h1>
      <SignInForm />
      <PasswordForgetLink />
      <SignUpLink />
    </div>
  </div>
)

const SignInFormBase = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const onSubmit = e => {
    props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        setEmail('');
        setPassword('');
        props.history.push(ROUTES.ENCUESTA);
      }).catch(error => setError(error))

    e.preventDefault()
  }

  const isInvalid = email === '' || password === ''

  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextField
          label='Correo'
          value={email}

          onChange={e => setEmail(e.currentTarget.value)} />
        <br />

        <TextField
          label='Contraseña'
          value={password}
          onChange={e => setPassword(e.currentTarget.value)} />
        <br />

        <Button
          type='submit'
          variant='contained'
          color='primary'
          className='boton'
          disabled={isInvalid}>Ingresar</Button>
        {error && <p>{error.message}</p>}
      </form>
    </div>
  )
}

const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);

export default SignInPage;
export { SignInForm };
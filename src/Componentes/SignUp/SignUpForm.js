import React, { useState } from 'react'
import { withFirebase } from '../Firebase/index'
import { withRouter } from 'react-router-dom'
import * as ROUTES from '../../constants/routes';
import { compose } from 'recompose'


const SignUpFormBase = (props) => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [error, setError] = useState(null)


  const onSubmit = (e) => {
    props.firebase
    .doCreateUserWithEmailAndPassword(email, password1)
    .then((authUser) => {
      return props.firebase
      .user(authUser.user.uid)
      .set({
        userName,
        email,
      })
    }

    )
    .then(()=>{
      setUserName('');
      setEmail('');
      setPassword1('');
      setPassword2('');
      props.history.push(ROUTES.ENCUESTA)
    })
    .catch(error => setError(error));

    e.preventDefault()
  }

  const isInvalid = password1 !== password2 ||
              userName === '' || 
              password1 === '' ||
              email === '';

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          type='text'
          value={userName}
          onChange={(e) => setUserName(e.currentTarget.value)}
          placeholder='Nombre de Usuario'/>

          <input 
          type='text'
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          placeholder='Email'/>

          <input 
          type='text'
          value={password1}
          onChange={(e) => setPassword1(e.currentTarget.value)}
          placeholder='Contraseña'/>

          <input 
          type='text'
          value={password2}
          onChange={(e) => setPassword2(e.currentTarget.value)}
          placeholder='Repita Contraseña'/>

          <button type='submit' disabled={isInvalid}>Registrarse</button>
          
          {error && <p>{error.message}</p>}
      </form>
    </div>
  )
}

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default SignUpForm;
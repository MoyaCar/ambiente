import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import SignUpForm from './SignUpForm'

const SignUp = () => (
  <div>
    <h1>Registrarse</h1>
    <SignUpForm />
  </div>
);

const SignUpLink = () => (
  <p>
    No tienes cuenta? <Link to={ROUTES.SIGN_IP}>Registrarse</Link>
  </p>
)

export default SignUp
export {SignUpLink}
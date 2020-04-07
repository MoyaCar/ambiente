import React from 'react'
import { RecuperrarPasswordForm } from '../PasswordForget'
import PasswordChangeForm from '../PasswordChange'
import { AuthUserContext, withAuthorization } from '../Session'


const Account = () => (
  <AuthUserContext.Consumer>
    {authUser => {
      return (
        <div>
          <h1>Cuenta: {authUser.email}</h1>
          <RecuperrarPasswordForm />
          <PasswordChangeForm />
        </div>
      )
    }
    }
  </AuthUserContext.Consumer>
)

const condition = authUser => !!authUser

export default withAuthorization(condition)(Account)
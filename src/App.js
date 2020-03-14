import React from 'react';
import { BrowserRouter as Router, 
        Route,
      } from 'react-router-dom'
import Navigation from './Navigation'
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import Encuesta from '../Encuesta';
import AccountPage from '../Account';
import AdminPage from '../Admin';

import * as ROUTES from './constants/routes';

function App() {
  return (
  <Router>
    <Navigation/>

    <hr/>
    <Route exact path={ROUTES.LANDING} component={LandingPage} />
    <Route path={ROUTES.SIGN_IP} component={SignUpPage} />
    <Route path={ROUTES.SIGN_IN} component={SignInPage} />
    <Route path={ROUTES.PASWORD_FORGET} component={PasswordForgetPage} />
    <Route path={ROUTES.ENCUESTA} component={Encuesta} />
    <Route path={ROUTES.ADMIN} component={AdminPage} />
    <Route path={ROUTES.ACCOUNT} component={AccountPage} />
  </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { withAuthentication } from './Componentes/Session';

import Navigation from './Navigation'
import LandingPage from './Componentes/Landing/';
import SignUpPage from './Componentes/SignUp/';
import SignInPage from './Componentes/SignIn/';
import PasswordForgetPage from './Componentes/PasswordForget/';
import Encuesta from './Componentes/Encuesta/';
import AccountPage from './Componentes/Account/';
import AdminPage from './Componentes/Admin/';



function App(props) {

  return (
    <Router>
      <Navigation />

      <hr />
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

export default withAuthentication(App);

import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import SignOutButton from './Componentes/SignOut'
import { AuthUserContext } from './Componentes/Session'

const Navigation = ({ authUser }) => (
  <div>
    <AuthUserContext.Consumer>
      { authUser =>
        authUser? <NavigationAuth /> : <NavigationNonAuth /> }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.SIGN_IN}>Ingresar</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_IP}>Registrarse</Link>
      </li>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.ENCUESTA}>Encuesta</Link>
      </li>
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
      <li>
        < SignOutButton />
      </li>
    </ul>
  </div>
);

const NavigationNonAuth = () =>(
  <div>
    <ul>
      <li>
        <Link to={ROUTES.SIGN_IN}>Ingresar</Link>
      </li>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;

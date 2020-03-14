import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from './constants/routes';

const Navigation = () => (
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
    </ul>
  </div>
)

export default Navigation;
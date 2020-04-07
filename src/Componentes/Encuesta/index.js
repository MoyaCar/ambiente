import React from 'react';
import { withAuthorization } from '../Session'

// Esta es la pagina de home
const Encuesta = () => (
  <div>
    <h1>Encuesta</h1>
  </div>
)

const condition = authUser => !!authUser

export default withAuthorization(condition)(Encuesta)
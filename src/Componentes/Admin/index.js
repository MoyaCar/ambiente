import React, { useState, useEffect } from 'react';
import { withFirebase } from '../Firebase'
import {firebase} from '../Firebase/firebase'
import {AuthUserContext ,withAuthorization} from '../Session'


function useObtenerUsuarios() {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  

  useEffect(() => {
    setLoading(true)

    firebase.firestore().collection('usuarios').onSnapshot(
      snapshot => {
        const nuevosEmpleados = snapshot.docs.map(
          doc => ({
            ...doc.data()
          })
        )
        setUsers(nuevosEmpleados)
        console.log(users)
      }
    )
  }, [])
  return users
}

const Admin = props => {

  const users = useObtenerUsuarios(props)
  console.log(users)
  return (
    <div>
      <h1>Administrador</h1>
      <ul>
      {users.map(user =>
        (
          <li >
            <h3>User: {user.uid}</h3>
            <h5>Email: {user.nombre}</h5>
            <h5>UserName: {user.apellido}</h5>
          </li>
        )
      )}
      </ul>

      <AuthUserContext.Consumer>
        {authUser => {
          return (
            <div>
              <h3>{authUser.email}</h3>
            </div>
          )
        }}
      </AuthUserContext.Consumer>
    </div>
  )
}

const condition = authUser => !!authUser

export default withAuthorization(condition)(Admin)
//export default withFirebase(Admin)
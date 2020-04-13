import React, { useState, useEffect } from 'react';
import { withFirebase } from '../Firebase'
import { firebase } from '../Firebase/firebase'
import { AuthUserContext, withAuthorization } from '../Session'


function useObtenerUsuarios() {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [tareas, setTareas] = useState([])


  useEffect(() => {
    setLoading(true)

    const unsuscribe = firebase.firestore().collection('usuarios').onSnapshot(
      snapshot => {
        const nuevosEmpleados = snapshot.docs.map(
          doc => ({
            id: doc.id,
            ...doc.data()
          })
        )
        setUsers(nuevosEmpleados)
        console.log(users)
      }
    )

    const unsuscribeTo = firebase.firestore().collection('tareas').onSnapshot(
      snapshot => {
        const nuevasTareas = snapshot.docs.map(
          doc => ({
            id: doc.id,
            ...doc.data()
          })
        )
        setTareas(nuevasTareas)
      }
    )
    return () => [unsuscribe(), unsuscribeTo()]
  }, [])
  return [users, tareas]
}

const Admin = props => {
  const [users, tareas] = useObtenerUsuarios()
  console.log(users)
  console.log(tareas)

  return (
    <div>
      <h1>Administrador</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <h5>Email: {user.email}</h5>
            <h5>UserName: {user.userName}</h5>
            <h6>Departamento: {user.departamento}</h6>
          </li>
        ))}
      </ul>

      <AuthUserContext.Consumer>
        {authUser => {
          let departamento = ''
          users.map( user => (user.email === authUser.email)? departamento = user.departamento: null)
          return (
            <div>
              {tareas.map(tarea => {
                return (tarea.departamento === departamento 
                  ? <h4 key={tarea.id}>Mostrando tareas del departamento: {tarea.departamento}</h4> 
                  : null
                  )})}
              </div>
            )}}
      </AuthUserContext.Consumer>
    </div>
  )
}

const condition = authUser => !!authUser

export default withAuthorization(condition)(Admin)
//export default withFirebase(Admin)
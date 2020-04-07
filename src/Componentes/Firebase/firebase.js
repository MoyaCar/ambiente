import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyAG643d2sHrt8WT1W9BuxDi0q4mr5Y4Jt8",
  authDomain: "ambiente-e8b45.firebaseapp.com",
  databaseURL: "https://ambiente-e8b45.firebaseio.com",
  projectId: "ambiente-e8b45",
  storageBucket: "ambiente-e8b45.appspot.com",
  messagingSenderId: "215426672971",
  appId: "1:215426672971:web:31275001492d4bff25a0ce"
};


// Initialize Firebase
class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.db = app.database()
    this.auth = app.auth()
    this.firestore = app.firestore()
  }
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password)

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password)

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email)

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password)

  user = uid => this.db.ref(`users/${uid}`)
  
  users = () => this.db.ref('users')


}

export {firebase} //pequeño hack para poder seguir usando netamente funciones.

export default Firebase //salvo por esta clase TODO: rehacer

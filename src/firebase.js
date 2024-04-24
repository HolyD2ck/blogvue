// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBwIZQqJTkdwRcZ0E4hVFe5iWaMYmuYsno',
  authDomain: 'd2ckproject.firebaseapp.com',
  projectId: 'd2ckproject',
  storageBucket: 'd2ckproject.appspot.com',
  messagingSenderId: '23028867207',
  appId: '1:23028867207:web:ea08df1372cf4e75505822',
  measurementId: 'G-N3JPWMSL19'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app

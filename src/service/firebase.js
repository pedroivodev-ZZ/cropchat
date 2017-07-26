import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyDgvjM8bAmQ--PMMJAIeTI9hPIQ-XVBHz8',
  authDomain: 'cropchat-ac22a.firebaseapp.com',
  databaseURL: 'https://cropchat-ac22a.firebaseio.com',
  projectId: 'cropchat-ac22a',
  storageBucket: 'cropchat-ac22a.appspot.com',
  messagingSenderId: '7389998794'
}

firebase.initializeApp(config)

export default {
  database: firebase.database()
}

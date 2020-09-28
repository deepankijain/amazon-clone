import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAnG_ZYDKiD6GU2LgCmEfIPed_C16A7Ypg',
  authDomain: 'clone-53e92.firebaseapp.com',
  databaseURL: 'https://clone-53e92.firebaseio.com',
  projectId: 'clone-53e92',
  storageBucket: 'clone-53e92.appspot.com',
  messagingSenderId: '739864789742',
  appId: '1:739864789742:web:59896e5dd58bcde68929ff',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

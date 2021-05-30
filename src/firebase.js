import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDDNDTa-y63V-VDvzF2PoGflu80fWMJ5qQ",
    authDomain: "coaching-blog-app.firebaseapp.com",
    projectId: "coaching-blog-app",
    storageBucket: "coaching-blog-app.appspot.com",
    messagingSenderId: "113437167032",
    appId: "1:113437167032:web:6b228f3f3602a08047134d"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export default db;
export {auth}
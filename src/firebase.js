import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCpA04fwy1qHLIOpmEJprEjPP-aKcVxWiQ",
  authDomain: "facebook-clone-b0016.firebaseapp.com",
  databaseURL: "https://facebook-clone-b0016.firebaseio.com",
  projectId: "facebook-clone-b0016",
  storageBucket: "facebook-clone-b0016.appspot.com",
  messagingSenderId: "77014789440",
  appId: "1:77014789440:web:31a9d77254d5b147c39ea5",
  measurementId: "G-FP4K3DFSJ4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

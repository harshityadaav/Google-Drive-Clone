import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyA6062Kr7g4MUphvhuf8_1apsY-0rr3-fM",
    authDomain: "drive-clone-f3d02.firebaseapp.com",
    projectId: "drive-clone-f3d02",
    storageBucket: "drive-clone-f3d02.appspot.com",
    messagingSenderId: "1000486171771",
    appId: "1:1000486171771:web:535eea3bb68eabab24dede"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const storage = firebase.storage();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db,storage,auth,provider}; 
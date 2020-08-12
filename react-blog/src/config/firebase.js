import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBFf3DaleiJsbV2hex5Vzzj-lZgz7wHeEc",
    authDomain: "react-blog-69777.firebaseapp.com",
    databaseURL: "https://react-blog-69777.firebaseio.com",
    projectId: "react-blog-69777",
    storageBucket: "react-blog-69777.appspot.com",
    messagingSenderId: "1032746039262",
    appId: "1:1032746039262:web:dbc56a9f00f329da8e4f4f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;
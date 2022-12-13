import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi1gq1QGCuCbNQYOKKFDyGG1lz3959Ff0",
  authDomain: "winchester-9daf1.firebaseapp.com",
  projectId: "winchester-9daf1",
  storageBucket: "winchester-9daf1.appspot.com",
  messagingSenderId: "178040493256",
  appId: "1:178040493256:web:740c12d83797c2d5e8c1fd",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;

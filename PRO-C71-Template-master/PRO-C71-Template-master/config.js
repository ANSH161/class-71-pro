import firebase from "firebase";
require("@firebase/firestore");



const firebaseConfig = {
  apiKey: "AIzaSyCQ6OvHzdP_tO2PsdntSMCInrGdUVwNDEA",
  authDomain: "class-71-e-ride.firebaseapp.com",
  projectId: "class-71-e-ride",
  storageBucket: "class-71-e-ride.appspot.com",
  messagingSenderId: "931088083431",
  appId: "1:931088083431:web:4def0f235d681d3932f542",
  measurementId: "G-5C3031VQ6P"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

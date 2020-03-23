import firebase from "firebase";
import firebaseConfig from "./secrets";
const fire = firebase.initializeApp(firebaseConfig);
export default fire;

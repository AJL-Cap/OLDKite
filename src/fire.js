import firebase from 'firebase'
const firebaseConfig = {
//replace the following with your firebaseConfig
  apiKey: "AIzaSyBrRKLyIIZKEtsOYIO1h21INZn_1GnzcrM",
  authDomain: "capstone-a9c19.firebaseapp.com",
  databaseURL: "https://capstone-a9c19.firebaseio.com",
  projectId: "capstone-a9c19",
  storageBucket: "capstone-a9c19.appspot.com",
  messagingSenderId: "327054793685",
  appId: "1:327054793685:web:293cf006d00f076b6e3b5c",
  measurementId: "G-73386QC55Y"
};
const fire = firebase.initializeApp(firebaseConfig)
export default fire

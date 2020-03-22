import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAm5f7TAfZ1RVj9Jaq0Wom1vk8kJNdd3KI",
  authDomain: "lizzys-capstone.firebaseapp.com",
  databaseURL: "https://lizzys-capstone.firebaseio.com",
  projectId: "lizzys-capstone",
  storageBucket: "lizzys-capstone.appspot.com",
  messagingSenderId: "724349404083",
  appId: "1:724349404083:web:fd16b6b4a61e578807c1c6",
  measurementId: "G-816XGXS0EQ"
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;

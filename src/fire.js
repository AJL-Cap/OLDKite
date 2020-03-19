import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDLZI-QfBW369mXjuj4j1OqabhVIYbe-D4",
  authDomain: "capstone-anna.firebaseapp.com",
  databaseURL: "https://capstone-anna.firebaseio.com",
  projectId: "capstone-anna",
  storageBucket: "capstone-anna.appspot.com",
  messagingSenderId: "805584725558",
  appId: "1:805584725558:web:828c9f34263da45e305a97",
  measurementId: "G-4M4P6VYK8B"
};

const fire = firebase.initializeApp(firebaseConfig)

export default fire

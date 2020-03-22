import firebase from 'firebase'
import config from './secrets'

const fire = firebase.initializeApp(config)

export default fire

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
	apiKey: "AIzaSyAOuLeROTQPN_uDdjbWwx75d59fUjnW_Z0",
	authDomain: "clothing-shop-733ab.firebaseapp.com",
	databaseURL: "https://clothing-shop-733ab.firebaseio.com",
	projectId: "clothing-shop-733ab",
	storageBucket: "clothing-shop-733ab.appspot.com",
	messagingSenderId: "192337769367",
	appId: "1:192337769367:web:9bc821fc90470fcc5e0ad2",
	measurementId: "G-512XERP16P"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
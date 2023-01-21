// Import the functions you need from the SDKs you need
import {initializeApp, getApp, getApps} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBfyVErqeUlpLR_Y3m5CbXNGNlosNh5xqI',
  authDomain: 'insta-v2-datproto.firebaseapp.com',
  projectId: 'insta-v2-datproto',
  storageBucket: 'insta-v2-datproto.appspot.com',
  messagingSenderId: '591514960537',
  appId: '1:591514960537:web:4a1a9933ed89fa9e5f6e08'
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export {app, db, storage}
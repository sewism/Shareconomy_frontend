import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: 'shareconomy-1da5b.firebaseapp.com',
  databaseURL: 'gs://shareconomy-1da5b.appspot.com',
  projectId: 'shareconomy-1da5b',
  storageBucket: 'shareconomy-1da5b.appspot.com',
  messagingSenderId: '806620651317',
  appId: '1:806620651317:web:2a9ab1af41d5e2c3e6f67c'
}

const firebaseApp = initializeApp(firebaseConfig)
const storage = getStorage(firebaseApp)
export default storage

createApp(App).use(router).mount('#app')

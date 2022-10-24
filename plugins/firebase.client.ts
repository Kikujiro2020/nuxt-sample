// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { defineNuxtPlugin } from '#app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export default defineNuxtPlugin(() => {
    useState('firebaseApp', () => {
        const config = useRuntimeConfig()
        const firebaseConfig = {
          apiKey: config.FIREBASE_API_KEY,
          authDomain: config.FIREBASE_AUTH_DOMAIN,
          projectId: config.FIREBASE_PROJECT_ID,
        }
        return initializeApp(firebaseConfig)
      })

})


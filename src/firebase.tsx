// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBqrUylFtrWT8iSp5WDnZcff2TnY7VdGdI',
    authDomain: 'instruct-firebase.firebaseapp.com',
    projectId: 'instruct-firebase',
    storageBucket: 'instruct-firebase.firebasestorage.app',
    messagingSenderId: '1089663592517',
    appId: '1:1089663592517:web:746fb91a89e768bf42db2c',
    measurementId: 'G-X35ENZCN99',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const Databasez = getDatabase(app);
const analytics = getAnalytics(app);
// export { app, database };

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
import firebase from 'firebase/compat/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
console.log('apikey', process.env.REACT_APP_FIREBASE_API_KEY); // Kiểm tra xem biến này có đúng không

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: 'instruct-firebase.firebaseapp.com',
    projectId: 'instruct-firebase',
    storageBucket: 'instruct-firebase.appspot.com',
    messagingSenderId: '1089663592517',
    appId: '1:1089663592517:web:746fb91a89e768bf42db2c',
    measurementId: 'G-X35ENZCN99',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Databasez = getDatabase(app);
const analytics = getAnalytics(app);
export default Databasez;
export { app };

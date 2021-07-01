import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAWBAqwfq43Hij46gPw79ZhfAC7K64UnQY",
    authDomain: "letmeask-nlw-3bdf8.firebaseapp.com",
    databaseURL: "https://letmeask-nlw-3bdf8-default-rtdb.firebaseio.com",
    projectId: "letmeask-nlw-3bdf8",
    storageBucket: "letmeask-nlw-3bdf8.appspot.com",
    messagingSenderId: "163514507784",
    appId: "1:163514507784:web:b58fef628be2327c83e7bd"
};

/* const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};*/

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };

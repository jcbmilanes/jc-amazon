import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBaKUKRBFCN_EPk7oLVp0Rm0glb-zGf6Lw",
    authDomain: "jc-37afc.firebaseapp.com",
    databaseURL: "https://jc-37afc.firebaseio.com",
    projectId: "jc-37afc",
    storageBucket: "jc-37afc.appspot.com",
    messagingSenderId: "855146041833",
    appId: "1:855146041833:web:5a1e2877d856735ecf3b78"
});

const auth = firebase.auth();

export {auth};
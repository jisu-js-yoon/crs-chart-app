import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCg_QfYDX-_evz8zVDe4lfCQRhor1kLcHs",
    authDomain: "crs-chart.firebaseapp.com",
    databaseURL: "https://crs-chart.firebaseio.com",
    projectId: "crs-chart",
    storageBucket: "crs-chart.appspot.com",
    messagingSenderId: "1092190131981",
    appId: "1:1092190131981:web:e619bd04b9e303f86d8244",
    measurementId: "G-CR554DDY3F"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
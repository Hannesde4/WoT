/* // Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyCpkcJTZF0AqVIJFAkShnoHaqAvYvQfras',
    authDomain: '### FIREBASE AUTH DOMAIN ###',
    projectId: 'domotica-1c63d'
});
 */

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCpkcJTZF0AqVIJFAkShnoHaqAvYvQfras",
    authDomain: "domotica-1c63d.firebaseapp.com",
    databaseURL: "https://domotica-1c63d.firebaseio.com",
    projectId: "domotica-1c63d",
    storageBucket: "domotica-1c63d.appspot.com",
    messagingSenderId: "366962387854",
    appId: "1:366962387854:web:bf2e219c04d73be8fa12df",
    measurementId: "G-R6L5TJCQC0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
var db = firebase.firestore();

let O = 0;

// basis matrix opbouwen om de rgb leds weer te geven
let matrix =[
    O, O, O, O, O, O, O, O,
    O, O, O, O, O, O, O, O,
    O, O, O, O, O, O, O, O,
    O, O, O, O, O, O, O, O,
    O, O, O, O, O, O, O, O,
    O, O, O, O, O, O, O, O,
    O, O, O, O, O, O, O, O,
    O, O, O, O, O, O, O, O
    ]

db.collection("status").doc("currentStatus").set({
    status: matrix
})

db.collection("status").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});


let updateStatus = () => {
    db.collection("status").doc("currentStatus").update({
        status: matrix
    });
};
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

const saveData = (matrix) => {
    db.collection("characters").add({
        status: matrix
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    setCharacter(matrix);
    getData();
}

let setCharacter = (matrix) => {
    db.collection("character").doc("theChosenOne").update({
        status: matrix
    });
}

let getData = () =>{
    db.collection("characters").get()
      .then(function(querySnapshot) {
        document.getElementById('collection').innerHTML = "";
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          showSavedCharacter(doc.data(), doc.id);
          localStorage.setItem(doc.id, doc.data().status);
      });
    });
}

let showSavedCharacter = (data, id) => {
    buildSavedMatrix(data.status, id);
    console.log(data.status);
}
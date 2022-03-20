// First configure your firebase
const firebaseConfig = {}

    //secondly, add these three links of version 8`
    `<script defer src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
     <script defer src="https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js"></script>
     <script defer src="https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js"></script>`
//Use defer to make it useable


//make this two main constant
const auth = firebase.auth();
const firestore = firebase.firestore();


//Create an observer on signin and signout
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        // ...
    } else {
        // User is signed out
        // ...
    }
});

//To get the current user
firebase.auth().currentUser;



//To signup the user from authentication
firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
    });

//To signin the user from authentication
firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
    });

//To signout the user from firebase
firebase.auth().signOut()
    .then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });


// Add a new document in collection "cities"
db.collection("cities").doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
})
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });



//to merge the data into a field
var cityRef = db.collection('cities').doc('BJ');

var setWithMerge = cityRef
    .set({
        capital: true
    },
        {
            merge: true
        });

//to set the document in firebase
db.collection("cities").doc("new-city-id").set(data);

// Add a new document with a generated id.
db.collection("cities").add({
    name: "Tokyo",
    country: "Japan"
})
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

//to update the document
var washingtonRef = db.collection("cities").doc("DC");

// Set the "capital" field of the city 'DC'
return washingtonRef.update({
    capital: true
})
    .then(() => {
        console.log("Document successfully updated!");
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });


//Arrays of firebase

var washingtonRef = db.collection("cities").doc("DC");

// Atomically add a new region to the "regions" array field.
washingtonRef.update({
    regions: firebase.firestore.FieldValue.arrayUnion("greater_virginia")
});

// Atomically remove a region from the "regions" array field.
washingtonRef.update({
    regions: firebase.firestore.FieldValue.arrayRemove("east_coast")
});

//to delete the data
db.collection("cities").doc("DC").delete().then(() => {
    console.log("Document successfully deleted!");
}).catch((error) => {
    console.error("Error removing document: ", error);
});

//to delete the field
var cityRef = db.collection('cities').doc('BJ');

// Remove the 'capital' field from the document
var removeCapital = cityRef.update({
    capital: firebase.firestore.FieldValue.delete()
});



//Get multiple documents at once
db.collection("cities").where("capital", "==", true)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });



//get all documents in A collection
db.collection("cities").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
});



//to observe the data 
db.collection("cities").doc("SF")
    .onSnapshot((doc) => {
        console.log("Current data: ", doc.data());
    });

//to observe multiple document in a collection
db.collection("cities").where("state", "==", "CA")
    .onSnapshot((querySnapshot) => {
        var cities = [];
        querySnapshot.forEach((doc) => {
            cities.push(doc.data().name);
        });
        console.log("Current cities in CA: ", cities.join(", "));
    });


//three types of changes in snapshot
db.collection("cities").where("state", "==", "CA")
    .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                console.log("New city: ", change.doc.data());
            }
            if (change.type === "modified") {
                console.log("Modified city: ", change.doc.data());
            }
            if (change.type === "removed") {
                console.log("Removed city: ", change.doc.data());
            }
        });
    });



//to remove the observer
var unsubscribe = db.collection("cities")
    .onSnapshot(() => {
      // Respond to data
      // ...
    });

// Later ...

// Stop listening to changes
unsubscribe();
const firebaseConfig = {
    apiKey: "AIzaSyCrMSXh7yQ8c57tSypdbJu6vSTZEGA8hhI",
    authDomain: "prac-b.firebaseapp.com",
    projectId: "prac-b",
    storageBucket: "prac-b.appspot.com",
    messagingSenderId: "132386962770",
    appId: "1:132386962770:web:9dcdc14bfb831676cfce8b"
};

//initialize firebase
firebase.initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();
{
    const loginDisplay = () => {
        const signup = document.getElementById('signup-main');
        const login = document.getElementById('login-main');
        signup.style.display = 'none';
        login.style.display = 'block' && 'flex';

    };

    const signup = () => {
        const email = document.getElementById('signup_email').value;
        const password = document.getElementById('signup_password').value;
        const fullName = document.getElementById('signup_fullName').value;

        auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                firestore.collection('users').add(
                    {
                        name: fullName,
                        email: email,
                        password: password
                    }
                );
                loginDisplay();
            })
            .catch(function (error) {
                console.log(error.message)
            });

    };

    const signupForm = document.getElementById('form-1');
    signupForm.addEventListener('submit', signup);
}
{
    const teamsDashboardDisplay = () => {
        const teamsDashboard = document.getElementById('teamsDashboard');
        const login = document.getElementById('login-main');
        login.style.display = 'none';
        teamsDashboard.style.display = 'block' && 'flex';

    };

    const login = (e) => {
        e.preventDefault();
        const email = document.getElementById('login_email').value;
        const password = document.getElementById('login_password').value;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function () {
                teamsDashboardDisplay();
            })
            .catch(function (error) {
                console.log(error.message)
            });
    };

    const loginForm = document.getElementById('form-2');
    loginForm.addEventListener('submit', login);
}
// console.log(check1.onSnapshot(snapshot => { console.log(snapshot.forEach(function (change) { console.log(change) }))}));
{
    let resultMember = [];
    const arrayCheck = (members) => {
        const splitting = members.split(',');
        const removingDuplicate = [...new Set(splitting)];
        removingDuplicate.forEach(element => {
            firestore.collection('users').get()
                .then(snapshot =>
                    snapshot.forEach(doc => {
                        if (doc.data().email === element) {
                            resultMember.push(element);
                        } else {
                            alert('member doesnot exist');
                        }
                    }))
        })
    };
    const getDataFromPopup = () => {
        const teamName = document.getElementById('teamNameCreate').value;
        const category = document.getElementById('categoryCreate').value;
        let members = document.getElementById('membersEmailCreate').value;
        arrayCheck(members);
        const teams = firestore.collection('teams');
        const user = auth.currentUser.email;
        let obj = {
            [user]: {
                teamName: teamName, categoryName: category, members: resultMember
            }
        };
        teams.add(obj);
    };
    const popupOff = () => {
        const popup = document.getElementById('popupWindow');
        popup.style.display = 'none';
    };
    const mainPopup = (e) => {
        e.preventDefault();
        getDataFromPopup();
        popupOff();
    };
    const popupButton = document.getElementById('popupCreate');
    popupButton.addEventListener('click', mainPopup);
}
{
    const teamsIownCreater = (user,doc) => {
        
         const data = doc.data()[user.email]
        
        const members = data.members;
        const category = data.categoryName;
        let checkDiv = document.querySelector('div.teamsIown');
        let createMainElement = document.createElement('div');
        createMainElement.className = 'teamsIownPart';
        let createElement = document.createElement('div');
        createElement.className = 'teams';
        createElement.innerHTML = `
    <span>${category}</span>
    <p><b>Members: </b>${members}</p> 
    `
        createMainElement.appendChild(createElement);
        checkDiv.appendChild(createMainElement);
    };
    const teamsYouIn = (user,doc)=>{

    };
    const getDataOnChange = (user) => {
        const teams = firestore.collection('teams');
        teams
        .onSnapshot(snapshot => {

                            snapshot.docChanges().forEach((change) => {
                                if (change.type === "added") {
                                    const doc = change.doc;
                                    teamsIownCreater(user,doc);
                                    teamsYouIn(user,doc);
                                }
                            })
                        })
    };
    const getDataOnChangeForTeams2 = ()=>{
        const teams = firestore.collection('teams');
        teams.where()
    };
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // conditionOfDataForOwner(user);
            getDataOnChange(user);
        } else {
            // User is signed out.
        }
    });
}



















// auth.onAuthStateChanged(function (user) {
//     if (user) {
//         // console.log(user.email)
//         // popupData(user.data())
//     } else {
//         console.log('user logout')
//     }
// });

// firestore.collection('users')
//     .get()
//     .then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             // doc.data() is never undefined for query doc snapshots
//             console.log(doc.id, " => ", doc.data());
//         });
//     })
//     .catch((error) => {
//         console.log("Error getting documents: ", error);
//     });

// // console.log(try1)

// console.log(firestore.collection('users').where('email', '==', 'she@gmail.com').get().then(snapshot => { snapshot.forEach(doc => console.log(doc.id)) }))
// firestore.collection('cities').doc('khi').update({ b: 2 })
// console.log(firestore.collection('cities').doc('khi').get().then(doc => console.log(doc.data())))
// console.log(firestore.collection('teams').where('email', '==', 'she@gmail.com').get().then(snapshot => { snapshot.forEach(doc => console.log(doc.id)) }))
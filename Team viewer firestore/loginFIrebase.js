const auth = firebase.auth();
const firestore = firebase.firestore();

const teamsDashboardDisplay = () => {
    const teamsDashboard = document.getElementById('teamsDashboard');
    const login = document.getElementById('login-main');
    login.style.display = 'none';
    teamsDashboard.style.display = 'block' && 'flex';

};

const login = ()=>{
    const email = document.getElementById('login_email').value;
    const password = document.getElementById('login_password').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function (response) {
            teamsDashboardDisplay();
        })
        .catch(function (error) {
            console.log(error.message)
        });
};

const loginForm = document.getElementById('form-2');
loginForm.addEventListener('submit',login);

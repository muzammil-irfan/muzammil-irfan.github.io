//Shuru Allah kai naam se jo nihayat meherban or karam farmanay wala hai


















/*// login.............................................
//making a function for saving data into maps
// import {map} from './login.js'
let signupMap = new Map;

const signupSaveData = () => {
    const signupFullName = document.getElementById('signup_fullName').value;
    const signupEmail = document.getElementById('signup_email').value;
    const signupPassword = document.getElementById('signup_password').value;
    signupMap.set(signupEmail, {
        fullName: signupFullName,
        email: signupEmail,
        password: signupPassword
    });
    saveinlocalStorage();
};

//making a function to save data in local storage
const saveinlocalStorage = () => {
    for (const [key, values] of signupMap.entries()) {
        localStorage.setItem(key, JSON.stringify(values));
    };
    loginDisplay();
};

//making a function to display the login form 
const loginDisplay = () => {
    const signup = document.getElementById('signup-main');
    const login = document.getElementById('login-main');
    signup.style.display = 'none';
    login.style.display = 'block' && 'flex';

};


//making function for signup
function signupValues(e) {
    // let validate = true;
    e.preventDefault();
    const signupFullName = document.getElementById('signup_fullName').value;
    const signupEmail = document.getElementById('signup_email').value;
    const signupPassword = document.getElementById('signup_password').value;
    if (localStorage.getItem(signupEmail.toString()) === null) {
        signupSaveData();

    } else if (signupEmail.length < 3) {
        let invalidEmail = document.getElementById('invalid');
        invalidEmail.style.display = 'block';
        invalidEmail.innerHTML = 'Please enter your correct email';
    } else {
        let invalidEmail = document.getElementById('invalid');
        invalidEmail.style.display = 'block';
    }
};
//making an event listener on signup form to get values

const form = document.getElementById('form-1');
// form.addEventListener('click',(e => e.preventDefault()));
form.addEventListener('submit', signupValues);





*/
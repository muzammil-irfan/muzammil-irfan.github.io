/*
let teamData = new Map;
const getDataFromLocalStorageToMapForTeam = () => {
    for (let i = 0; i < localStorage.length; i++) {
        let keys = (localStorage.key(i));
        let get = JSON.parse(localStorage.getItem(keys));
        teamData.set(keys, get);
    }

};
getDataFromLocalStorageToMapForTeam();



const emailCheck = (values, nameCheck) => {
    let emailCheck = values.membersEmail;
    let categoryOfMembers = values.categoryName;
    let arrOfMembers = values.membersEmail;

    emailCheck.forEach(values => {

        if (nameCheck !== values) {
            let createMainElement = document.createElement('div');
            createMainElement.className = 'teamsInWhichIamPart';
            let createElement = document.createElement('div');
            createElement.className = 'teams';
            createElement.innerHTML = `
                                <span>${categoryOfMembers}</span>
                                <p><b>Members: </b>${arrOfMembers}</p> 
                                `
            let checkDiv = document.querySelector('div.teamsInWhichIam');
            if (checkDiv.childElementCount === 0) {
                createMainElement.appendChild(createElement);
                checkDiv.appendChild(createMainElement);
            } else {
                checkDiv.children[0].appendChild(createElement)
            }
        }
    });
};
getDataFromLocalStorageToMapForTeam();

const divCreationInTeamsForMember = () => {

    const loginEmail = document.getElementById('login_email').value;
    for (let [key] of teamData.entries()) {

        if (key === loginEmail) {
            continue;
        };
        let nameCheck = teamData.get(key).fullName;
        let access = teamData.get(key).teams;
        let checkDivForRemove = document.querySelector('div.teamsInWhichIam');
        if (checkDivForRemove.childElementCount === 1) {
            checkDivForRemove.children[0].remove();
        }
        access.forEach(values => {
            emailCheck(values, nameCheck);
        });
    };
};


const divCreationInTeamsForOwner = (e) => {
    e.preventDefault();
    getDataFromLocalStorageToMapForTeam();
    const loginEmail = document.getElementById('login_email').value;
    let teamDataForIteratingArray = teamData.get(loginEmail).teams;
    let createMainElement = document.createElement('div');
    createMainElement.className = 'teamsIownPart';
    for (let values in teamDataForIteratingArray) {
        const arrOfMembers = teamDataForIteratingArray[values].membersEmail;
        const categoryOfMembers = teamDataForIteratingArray[values].categoryName;
        let createElement = document.createElement('div');
        createElement.className = 'teams';
        createElement.innerHTML = `
        <span>${categoryOfMembers}</span>
        <p><b>Members: </b>${arrOfMembers}</p> 
        `
        createMainElement.appendChild(createElement);
    };
    let teamsIownDiv = document.querySelector('div.teamsIownPart');

    let checkDiv = document.querySelector('div.teamsIown');
    if (checkDiv.childElementCount === 0) {
        checkDiv.appendChild(createMainElement);
    } else {
        teamsIownDiv.replaceWith(createMainElement);
    };
    divCreationInTeamsForMember();
};


const loginForm = document.getElementById('login-main');
loginForm.addEventListener('submit', divCreationInTeamsForOwner);
const ppupCreateButtonForLoadingDiv = document.getElementById('popupCreate');
popupCreateButtonForLoadingDiv.addEventListener('click', divCreationInTeamsForOwner);o
const saveChangesButtonOfSetting = document.getElementById('saveChangesButton');
saveChangesButtonOfSetting.addEventListener('click', divCreationInTeamsForOwner)

*/
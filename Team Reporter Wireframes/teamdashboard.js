
let teamData = new Map;
const getDataFromLocalStorageToMapForTeam = () => {
    for (let i = 0; i < localStorage.length; i++) {
        let keys = (localStorage.key(i));
        let get = JSON.parse(localStorage.getItem(keys));
        teamData.set(keys, get);
    }

};
getDataFromLocalStorageToMapForTeam();

const divCreationInTeamsForMember = () => {
    getDataFromLocalStorageToMapForTeam();
    const loginEmail = document.getElementById('login_email').value;
    for (let [key] of teamData.entries()) {
        if (key === loginEmail) {
            continue;
        };
        let nameCheck = teamData.get(loginEmail).fullName;
        let access = teamData.get(key).teams;
        
        for (let values in access) {
            let emailCheck = access[values].membersEmail;
            let categoryOfMembers = access[values].categoryName;
            let arrOfMembers = access[values].membersEmail;
            for (let values of emailCheck) {
                if (nameCheck === values) {
                    let createMainElement = document.createElement('div');
                    createMainElement.className = 'teamsInWhichIamPart';
                    let createElement = document.createElement('div');
                    createElement.className = 'teams';
                    createElement.innerHTML = `
                    <span>${categoryOfMembers}</span>
                    <p><b>Members: </b>${arrOfMembers}</p> 
                    `
                    createMainElement.appendChild(createElement);
                    let teamsInWhichIamDiv = document.querySelector('div.teamsInWhichIamPart');
                    let checkDiv = document.querySelector('div.teamsInWhichIam');
                    if (checkDiv.childElementCount === 0) {
                        checkDiv.appendChild(createMainElement);
                    } else {
                        teamsInWhichIamDiv.replaceWith(createMainElement);
                    };
                }
            }
        }

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
const popupCreateButtonForLoadingDiv = document.getElementById('popupCreate');
popupCreateButtonForLoadingDiv.addEventListener('click', divCreationInTeamsForOwner);
const saveChangesButtonOfSetting = document.getElementById('saveChangesButton');
saveChangesButtonOfSetting.addEventListener('click',divCreationInTeamsForOwner)


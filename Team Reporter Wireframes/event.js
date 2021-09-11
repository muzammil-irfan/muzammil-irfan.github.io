
//registration process.............................
const registerButtonOnLoginPage = (e) => {
    const signup = document.getElementById('signup-main');
    const login = document.getElementById('login-main');
    login.style.display = 'none';
    signup.style.display = 'block' && 'flex';
    e.preventDefault();
}
const registerButton = document.getElementById('register_btn');
registerButton.addEventListener('click', registerButtonOnLoginPage);


//creating a function to open report tab
const reportTabFunction = (e) => {
    e.preventDefault();
    const teamsDashboard = document.getElementById('teamsDashboard');
    const reportTab = document.getElementById('ownerViewReturn');
    teamsDashboard.style.display = 'none'
    reportTab.style.display = 'block' && 'flex';
}
const teamsIown = document.getElementsByClassName('teamsIown');
for (let element of teamsIown) {
    element.addEventListener('click', reportTabFunction);
};

//making a function to open member tab
const memberView = (e) => {
    e.preventDefault();
    const teamsDashboard = document.getElementById('teamsDashboard');
    const memberTab = document.getElementById('memberview');
    teamsDashboard.style.display = 'none'
    memberTab.style.display = 'block' && 'flex';
};
const teamsInWhichIam = document.getElementsByClassName('teamsInWhichIam');
for (let element of teamsInWhichIam) {
    element.addEventListener('click', memberView);
};

//making a function to open setting tab
const settingTabFunction = (e) => {
    e.preventDefault();
    const reportTab = document.getElementById('ownerViewReturn');
    const settingTab = document.getElementById('ownerViewSetting');
    reportTab.style.display = 'none';
    settingTab.style.display = 'block' && 'flex';
};
const settingsTabButton = document.getElementsByClassName('settingsTab');
for (let element of settingsTabButton) {
    element.addEventListener('click', settingTabFunction);
};

//making a function to open return tab from its button
const reportsTabFunction = (e) => {
    e.preventDefault();
    const reportTab = document.getElementById('ownerViewReturn');
    const settingTab = document.getElementById('ownerViewSetting');
    settingTab.style.display = 'none';
    reportTab.style.display = 'block' && 'flex';
};
const reportsTabButton = document.getElementsByClassName('reportsTab');
for (let element of reportsTabButton) {
    element.addEventListener('click', reportsTabFunction);
};

//making a function for cancel button
const CancelButtonOfSettingsFunction = (e) => {
    e.preventDefault();
    const settingTab = document.getElementById('ownerViewSetting');
    const teamsDashboard = document.getElementById('teamsDashboard');

    settingTab.style.display = 'none';
    teamsDashboard.style.display = 'block' && 'flex';
}
const CancelButtonOfSettings = document.getElementById('CancelButtonOfSettings');
CancelButtonOfSettings.addEventListener('click', CancelButtonOfSettingsFunction);

//popup opening 
const popup = document.getElementById('popupWindow');
const popupWindow = () => {
    popup.style.display = 'block' && 'flex';
}
const plusButton = document.getElementById('plusBtn');
plusButton.addEventListener('click', popupWindow);

//popupclosing
const popupClose = (e) => {
    e.preventDefault();
    popup.style.display = 'none';
}
const popupCancel = document.getElementById('popupCancel');
popupCancel.addEventListener('click', popupClose);


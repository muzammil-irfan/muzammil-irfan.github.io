let settingData = new Map;
const getDataFromLocalStorageToMapForSetting = () => {
    for (let i = 0; i < localStorage.length; i++) {
        let keys = (localStorage.key(i));
        let get = JSON.parse(localStorage.getItem(keys));
        settingData.set(keys, get);
    }

};
getDataFromLocalStorageToMapForSetting();
console.log((settingData.get('1@1')).teams);
const getDefiningQuestions = document.getElementById('definingQuestions');

const definingQuestions = () => {
    const questions1 = getDefiningQuestions.children[0];
    const questions2 = getDefiningQuestions.children[1];
    const questions3 = getDefiningQuestions.children[2];
    let settingDataTeams = settingData.get('1@1').teams;
    for (let values in settingDataTeams) {
        // console.log(settingDataTeams[values].questions)
        let questionsObj = {
            question1 : questions1.value,
            question2 : questions2.value,
            question3 : questions3.value
        };
        if (settingDataTeams[values].questions === undefined) {
            (settingDataTeams[values])['questions'] = questionsObj;
        } else{
            (settingDataTeams[values]).questions = questionsObj;
        }
    };

};
const definingTimeOfReminder = ()=>{
    const definingTime = document.getElementById('definingTime');
    let settingDataTeams = settingData.get('1@1').teams;
    for (let values in settingDataTeams) {
        if (settingDataTeams[values].reminderTime === undefined) {
            (settingDataTeams[values])['reminderTime'] = definingTime.value;
        } else{
            (settingDataTeams[values]).reminderTime = definingTime.value;
        }
        
    };
};
const definingCheckboxofSettings = ()=>{
const checkboxofSettings = document.getElementById('checkboxofSettings').checked;
    let settingDataTeams = settingData.get('1@1').teams;
    for (let values in settingDataTeams) {
        if (settingDataTeams[values].checkboxValue === undefined) {
            (settingDataTeams[values])['checkboxValue'] = checkboxofSettings;
        } else{
            (settingDataTeams[values]).checkboxValue = checkboxofSettings;
        }
        
    };
};
const creatingDivOfMembersOfSettings = () =>{
const addMemberValue = document.getElementById('addMemberValue').value;
const addMemberEmails = document.getElementById('addMemberEmails');
let createElement = document.createElement('div');
createElement.className = 'allMemberEmailsStyle';
createElement.innerHTML = `
${addMemberValue}
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black"
    class="bi bi-x-circle svgButton" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
    <path
        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
</svg>
`
addMemberEmails.appendChild(createElement);
};

const settingTabDataSave = ()=>{
    definingQuestions();
    definingTimeOfReminder();
    definingCheckboxofSettings();
    const settingTab = document.getElementById('ownerViewSetting');
    settingTab.style.display = 'none';
    const teamsDashboard = document.getElementById('teamsDashboard');
    teamsDashboard.style.display = 'block' && 'flex';
    for (const [key, value] of settingData.entries()) {
        localStorage.setItem(key, JSON.stringify(value));
    };
};
const addMemberButton = document.getElementById('addMemberButton');
addMemberButton.addEventListener('click', creatingDivOfMembersOfSettings);
const saveChangesButtonOfSetting = document.getElementById('saveChanges


/*
<div class="allMemberEmailsStyle">test@gmail.com
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black"
                            class="bi bi-x-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div> 
*/

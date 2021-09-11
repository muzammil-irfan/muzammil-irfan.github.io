const teamsDiv = document.getElementsByClassName('teams');

let map = new Map();

let loginEmail;
const getDataFromLocalStorageToMap = () => {
    for (let i = 0; i < localStorage.length; i++) {
        let keys = (localStorage.key(i));
        let get = JSON.parse(localStorage.getItem(keys));
        map.set(keys, get);
    }

};
getDataFromLocalStorageToMap();
// console.log


const teamsDashboardDisplay = () => {
    const teamsDashboard = document.getElementById('teamsDashboard');
    const login = document.getElementById('login-main');
    login.style.display = 'none';
    teamsDashboard.style.display = 'block' && 'flex';

};






const loginEvent = (e) => {
    getDataFromLocalStorageToMap();

    e.preventDefault();
    loginEmail = document.getElementById('login_email').value;
    const loginPassword = document.getElementById('login_password').value;
    const mapBoolean = map.has(loginEmail.toString());
    const mapCheck = map.get(loginEmail.toString());

    if (mapBoolean === true && mapCheck.email === loginEmail && mapCheck.password === loginPassword) {
        alert('you are logged in');
        teamsDashboardDisplay();

    }
    else {
        alert('Incorrect email or password!');
    }



};
const login = document.getElementById('login-main');
login.addEventListener('submit', loginEvent);

//...................................teams dashboard page.................



// let teamNameSet = new Set;
//testing an array
const teamCreationChecking = () => {
    const teamNameCreate = document.getElementById('teamNameCreate').value;
    const teamCategoryCreate = document.getElementById('categoryCreate').value;
    let teamMembersEmailTest = document.getElementById('membersEmailCreate').value;
    teamMembersEmailTest = teamMembersEmailTest.split(',');
    for (let values of teamMembersEmailTest) {
        let teamSet = new Set;
        let check = map.has(values);
        if (check === true && teamNameCreate !== "") {
            let teamMembersEmail = map.get(values).fullName;
            let teamSetArr;
            teamSet.add(teamMembersEmail);
            teamSetArr = [...teamSet];
            let newObjectOfValues = {
                teamName: teamNameCreate,
                categoryName: teamCategoryCreate,
                membersEmail: teamSetArr
            };
            let teamNameArr = [];
            if (map.get(loginEmail).teams === undefined) {
                map.get(loginEmail)['teams'] = teamNameArr;
                teamNameArr.push(newObjectOfValues);
            } else {
                map.get(loginEmail).teams.push(newObjectOfValues);
            }

            popup.style.display = 'none';


        } else if (teamNameCreate === "") {
            alert('Please add your team name')
        } else {
            alert('member doesnot exist');
        }
    }   //for loop ends here

};
// console.log(map.get('1@1').teams)

//team creation popup settings
const teamCreation = (e) => {
    e.preventDefault();

    teamCreationChecking();
    // for(let values in (map.get(loginEmail).teams)){
    // console.log(map.get(loginEmail).teams[values]);
    // }
    // for(let values of teamNameSet.keys()){


    for (const [key, value] of map.entries()) {
        localStorage.setItem(key, JSON.stringify(value));
    };

}
const popupCreateButton = document.getElementById('popupCreate');
popupCreateButton.addEventListener('click', teamCreation);

/*
for(let [key,values] of teamNameMap.entries()){

    if(map.get(loginEmail).teams === undefined){
        map.get(loginEmail)['teams'] = teamNameMapArr;
        teamNameMapArr.push(values);
    }else{
        map.get(loginEmail).teams.push(values) ;
    }
}
*/
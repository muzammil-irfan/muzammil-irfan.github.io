const firebaseConfig = {
    apiKey: "AIzaSyDjVkmSES9okou95ZQKXD6NrG_xwPKCVuw",
    authDomain: "pop-a-balloon-game-50405.firebaseapp.com",
    projectId: "pop-a-balloon-game-50405",
    storageBucket: "pop-a-balloon-game-50405.appspot.com",
    messagingSenderId: "860929318554",
    appId: "1:860929318554:web:c87e63fc295e1dd39f4923"
};

//initializing firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

const signInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
  
    auth.signInWithPopup(googleProvider)
    .then(() => {
        alert('you are logged in');
        
    })
    .catch(error => {
      console.error(error);
    });
  }
  const signInWithGoogleBtn = document.getElementById('signInWithGoogleBtn');
  signInWithGoogleBtn.addEventListener('click', signInWithGoogle);

  const displayGame = ()=>{
    const mainBox = document.getElementById('mainBox');
    const gamesBox = document.getElementById('gamesBox');
    mainBox.style.display = "none";
    gamesBox.style.display = "block" && 'flex';  
  };

  const startGame = document.getElementById('startGame');
  startGame.addEventListener('click',displayGame);






// const createBalloons = (arr)=>{
   
//     arr.forEach(element=>{
//         switch(element){
//             case 0:
//                 element = pic0;
//                 break;
//             case 1:
//                 element = pic1;
//                 break;
//             case 2:
//             element = pic2;
//             break;
//             case 3:
//                 element = pic3;
//                 break;
//             case 4: 
//                 element = pic4;
//                 break;

//         };
//         picsArr.push(element);
//     });
//     let createElement = document.createElement('div');
//     createElement.className = 'balloonsRow';
//     picsArr.forEach(element=>{
//         console.log(element)
//         createElement.innerHTML = element;    
//     });
//     const gameSubBox = document.getElementById('gameSubBox');
//     gameSubBox.appendChild(createElement);
// };
// const algo = ()=>{
//     let arr = [];
//     for(let i = 0; i < 5; i++){
//         let num1 = Math.random()*5
//         num1 = Math.floor(num1)//it will produce numbers 0 - 4;
//         arr.push(num1);
//     };
//     console.log(arr)
//     createBalloons(arr);
    
    

// };
// const gameStart = ()=>{
//     displayGameBox();
//     algo();
// };

// const startGame = document.getElementById('startGame');
// startGame.addEventListener('click',gameStart);


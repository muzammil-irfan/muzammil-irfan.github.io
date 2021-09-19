
const showPopup= (element) =>{
    let createElement = document.createElement('div');
    createElement.innerHtml = 'POP UP!';
    createElement.replaceWith(element);
};
const colormatcher = (color)=>{
    color.array.forEach(elements => addEventlistener('mouseOver', showPopup(elements)))
    
};
const shuffling = ()=>{
    let arr = ['green','yellow','red','orange'];
    let num = Math.random()*4;
    num = Math.floor(num);//giving 0,1,2,3
    if(arr[num] === 'green'){
        
        let green = document.getElementsByClassName('green');
        colormatcher(green);
    }else if(arr[num] === 'yellow'){
        let yellow = document.getElementsByClassName('yellow');
        colormatcher(yellow);
    }else if(arr[num] === 'red'){
        let red = document.getElementsByClassName('red');
        colormatcher(red);
    }else if(arr[num] === 'orange'){
        let orange = document.getElementsByClassName('orange');
        colormatcher(orange);
    }

};
shuffling();



// const lineDivLvl1 = document.getElementsByClassName('line');
// for (let el of lineDivLvl1) {
//     console.log(el)
// };


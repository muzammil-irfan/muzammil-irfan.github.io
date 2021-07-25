//question 4
function MyCons(name, gender, address, education, profession){
    this.name = name;
    this.gender = gender;
    this.address = address; 
    this.education = education;
    this.profession = profession;
    
};


function submit(){
    var name = document.getElementById("name").value;
    var gen = document.getElementsByClassName("gen").value;
    var add = document.getElementById("add").value;
    var edu = document.getElementById("edu").value;
    var pro = document.getElementById("pro").value;
    var total = MyCons(name,gen,add,edu,pro);
    document.write(total);
}
//question 1
var itemsArray = [
    {name: "juice",price: 50, quantity: 3},
    {name: "cookie",price: 30, quantity: 9},
    {name: "shirt",price: 880, quantity: 1},
    {name: "pen",price: 100, quantity: 2}];
for(var i = 0; i<=3; i++){
    document.write("total price of " + itemsArray[i].name + " is " + itemsArray[i].price*itemsArray[i].quantity + "<br>");
        
};
document.write("Total price of all item is " + (itemsArray[0].price*itemsArray[0].quantity + itemsArray[1].price*itemsArray[1].quantity + itemsArray[2].price*itemsArray[2].quantity + itemsArray[3].price*itemsArray[3].quantity));

var obj ={
    name:"Muzammil",
    email:"muzamilbhundi@gmail.com",
    password:"obj",
    age:17,
    gender:"Male",
    city:"karachi",
    country:"Pak"
};
//question2
var ageCheck = "age" in obj;
document.write("<br><br> Age exist in object or not? <br>" + ageCheck);
var countryCheck = "country" in obj;
document.write("<br><br> Country exist in object or not? <br>" + countryCheck);
var firstCheck = "FirstName" in obj;
document.write("<br><br> FirstName exist in object or not? <br>" + firstCheck);
var lastCheck = "LastName" in obj;
document.write("<br><br> LastName exist in object or not? <br>" + lastCheck);
//question 3
function Plan(name,age,email){
    this.name = name;
    this.age = age;
    this.email = email;
};
var plan1 = new Plan("basit",15,"basit@gmail.com");
var plan2 = new Plan("khubaib",16,"khubaib@gmail.com");
document.write("<br>" + plan1.name + "<br>");
document.write(plan2.name + "<br>");

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function alert() {
       var clicked=this.innerHTML;
       makeSound(clicked);
       animateButton(clicked);
     
    });
}

document.addEventListener("keypress",function (event) {
    makeSound(event.key);
    animateButton(event.key);
    
})

function makeSound(key) {
    if(key==="w"){
        var audio=new Audio("./sounds/crash.mp3");
        audio.play();
   }
   if(key==="a"){
    var audio=new Audio("./sounds/kick-bass.mp3");
    audio.play();
    } 
if(key==="s"){
var audio=new Audio("./sounds/snare.mp3");
audio.play();
}
if(key==="d"){
var audio=new Audio("./sounds/tom-1.mp3");
audio.play();
}
if(key==="j"){
var audio=new Audio("./sounds/tom-2.mp3");
audio.play();
}
if(key==="k"){
var audio=new Audio("./sounds/tom-3.mp3");
audio.play();
}
if(key==="l"){
var audio=new Audio("./sounds/tom-4.mp3");
audio.play();
}
}

function animateButton(key) {
    document.querySelector("."+key).classList.toggle("pressed");
}





























// function BellBoy(name,age,languages) {
//     this.name=name;
//     this.age=age;
//     this.languages=languages;
// }

// var BellBoy1=new BellBoy("dinesh",20,["English","Telugu"]);
// console.log(BellBoy1.name)


// function add(num1,num2) {
//     return num1+num2;
// }

// function subract(num1,num2) {
//     return num1-num2;
// }
// function multiply(num1,num2) {
//     return num1*num2;
// }
// function divide(num1,num2) {
//     return num1/num2;
// }
// function caluculator(num1,num2,operator) {
//     return operator(num1,num2);
// }

// console.log(caluculator(1,2,divide));
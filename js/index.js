// Your code goes here
// const bg = document.body.style.backgroundColor = "red";

const nav = document.querySelectorAll(".nav a");
nav.forEach(function(element){ 
    element.addEventListener('mouseover', function() {  
        element.style.color = 'dodgerblue';
        element.style.opacity = '0.5'
     });
  })
  nav.forEach(function(element){ 
element.addEventListener('mouseout', function() {  
    element.style.color = 'crimson';
    element.style.opacity = '1'
    });
})

//anchor
const tag = document.querySelector('.nav a');
tag.addEventListener('click',function(event){
    event.preventDefault()
    console.log('tags are being clicked');
})


//button
const buttn = document.querySelectorAll('.btn');
buttn[0].addEventListener('click',function(event){
    
    console.log("BOOTON WAS CLICKED ZOMG 1");
});
buttn[1].addEventListener('click',function(event){
    console.log("BOOTON WAS CLICKED ZOMG 2");
});

//SCROLL 
const scroll = document.querySelector(".home");

window.addEventListener("scroll", function(event){
    console.log("scrolling....");
    
})


//mouseup
const mouseUp = document.querySelector('.intro h2');

mouseUp.addEventListener('mouseup', function(event) {
    console.log("Welcome to this struggle bus")
})

//DBL CLICK
const dblClick = document.querySelector('.footer p');
dblClick.addEventListener('dblclick', function(event) {
    event.target.textContent = "New phone who dis?"
});

//click img
const imgclick = document.querySelectorAll("img");
imgclick.forEach(function(element)
{
    element.addEventListener('click',function(event)
    {
        console.log("IMG WAS CLICKED!!!!");
    })
})

//bg color
const contentclick = document.querySelector('.content-section')
contentclick.addEventListener("click", function() {
    const curColour = document.body.style.backgroundColor;

    if (curColour === 'red') {
        document.body.style.backgroundColor = "blue";
    }
    else {
        document.body.style.backgroundColor = "red";
    }
});

//winodw
// Click - on window
window.alert("You Won a 2019 HELLCAT or 60 Thousand Dollars!");
window.addEventListener('resize', function(){
    console.log('this window resized');

})



window.addEventListener('load', function(){
    console.log('LOADING MA LAZOR');

})


window.addEventListener('click', function(){
    console.log('window was clicked');

})


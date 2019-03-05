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

window.addEventListener("scroll", function(e){
    console.log("scrolling....");
    
})

//DBL CLICK




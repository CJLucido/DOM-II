// Your code goes here

//////////AFFECT MAIN IMAGE: DBLCLICK//////////////
const mainImg = document.querySelector('.intro img');
console.log(mainImg);

mainImg.addEventListener("dblclick", (e) => {
    e.target.style.display = "none";
});

// document.querySelector('.intro img').addEventListener('dblclick', (e) => {
//     e.target.style.display = "none";
// } )


///////////AFFECT NAVBAR ELEMENT SIZE: MOUSEOVER & MOUSELEAVE////////////
const navie = document.querySelectorAll('.nav-link');
console.log(navie);

navie.forEach(element => {
    element.addEventListener('mouseover', (event) => {
        event.target.style.fontSize = "4rem";
        event.preventDefault();
    }) 
    element.addEventListener('mouseleave', (event) => {
        event.target.style.fontSize = "2rem";
    }) 
    
})



//////////////////AFFECT LOGO-HEADING: KEYDOWN and KEYUP///////

/// NOT WORKING!!!!!

const logoBus = document.querySelector('.logo-heading')
console.log(logoBus)


window.addEventListener(
    'keydown', () => {
        logoBus.style.color = "yellow";
        logoBus.style.fontSize = "5rem";
        logoBus.style.background = "black"
    });

window.addEventListener(
        'keyup', () => {
            logoBus.style.color = "purple";
            logoBus.style.fontSize = "1.5rem";
            logoBus.style.background = "green"
        });


////////////////AFFECT FIRST CONTENT IMG: WHEEL//////////////

const firstImg = document.querySelector('.content-section .img-content img');
console.log(firstImg);

firstImg.addEventListener("wheel", () =>{
    firstImg.style.transform = "translateX(100px)";
})

////////////////AFFECT SECOND CONTENT IMG: SCROLL//////////////

const secondImg = document.querySelector('.inverse-content img');
console.log(secondImg);

window.addEventListener("scroll", () =>{
    secondImg.style.transform = "translateY(-500px)";
})

////////////////BODY ART: ONPOINTERDOWN///////////
document.querySelector('body').onpointerdown = (e) => {
        e.target.style.backgroundColor = "red";
}






////////////////ISLAND GETS AWAY//////////

// var dragged 

// let draggable = document.querySelector('.draggable');
// console.log(draggable)

// document.addEventListener('drag', () => {

// }, false);

// document.addEventListener('dragstart', (event) => {
//     dragged = event.target;
// }, false)

// document.addEventListener("dragover", function(event) {
//     // prevent default to allow drop
//     event.preventDefault();
//   }, false);

//   document.addEventListener("dragenter", function(event) {
//     // highlight potential drop target when the draggable element enters it
//     if (event.target.className == "destination") {
//       event.target.style.background = "purple";
//     }
// }, false);

//     document.addEventListener("dragleave", function(event) {
//         // reset background of potential drop target when the draggable element leaves it
//         if (event.target.className == "destination") {
//           event.target.style.background = "";
//         }
      
//       }, false);

// document.addEventListener('drop', () => {
//     if (event.target.className == "destination") {
//         event.target.style.background = "";
//         dragged.parentNode.removeChild( dragged );
//         event.target.appendChild( dragged );
//       }
// }, false);
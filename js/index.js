// Your code goes here

//////////AFFECT MAIN IMAGE: DBLCLICK//////////////
const mainImg = document.querySelector('.intro img');
console.log(mainImg);

mainImg.addEventListener("dblclick", () => {
    mainImg.style.display = "none";
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
    }) 
    element.addEventListener('mouseleave', (event) => {
        event.target.style.fontSize = "2rem";
    }) 
})



//////////////////AFFECT LOGO-HEADING: KEYDOWN///////

/// NOT WORKING!!!!!

const logoBus = document.querySelector('.logo-heading')
console.log(logoBus)


window.addEventListener(
    'keydown', () => {
        logoBus.style.color = "yellow";
        logoBus.style.fontSize = "5rem";
        logoBus.style.background = "black"
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



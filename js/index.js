// Your code goes here
const title = document.querySelector('h1');
title.addEventListener('click', () => {
    title.style.color = 'red';
})

const images = document.querySelectorAll('img');
images.forEach( element => {
    element.addEventListener('wheel', () => {
        element.style.transform = 'rotate(20deg)'
    })
})
images.forEach( element => {
    element.addEventListener('dblclick', () => {
        element.style.display = 'none';
    })
})

const welcomeTitle = document.querySelector('h2');
document.addEventListener('keydown', event => {
    if(event.isComposing || event.keyCode === 229){
        return;
    }
    if(event.keyCode === 38){
        welcomeTitle.style.fontSize = '500%'
    }
});

const navBar = document.querySelector('nav');
navBar.addEventListener('mouseover', (event) => {
    event.target.style.color = 'red';

    setTimeout( () => {
        event.target.style.color = '';
    }, 500);
}, false)

const allParagraph = document.querySelectorAll('p');
allParagraph.forEach( element => {
    window.addEventListener('resize', () => {
        element.textContent = '';
    })
})

let scrolls = 0;
const buttons = document.querySelectorAll('.btn');
buttons.forEach(element => {
    window.addEventListener('scroll', () => {
        element.textContent = `Cost: $${scrolls +=1}`
    })
})

document.addEventListener('copy', e => {
    e.clipboardData.setData('text/plain', 'This text is copyrighted data, pls do not use!!!!!1!');
    e.preventDefault();
})

body = document.querySelector('body')
window.addEventListener('focus', () => {
    body.style.backgroundColor = 'hotpink'
})
window.addEventListener('blur', () => {
    body.style.backgroundColor = 'blue'
})

//events used:

//click
//wheel
//dblclick
//keydown
//mouseover
//resize
//scroll
//copy
//focus
//blur
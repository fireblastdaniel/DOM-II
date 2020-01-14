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

//events used:
//click
//wheel
//dblclick
//keydown
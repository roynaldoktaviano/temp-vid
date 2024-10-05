let vid =document.getElementById('vid');
let btn = document.querySelector('#play');
let ovr = document.querySelector('#over');

btn.addEventListener('click',()=>{
    ovr.classList.add('hidden')
    vid.play();
})
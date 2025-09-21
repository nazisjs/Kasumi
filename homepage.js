let list=document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let active = 0;
let lengthItems = items.length - 1; // this is if the current page has shown then it moves to the next

next.onclick = function(){
    if(active + 1 > lengthItems){
        active = 0;
    }
    else{
        active = active + 1;
    }
    reloadSlider(); // if it goes to the right side
}

prev.onclick = function(){
    if(active - 1 < 0){
        active = lengthItems;
    }
    else{
        active = active -1;
    }
    reloadSlider(); // if it goes to the left side
}
let refreshSlider = setInterval(()=> {next.click()},6000); // automatic timer

function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px'; // whether it is possible to move to the right 

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active'); // for the moving dot under the image 
}

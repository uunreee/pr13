'use strict'

let sliderBody = document.querySelector('.slider_body');
let sliderNav = document.querySelector('.slider_nav');
let sliderImg = document.querySelector('.slider_img');
let sliderItems = Array.from(document.querySelectorAll('.slider_item'));
let sliderDots = Array.from(document.querySelectorAll('.slider_dot'));

sliderBody.addEventListener('click', function(event){
    let targetArrow = event.target.closest('.slider_arrow');
    if(!targetArrow) return;

    let currentActiveImg = document.querySelector('.slider_item.active');
    let currentActiveIndex = sliderItems.indexOf(currentActiveImg);

    currentActiveImg.classList.remove('active');
    document.querySelector('.slider_dot.active').classList.remove('active');

    changeActive(targetArrow, currentActiveIndex);

    let newActiveImg = document.querySelector('.slider_item.active');
    let newActiveIndex = sliderItems.indexOf(newActiveImg);

    scrollSlider(newActiveIndex);
})

function scrollSlider(index){
    sliderImg.style.transform = `translateX(${-100*index}%)`;
}

function changeActive(arrow, currentIndex){
    if(arrow.classList.contains('left')){
        if(currentIndex == 0){
            sliderItems.at(-1).classList.add('active');
            sliderDots.at(-1).classList.add('active');
        }else{
            sliderItems[currentIndex-1].classList.add('active');
            sliderDots[currentIndex-1].classList.add('active');
        }
    }else{
        if(currentIndex == sliderItems.length-1){
            sliderItems[0].classList.add('active');
            sliderDots[0].classList.add('active');
        }else{
            sliderItems[currentIndex+1].classList.add('active');
            sliderDots[currentIndex+1].classList.add('active');
        }
    }
}

sliderNav.addEventListener('click', function(event){
    let targetDot = event.target.closest('.slider_dot');
    if(!targetDot) return;

    if(targetDot.classList.contains('active')) return;

    document.querySelector('.slider_dot.active').classList.remove('active');
    targetDot.classList.add('active');
    document.querySelector('.slider_item.active').classList.remove('active');

    sliderItems[targetDot.dataset.index].classList.add('active');
    scrollSlider(targetDot.dataset.index);
})
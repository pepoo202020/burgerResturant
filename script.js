const navbarLinks = document.getElementById('navbarLinks');
const menuBar = document.getElementById('menuBar');
const counter01 = document.getElementById('counter01');
const statisticsSection = document.getElementById('statistics'); //statistics section
const statisticsSectionOffset = statisticsSection.offsetTop;
const counterSpan = document.getElementById('counterSpan');
const counterNumber = document.querySelectorAll('.counterNumber');
var started = false;


window.onscroll = () => {
    var windowScrollingOffset = window.scrollY;
    if(windowScrollingOffset >= statisticsSectionOffset){
        if(!started){
            counterNumber.forEach(element => {
                counter(element);
            });
            
        }
        started = true;
    }
}
counterSpan.style.display = 'none';

function counter(element){
    var goal = element.dataset.goal;
    var count = setInterval(()=>{
        element.innerText ++;
        counterSpan.style.display = 'block';
        if(element.innerHtml == 0){
            counterSpan.style.display = 'none';
        } if(element.innerText == goal){
            clearInterval(count);
        }
    }, 2000 / goal);
}

// MENU BAR CLICK
menuBar.onclick = function () {
    if(navbarLinks.className == 'navbarLinks'){
        navbarLinks.className += ' vertical';
    } else {
        navbarLinks.className = 'navbarLinks';
    }
};
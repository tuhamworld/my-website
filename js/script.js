// Showing Time and Date on Website

let paraDate = document.querySelector('#date')

function showTime() {
    let today = new Date();
    let am = 'am';
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let todayDate = today.toDateString();
    paraDate.textContent = 'Today\'s date is: ' + todayDate + ' | Time: ' + hour + ':' + minutes + ':' + seconds + am;

    if (hour < 12) {
        am = 'am'
    } else {
        am = 'pm'
    }

}

setInterval(showTime, 1000);




// Navigation Menu
const hamburger = document.querySelector('.menu-btn');
const navLinks = document.querySelector('#desktop-menu"');
const links = document.querySelectorAll('#desktop-menu" li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade')
    });
});


// Newsletter Script  starts 
(function ($) { window.fnames = new Array(); window.ftypes = new Array(); fnames[0] = 'EMAIL'; ftypes[0] = 'email'; }(jQuery)); var $mcj = jQuery.noConflict(true);

//  Newsletter Script ends 

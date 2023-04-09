let paraDate = document.querySelector('#date')
let today = new Date();
let am = 'am'
let hour = today.getHours()
let minutes = today.getMinutes()
let todayDate = today.toDateString()

if (hour < 12) {
    am = 'am'
} else {
    am = 'pm'
}


paraDate.textContent = 'Today\'s date is: ' + todayDate + ' | Time: ' + hour + ':' + minutes + am;

// Newsletter Script  starts 
(function ($) { window.fnames = new Array(); window.ftypes = new Array(); fnames[0] = 'EMAIL'; ftypes[0] = 'email'; }(jQuery)); var $mcj = jQuery.noConflict(true);

//  Newsletter Script ends 

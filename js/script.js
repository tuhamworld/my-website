let paraDate = document.querySelector('#date')
let today = new Date();
paraDate.textContent = 'Today\'s date is: ' + today.toDateString() + ' | Time: ' + today.getHours() + ':' + today.getMinutes();

// Newsletter Script  starts 
(function ($) { window.fnames = new Array(); window.ftypes = new Array(); fnames[0] = 'EMAIL'; ftypes[0] = 'email'; }(jQuery)); var $mcj = jQuery.noConflict(true);

//  Newsletter Script ends 

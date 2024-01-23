// Showing Time and Date on Website

let paraDate = document.querySelector("#date");

function showTime() {
  let today = new Date();
  let am = "am";
  let timeOfDay = "morning";
  let hour = today.getHours();
  let finalHour = hour % 12;
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let todayDate = today.toDateString();
  console.log(hour);

  if (hour < 12) {
    am = "am";
    timeOfDay = "morning";
  } else if (hour >= 12 && hour < 17) {
    am = "pm";
    timeOfDay = "afternoon";
  } else if (hour >= 17 && hour <= 20) {
    am = "pm";
    timeOfDay = "evening";
  } else if (hour > 20) {
    am = "pm";
    timeOfDay = "night";
  }

  paraDate.innerHTML = `Good ${timeOfDay}<br><br><strong>Today's date</strong> is: ${todayDate} | <strong>Time</strong>: ${finalHour}:${minutes}:${seconds}${am}`;
}

setInterval(showTime, 1000);

// Navigation Menu
const hamburger = document.querySelector(".menu-btn");
const navLinks = document.querySelector('#desktop-menu"');
const links = document.querySelectorAll('#desktop-menu" li');

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

// Newsletter Script  starts
(function ($) {
  window.fnames = new Array();
  window.ftypes = new Array();
  fnames[0] = "EMAIL";
  ftypes[0] = "email";
})(jQuery);
var $mcj = jQuery.noConflict(true);

//  Newsletter Script ends

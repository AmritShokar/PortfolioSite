
// Custom Javascript for portfolio website
$(document).ready(function(){
  // Enable tooltips using jquery
  $('[data-toggle="tooltip"]').tooltip();
});

// Scroll animate to aboutme section
function aboutMeLink() {
  $('html, body').animate({
        scrollTop: $("#aboutme").offset().top
    }, 2000);
}

// Scroll animate to skills section
function skillsLink() {
  $('html, body').animate({
        scrollTop: $("#skills").offset().top
    }, 2000);
}

// Scroll animate to projects section
function projectsLink() {
  $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 2000);
}

// Scroll animte to contact section
function contactLink() {
  $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 2000);
}

function clockStart() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  m = addDigit(m);
  document.getElementById('clock-display').innerHTML = h + ":" + m;
  var delay = setTimeout(clockStart, 500);
}
function addDigit(i) {
  if (i < 10) {
    i = "0" + i
  };
  return i;
}

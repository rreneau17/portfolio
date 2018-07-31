
// popover for contact items
$(document).ready(function(){
    $('.fa-envelope').popover({content: "Email", trigger: "hover", placement: "bottom"});
    $('.fa-github').popover({content: "GitHub", trigger: "hover", placement: "bottom"}); 
    $('.fa-linkedin-in').popover({content: "LinkedIn", trigger: "hover", placement: "bottom"});
    $('.fa-file').popover({content: "Resume", trigger: "hover", placement: "bottom"});
});

// collapes the drop down navigation when item is clicked
$('.nav-link').on('click',function() {
    $('.navbar-collapse').collapse('hide');
});

// collapes the drop down navigation when one of the projects is clicked
$('.dropdown-menu').on('click',function() {
    $('.navbar-collapse').collapse('hide');
});

// scrolls 75 pixels above section to offset the fixed nav bar
function scrollGS(aID) {
    // needed to add this work around for safari viewports under 780.  Will research a better option.
    if ( /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && window.innerWidth < 781) {
        window.scrollTo(0,$(aID).offset().top -335) + window.innerHeight == $(document).height();
    } else {
        window.scrollTo(0,$(aID).offset().top -75) + window.innerHeight == $(document).height();
    } 
}
// scrolls 64 pixels above section to offset the fixed nav bar
function scrollGS2(aID) {
    if ( /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && window.innerWidth < 781) {
        window.scrollTo(0,$(aID).offset().top -324) + window.innerHeight == $(document).height();
    } else {
        window.scrollTo(0,$(aID).offset().top -64) + window.innerHeight == $(document).height();
    } 
}

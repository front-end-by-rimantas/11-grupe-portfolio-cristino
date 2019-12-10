"use strict";

// header

// hero

// about me+hobbies
renderHobbies(hobbies);

// what i offer-services
renderServices(services);

// scroll

window.addEventListener('scroll', () => {
    progressBarAnimation();
});

progressBarAnimation();

// numbers
renderAchievements(numbers);
window.addEventListener('scroll', () => {
    sectionNumberCounter('#achievements');
});
renderAchievements(numbers);

//progress bar
renderProgressBars(designskills, '#design');
renderProgressBars(languageskills, '#language');
renderProgressBars(webskills, '#web');


// work participation section
renderTimeline(timeline);

// latest work

// job history

// services

// testimonials

// contact me

// footer
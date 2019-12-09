"use strict";

// header

// hero

// about me+hobbies
renderHobbies(hobbies);

// what i offer-services
renderServices(services);


//scroll

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


// work participation section
renderTimeline(timeline);

renderProgressBars(designskills, '#design');
renderProgressBars(languageskills, '#language');
renderProgressBars(webskills, '#web');

// latest work

// job history

// services

// testimonials

// contact me

// footer
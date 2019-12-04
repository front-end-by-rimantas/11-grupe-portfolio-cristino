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


// skills

renderProgressBars(designskills, '#design');
renderProgressBars(languageskills, '#language');
renderProgressBars(webskills, '#web');
// renderDesignSkills(designskills);
// renderLanguageSkills(languageskills);
// renderWebSkills(webskills);

// latest work

// job history

// services

// testimonials

// contact me

// footer
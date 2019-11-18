"use strict";

// header

// hero

// clients

// about me+hobbies
function renderHobbies (hobbiesList) {
    let HTML = '';

    for (let i=0; i<hobbies.length; i++) {
        const hobbies = hobbiesList[i];

        HTML += `<div class = "hobbies col-3">  
                <i class="fa fa-${hobbies.icon}"></i> 
                <p>${hobbies.title}</p>
                </div>`;
    }

return document.querySelector('#hobbies').innerHTML = HTML;
}

// numbers

// skills

// latest work

// job history

// services

// testimonials

// contact me

// footer


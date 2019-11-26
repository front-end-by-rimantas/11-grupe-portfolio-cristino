"use strict";

// header

// hero

// about me+hobbies
function renderHobbies (hobbiesList) {
    let HTML = '';

    for (let i=0; i<hobbies.length; i++) {
        const hobbies = hobbiesList[i];

        HTML += `<div class = "hobbies col-3">  
                    <i class = "fa fa-${hobbies.icon}"></i> 
                    <p>${hobbies.title}</p>
                </div>`;
    }

return document.querySelector('#hobbies').innerHTML = HTML;
}

// what i offer-services
function renderServices (servicesList) {
    let HTML ='';

    for (let i=0; i<services.length; i++) {
        const services = servicesList[i];

        HTML  += `<div class = "services col-4">
                    <div class="block">
                        <i class="fa fa-${services.icon}"></i>
                        <h5>${services.title}</h5>
                        <p>${services.p}</p>
                    </div>
                </div>`;
    }

return document.querySelector ('#services').innerHTML = HTML;
}

// numbers
function renderAchievements(list) {
    let HTML = '';

    if (!Array.isArray(list)) {
        return console.error('ERROR: list not found');
    }
    if (list.length === 0) {
        return console.error('ERROR: list is empty');
    }

    for (let i = 0; i < list.length; i++) {
        const item = list[i];

        HTML += `<div class="achievement col-3">
                    <div class="center">
                        <i class="fa fa-${item.icon}"></i>
                        <br>
                        <div class="texts">
                            <h5 class="title">${item.title}</h5>
                            <br>
                            <div class="number">${item.number}</div>
                        </div>
                    </div>
                </div>`;

    }

    return document.querySelector('#achievements').innerHTML = HTML;
}

// skills

// latest work

// job history

// services

// testimonials

// contact me

// footer
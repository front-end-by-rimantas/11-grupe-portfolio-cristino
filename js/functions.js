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

// work participation section
function renderTimeline (timelineList) {
    let HTML = '';
    
    
    for (let i=0; i<timelineList.length; i++) {
        const timeline = timelineList[i];
        let position = '';
        
        if (timelineList[i].position) {
         position = 'position';
        }

        HTML += `<div class = "timeline-item ${position}">
                        <div class = "timeline-period ${position}">
                            ${timeline.period}
                        </div>
                    </div>
                        <div class = "timeline-item ${position}">
                            <div class = "timeline-text">
                                <h5>${timeline.title}</h5>
                                <h6>${timeline.role}</h6>
                                <p>${timeline.p}</p>
                            </div>
                        </div>`;
    }  
    return document.querySelector ('#timeline').innerHTML = HTML;
}

// latest work

// job history

// services

// testimonials

// contact me

// footer
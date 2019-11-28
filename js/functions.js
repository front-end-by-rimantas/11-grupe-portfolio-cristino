"use strict";

// header

// hero

// about me+hobbies
function renderHobbies(hobbiesList) {
    let HTML = '';

    for (let i = 0; i < hobbies.length; i++) {
        const hobbies = hobbiesList[i];

        HTML += `<div class = "hobbies col-3">  
                    <i class = "fa fa-${hobbies.icon}"></i> 
                    <p>${hobbies.title}</p>
                </div>`;
    }

    return document.querySelector('#hobbies').innerHTML = HTML;
}

// what i offer-services
function renderServices(servicesList) {
    let HTML = '';

    for (let i = 0; i < services.length; i++) {
        const services = servicesList[i];

        HTML += `<div class = "services col-4">
                    <div class="block">
                        <i class="fa fa-${services.icon}"></i>
                        <h5>${services.title}</h5>
                        <p>${services.p}</p>
                    </div>
                </div>`;
    }

    return document.querySelector('#services').innerHTML = HTML;
}

// achievements

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
                            <div class="number"
                            data-number_from="0"
                            data-number_to="${item.number}"
                            data-time="3">${item.number}</div>
                        </div>
                    </div>
                </div>`;

    }

    return document.querySelector('#achievements').innerHTML = HTML;
}

function sectionNumberCounter(target) {
    const targetSection = document.querySelector(target);
    const targetSectionPositionY = targetSection.offsetTop;
    const sectionAnimationStatus = targetSection.getAttribute('data-animated_counter');

    if (sectionAnimationStatus && sectionAnimationStatus === 'true') {
        return;
    }

    if (window.scrollY > targetSectionPositionY) {
        targetSection.dataset.animated_counter = 'true';
    }

    const elementsToAnimate = targetSection.dataset.animated_element;

    if (!elementsToAnimate ||
        elementsToAnimate === '') {
        return;
    }

    const animations = targetSection.querySelectorAll(elementsToAnimate);

    for (let i = 0; i < animations.length; i++) {
        const anime = animations[i];
        let countFrom = anime.dataset.number_from ? parseInt(anime.dataset.number_from) : 0;
        console.log(anime.dataset.number_to);
        let countTo = anime.dataset.number_to ? parseInt(anime.dataset.number_to) : 100;
        let time = anime.dataset.time ? parseInt(anime.dataset.time) : 10;
        const steps = 100;

        const allowedTimeUnits = ['s', 'ms'];
        let timeUnit = 's';
        if (anime.dataset.time_unit &&
            allowedTimeUnits.indexOf(anime.dataset.time_unit) !== -1) {
            timeUnit = anime.dataset.time_unit;
        }

        anime.textContent = countFrom;

        let animationFrame = 0;
        const timer = setInterval(() => {
            anime.textContent = Math.round((countTo - countFrom) / steps * animationFrame);
            animationFrame++;
            if (animationFrame === steps + 1) {
                clearInterval(timer);
            }
        }, time * 1000 / (steps + 1));
    }
}


// skills

// latest work

// job history

// services

// testimonials

// contact me

// footer
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

// work participation section
function renderTimeline(timelineList) {
    let HTML = '';

    for (let i = 0; i < timelineList.length; i++) {
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
                            <div class = "timeline-text ${position}">
                                <h5>${timeline.title}</h5>
                                <h6>${timeline.role}</h6>
                                <p>${timeline.p}</p>
                            </div>
                        </div>`;
    }
    return document.querySelector('#timeline').innerHTML = HTML;
}

// latest work

// job history

// services

//gallery
function renderPortfolio(list) {
    let HTML = '';
    let filterHTML = '';
    let galleryHTML = '';

    // sugeneruoti filtravima
    filterHTML = `<div class="item">filter</div>
    <div class="item">filter</div>
    <div class="item">filter</div>
    <div class="item">filter</div>
    <div class="item">filter</div>`;

    //sugeneruoti darbus
    for (let i = 0; i < list.length; i++) {
        const work = list[i];
        console.log(work);
        galleryHTML += `<div class="item">
        <img src="./img/blog/${work.photo}"
        alt="${work.title}">
    </div>`;
    }
    //sugeneruoti darbus
    HTML += ` <div class="gallery">
        <div class="filter">
            ${filterHTML}
        </div>
        <div class="list">
            ${galleryHTML}
        </div>
        </div>`;
    const DOMgallery = document.querySelector('#porfolio_gallery');
    DOMgallery.innerHTML = HTML;
}

// testimonials

// contact me

// footer
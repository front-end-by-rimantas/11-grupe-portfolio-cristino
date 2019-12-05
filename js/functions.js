"use strict";

// header

// hero

// about me+hobbies
function renderHobbies(hobbiesList) {
    let HTML = '';

    for (let i = 0; i < hobbies.length; i++) {
        const hobbies = hobbiesList[i];

        HTML += `<div class = "hobbies col-3">  
                <i class="fa fa-${hobbies.icon}"></i> 
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
                            <div class="number">${item.number}</div>
                        </div>
                    </div>
                </div>`;

    }

    return document.querySelector('#achievements').innerHTML = HTML;
}

// skills
function renderProgressBars(list, divId) {
    let HTML = '';

    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        HTML += `<div class="progress-bar" data-value="${item.value}">
                    <div class="texts">
                        <div class="label">${item.title}</div>
                        <div class="value">0%</div>
                    </div>
                    <div class="full">
                        <div class="bar" style="width: ${item.value}%;">
                            <div class="loading"></div>
                        </div>
                    </div>
                </div>`;
    }

    return document.querySelector(divId).innerHTML = HTML;
}



function progressBarAnimation() {
    document.getElementById("designbtn").click();
    const myPositionY = scrollY + window.innerHeight;
    const progressBars = document.querySelectorAll('.progress-bar');

    for (let i = 0; i < progressBars.length; i++) {
        const item = progressBars[i];
        if (item.dataset.animated && item.dataset.animated === 'done') {
            continue;
        }
        const itemHeight = parseFloat(getComputedStyle(item).height);
        if (item.offsetTop + itemHeight > myPositionY) {
            continue;

        }
        item.dataset.animated = 'done';
        const valueDOM = item.querySelector('.texts > .value');
        const value = parseInt(item.dataset.value);
        const time = 3;
        let currentStep = 0;

        const timer = setInterval(() => {
            valueDOM.textContent = currentStep + '%';
            if (currentStep === value) {
                clearInterval(timer);
            }
            currentStep++;
        }, time * 1000 / (value + 1));
    }
}



document.getElementById("designbtn").addEventListener("click", function() {
    document.getElementById("designbtn").classList.add("active");
    document.getElementById("languagebtn").classList.remove("active");
    document.getElementById("webbtn").classList.remove("active");


    document.getElementById("language").style.display = "none";
    document.getElementById("design").style.display = "block";
    document.getElementById("web").style.display = "none";


});

document.getElementById("languagebtn").addEventListener("click", function() {
    document.getElementById("designbtn").classList.remove("active");
    document.getElementById("languagebtn").classList.add("active");
    document.getElementById("webbtn").classList.remove("active");



    document.getElementById("language").style.display = "block";
    document.getElementById("design").style.display = "none";
    document.getElementById("web").style.display = "none";


});

document.getElementById("webbtn").addEventListener("click", function() {
    document.getElementById("designbtn").classList.remove("active");
    document.getElementById("languagebtn").classList.remove("active");
    document.getElementById("webbtn").classList.add("active");

    document.getElementById("language").style.display = "none";
    document.getElementById("design").style.display = "none";
    document.getElementById("web").style.display = "block";


});

// latest work

// job history

// services

// testimonials

// contact me
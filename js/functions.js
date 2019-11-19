"use strict";

// header

// hero

// clients

// about me

// numbers
function renderAchievements(list) {
    let HTML = '';

    if (!Array.isArray(list)) {
        return console.error('ERROR: duok sarasa...');
    }
    if (list.length === 0) {
        return console.error('ERROR: sarasas negali buti tuscias...');
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
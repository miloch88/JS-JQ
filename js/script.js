// JavaScript

const buttonJS = document.querySelector('.js');

// I sposób
// const divItem = document.createElement('div');
// divItem.className = "box";
// divItem.innerText = "box";
// document.body.appendChild(divItem);

// II sposób
// const divItem = document.createElement('div');
// divItem.classList.add("box");
// document.body.appendChild(divItem);

// III sposób
// const divItem = document.createElement('div');
// divItem.setAttribute('class', 'box');
// document.body.appendChild(divItem);

buttonJS.addEventListener('click', function () {
    const divItem = document.createElement('div');
    divItem.setAttribute('class', 'box');
    document.body.appendChild(divItem);
})

//JQuery
$('.jq').on('click', function () {
    $('body').append('<div class="box2"></div>')
})
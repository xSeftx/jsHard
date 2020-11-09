'use strict';

const btn = document.querySelector('.btn'),
    colorText = document.querySelector('.color'),
    body = document.querySelector('HTML');

btn.addEventListener('click', () => {
    let random = Math.random().toString(36).substring(2, 2) + Math.random().toString(16).substring(2, 16),
        getcolor = random.slice(0,6);
    body.style.background = `#${getcolor}`;
    colorText.textContent = `#${getcolor}`;
    btn.style.color = `#${getcolor}`;
    
});









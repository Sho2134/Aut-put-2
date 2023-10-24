'use strict';

const kiti = ['大吉', '吉', '中吉', '小吉', '末吉', '凶', '大凶'];

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const random = Math.floor(Math.random() * 7);
    btn.classList.add('active');
    btn.textContent = kiti[random];
})

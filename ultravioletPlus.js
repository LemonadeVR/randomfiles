// ==UserScript==
// @name         Ultraviolet+
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Gets rid of Ultraviolet's default look.
// @author       Lemonade
// @match        https://ultraviolet.rainbowboyytofficial.repl.co/
// @icon         https://cdn.discordapp.com/attachments/830624258551447562/1119644711171399750/Untitled2.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const getTitle = document.querySelectorAll('h1');
    const getSearch = document.querySelectorAll('form input');
    const getSearchFocus = document.querySelectorAll('form input:focus');
    const getSpan = document.querySelectorAll('span');
    const getP = document.querySelectorAll('p');
    const getA = document.querySelectorAll('a');
    const getLogo = document.querySelectorAll('.logo');

    document.body.style.backgroundColor = '#232323';



    /**
    const faviconLink = document.createElement('link');

    faviconLink.rel = 'icon';
    faviconLink.type = 'image/png';
    faviconLink.href = 'https://cdn.discordapp.com/attachments/830624258551447562/1119644711171399750/Untitled2.png'

    document.head.appendChild(faviconLink);
    */



    const targetStylesheet = document.querySelector('link[href="index.css"]');

    const styleElement = document.createElement('style');

    styleElement.textContent = `@import url('https://fonts.googleapis.com/css?family=Nunito');`;

    targetStylesheet.parentNode.insertBefore(styleElement, targetStylesheet.nextSibling);



    getTitle[0].style.color = '#ffffff';
    getTitle[0].innerHTML = 'Ultraviolet+';
    getTitle[0].style.fontFamily = 'Nunito';

    getLogo[0].src = 'https://cdn.discordapp.com/attachments/830624258551447562/1119634264883998844/Untitled.png';
    getLogo[0].style.borderRadius = '10%';

    getSearch.forEach(input => {
        input.style.border = '1px solid rgb(0, 0, 0, .2); !important';
        input.style.color = 'rgba(253, 253, 253, 0.514)';
        input.borderRadius = '50%';
        input.style.fontFamily = 'Nunito';
    });

    getSearchFocus.forEach(input => {
        input.style.color = 'rgba(253, 253, 253, 0.514)';
        input.borderRadius = '50%';
        input.style.fontFamily = 'Nunito';
    });

    getSpan.forEach(input => {
        input.style.fontFamily = 'Nunito';
    });

    getP.forEach(input => {
        input.style.fontFamily = 'Nunito';
    });

    getA.forEach(input => {
        input.style.fontFamily = 'Nunito';
    });



    const bg = document.createElement('img');

    bg.src = 'https://cdn.discordapp.com/attachments/830624258551447562/1119634687309127740/Untitled1.png';
    bg.style.width = `100%`;
    bg.style.height = `100%`;
    bg.style.position = 'fixed';
    bg.style.top = '0px';
    bg.style.left = '0px';
    bg.style.zIndex = -1;

    document.body.appendChild(bg);



    const signature = document.createElement('h3');

    signature.innerHTML = 'Theme by Lemonade';
    signature.style.color = 'rgba(253, 253, 253, 0.514)';
    signature.style.fontFamily = 'Nunito';
    signature.style.position = 'fixed';
    signature.style.top = '0px';
    signature.style.left = '16px';
    signature.zIndex = 42;

    document.body.appendChild(signature);
})();

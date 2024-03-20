import { sectionCardsContainer } from "./section_cards";

// Создаем и Работаем с MAIN
export const main = document.createElement('main');

// Создаем контейнер для MAIN
const mainContainer = document.createElement('div');
mainContainer.classList.add('main-container'); // <div class="main-container"></div>

// Создаем 2 элемента DIV для наполнения контентом
for (let i = 0; i < 2; i++) {
    const div = document.createElement('div');
    mainContainer.append(div);
}

// Добавляем class для DIV 
mainContainer.children[0].classList.add('container__top');
mainContainer.children[1].classList.add('container__bottom');


// <div class="main-container__top">
// Создаем NAV боковое меню
const navMenu = document.createElement('nav');
navMenu.classList.add('nav-menu');
// console.log(navMenu); // <nav class="main__nav-menu"></nav>

const navMenuTPL = `
    <ul class="list-items">
        <li>
            <a class="selected" href="#!">Home</a>
        </li>
        <li>
            <a href="#!">Project</a>
        </li>
        <li>
            <a href="#!">About</a>
        </li>
        <li>
            <a href="#!">Blog</a>
        </li>
        <li>
            <a href="#!">Contact</a>
        </li>
    </ul>
`;
navMenu.insertAdjacentHTML('beforeend', navMenuTPL);

// Добавляем боковое меню NAV в DOM в <div class="main-container__top">
mainContainer.children[0].append(navMenu);


// Создаем SECTION IMG
const sectionIMG = document.createElement('section');
sectionIMG.classList.add('sections-images'); // <section class="sections-images">

const sectionImgTPL = `
    <div class="img1">
        <div class="img2"></div>
    </div>    
`;
sectionIMG.insertAdjacentHTML('beforeend', sectionImgTPL);

// Добавляем SECTION IMG в DOM в <div class="main-container__top">
mainContainer.children[0].append(sectionIMG);


// Создаем SECTION TEXT
const sectionText = document.createElement('section');
sectionText.classList.add('sections-text'); // <section class="sections-text">

// Создаем 3 элемента DIV контейнера
for (let i = 0; i < 3; i++) {
    const div = document.createElement('div');
    sectionText.append(div);
}

// добавляем class для DIV 
sectionText.children[0].classList.add('container-text'); // <div class="container__section-text">
sectionText.children[1].classList.add('container-buttons'); // <div class="container__section-buttons">
sectionText.children[2].classList.add('container-statistics'); // <div class="container__section-statistics">
// console.log(sectionText);


// Наполняем контентом <div class="container-text">
const sectionTextTPL = `
    <h1>We’re a Creative Design Agency</h1>
    <p>We are delivering top level digital services best experlenced team, just get stared</p>  
`;
sectionText.children[0].insertAdjacentHTML('beforeend', sectionTextTPL);


// Наполняем контентом <div class="container-buttons">
const sectionBtnTPL = `
    <a href="!#" class="btn-1">
        <span>Get started</span>
        <span class="btn-1__img"></span>
    </a>

    <a href="!#" class="btn-2">
        <span class="btn-2__img"></span>
        <span>How it works</span>
    </a> 
`;
sectionText.children[1].insertAdjacentHTML('beforeend', sectionBtnTPL);


// Наполняем контентом <div class="container-statistics">
const sectionStatisticsTPL = `
    <div class="items">
        <span class="number">20+</span>
        <span class="text">Years of  Excellent</span>
    </div>
    <div class="items">
        <span class="number">90%</span>
        <span class="text">Happy  Client</span>
    </div>
    <div class="items">
        <span class="number">80%</span>
        <span class="text">Project  Succes</span>
    </div>
`;
sectionText.children[2].insertAdjacentHTML('beforeend', sectionStatisticsTPL);


// Добавляем весь контейнер SECTION TEXT в DOM в <div class="main-container__top">
mainContainer.children[0].append(sectionText);


// <div class="container__bottom">
// Создаем SECTION
const sectionClientsList = document.createElement('section');
sectionClientsList.classList.add('clients-list');
// console.log(sectionClientsList); // <section class="clients-list"></section>

const sectionClientsListTPL = `
    <a class="item-1" href="!#"></a>

    <a class="item-2" href="!#"></a>
    <a class="item-3" href="!#"></a>
    <a class="item-4" href="!#"></a>
    <a class="item-5" href="!#"></a>
`;
sectionClientsList.insertAdjacentHTML('beforeend', sectionClientsListTPL);


// Добавляем SECTION в DOM в <div class=container__bottom">
mainContainer.children[1].append(sectionClientsList);


// MAIN is ready, Добавляем mainContainer в MAIN 
// Добавляем sectionCardsContainer в MAIN 
main.append(mainContainer, sectionCardsContainer);

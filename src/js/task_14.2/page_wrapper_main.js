import { header } from './header';
import { main } from './main/main';


//=======================================================================

// Задача 14.2
// С помощью `innerHTML` создать и добавить на страницу браузера DOM-структуру, 
// состоящую из элементов: `header`, `nav`, `seaction`, `article`,  `aside`, и `footer`. 


// Создание основного контейнера страницы <div class="page"></div>
// const page = document.createElement('div');
// page.classList.add('page');

// Поиск основного контейнера страницы
const page = document.querySelector('.page');
// console.log(page); // <div class="page"></div>


// Создание контейнера MAIN, куда входят HEADER и MAIN(sections) 
const wrapperMain = document.createElement('div');
wrapperMain.classList = 'wrapper-main';
// console.log(wrapperMain); // <div class="wrapper-main"></div>


// header, main добавляем в wrapperMain
wrapperMain.append(header, main);


// Добавляем готовый wrapperMain в главный контейнер страницы PAGE
page.append(wrapperMain);

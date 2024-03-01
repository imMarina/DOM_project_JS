// DOM

// Навигация по документу 
// Самые верхние элементы дерева доступны как свойства объекта document
const htmlElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;
// console.log(htmlElement); // <html>…</html> 
// console.log(headElement); // <head>…</head>
// console.log(bodyElement); // <body>…</body>

// Получаем первые и последние узлы объекта body
const firstChildNode = bodyElement.firstChild;
const lastChildNode = bodyElement.lastChild;
// console.log(firstChildNode); // #text (текстовый узел или символ перевода строки data: "\n    \n    ")
// console.log(lastChildNode); // #text 

// Коллекция childNodes содержит список всех детей, включая текстовые узлы
const childNodes = bodyElement.childNodes;
// console.log(childNodes); 
// NodeList(4) [text, section.methods, text, script]
// 0: text
// 1: section.methods
// 2: text
// 3: script
// 4: text
// 5: comment
// 6: text
// 7: script
// 8: text
// length: 9
// [[Prototype]]: NodeList

// Для проверки наличия дочерних узлов существует также специальная функция hasChildNodes()
console.log(bodyElement.hasChildNodes()); // true

// Коллекция childNodes - это особый перебираемый объект - псевдомассив
// В childNodes находятся и текстовые узлы, и узлы-элементы, и узлы-комментарии, если они есть.
// Отличия от массивов:
// 1. Для перебора коллекции мы можем использовать for..of
// 2. Методы массивов не будут работать, потому что коллекция - это не массив.

// Перебор коллекции
for (let node of childNodes) {
    // console.log(node);
    // #text:
    // <section class="methods"><h2>Методы NodeList</h2><div class="methods-content">…</div></section>
    // #text 
    // <script src="./script.js"></script>
}

// "Живые" коллекции
// Почти все DOM-коллекции, за небольшим исключением, "живые".
// они отражают текущее состояние DOM. Если мы сохраним ссылку на body.childNodes и добавим/удалим узлы в DOM, то они появятся в сохранённой коллекции автоматически.

// Соседние и родительские узлы
const previousSiblingNode = bodyElement.previousSibling;
const nextSiblingNode = bodyElement.nextSibling;
const parentNode = bodyElement.parentNode;
// console.log(previousSiblingNode); // #text
// console.log(nextSiblingNode); // null
// console.log(parentNode); // <html lang="ru"><head>…</head><body>…</body></html>


// Навигация только по элементам

// Узлы-элементы представляют собой теги, которые формируют структуру страницы.
// Получаем коллекцию всех дочерних элементов
const bodyChildren = bodyElement.children;
// console.log(bodyChildren); 
// HTMLCollection(2) [section.methods, script]
// 0: section.methods
// 1: script
// 2: script
// length: 3
// [[Prototype]]: HTMLCollection

// Первые и последние дочерние элементы объекта body
const firstChild = bodyElement.firstElementChild;
const lastChild = bodyElement.lastElementChild;
// console.log(firstChild); // h3#first.title
// console.log(lastChild); // h3#last.title

// Соседние и родительские элементы объекта body
const previousSibling = bodyElement.previousElementSibling;
const nextSibling = bodyElement.nextElementSibling;
const parentElement = bodyElement.parentElement;
// console.log(previousSibling); // <head>…</head>
// console.log(nextSibling); // null
// console.log(parentElement); // <html>…</html>

//=========================================================================================

// Поиск произвольного элемента

// querySelectorAll - статичная коллекция
// можем указать любой selector css
// elem.querySelectorAll('selector');

// 1. Поиск по селектору класса
const elemsOne = document.querySelectorAll('.title');
// console.log(elemsOne); // NodeList(2) [h3#first.title, h3#last.title]
// NodeList(2) [h3#first.title, h3#last.title]
// 0: h3#first.title
// 1: h3#last.title
// length: 2
// [[Prototype]]: NodeList

// 2. Поиск по селектору тега
const elemsTwo = document.querySelectorAll('h3');
// console.log(elemsTwo); // NodeList(2) [h3#first.title, h3#last.title]

// 3. Поиск по смешанному селектору тега и класса
const elemsThree = document.querySelectorAll('h3.title');
// console.log(elemsThree); // NodeList(2) [h3#first.title, h3#last.title]

// 4. Поиск по тегу первого уровня вложенности
// const elemsFour = document.querySelectorAll('.classParent>tegChild');
// console.log(elemsFour);

// 5. Поиск по нескольким классам
const elemsSix = document.querySelectorAll('.classChild1, .classChild2');
// console.log(elemsSix);

// 6. Поиск по вложенным классам
// const elemsFive = document.querySelectorAll('.classParent, .classChild');
// console.log(elemsFive);

// 7. Поиск по ID
// const elemsSeven = document.querySelectorAll('#idParent');
// console.log(elemsSeven);

// 8. Поиск по атрибуту
// const elemsEight = document.querySelectorAll('[atribut]');
// console.log(elemsEight);

// 9. Поиск по атрибуту со значением
// const elemsNine = document.querySelectorAll('[atribut="test"]');
// console.log(elemsNine);

// Получение конкретного элемента коллекции
const elems = document.querySelectorAll('h3');
// console.log(elems[1]); // <h3 class="title" id="last">End</h3> 

for (const item of elems) {
    // console.log(item);
    // <h3 class="title" id="first">Begin</h3> 
    // <h3 class="title" id="last">End</h3> 
}

elems.forEach(item => {
    // console.log(item);
    // <h3 class="title" id="first">Begin</h3> 
    // <h3 class="title" id="last">End</h3> 
});

// elem.querySelector(CSS);
// Возвращает первый элемент внутри elem, соответствующий данному CSS-селектору.

//document.getElementById(ID)
// Если у элемента есть атрибут id, то мы можем получить его вызовом document.getElementById(id), где бы он ни находился.
// 1. id - уникален
// 2. Поиск полько внутри document.

// elem.getElementsByTagName(tag)
// ищет элементы с данным тегом и возвращает их коллекцию.Передав "*" вместо тега, можно получить всех потомков.

// elem.getElementsByClassName(className)
// возвращает элементы, которые имеют данный CSS - класс.







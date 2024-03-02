
// Задача 14.1
// Найти все DOM-узлы html-разметки index.html.

// Самые верхние элементы дерева доступны как свойства объекта document
const htmlElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;
// console.log(htmlElement); // <html>…</html> 
// console.log(headElement); // <head>…</head>
// console.log(bodyElement); // <body>…</body>

// Коллекция childNodes содержит список всех детей, включая текстовые узлы
const childNodes = bodyElement.childNodes;
// console.log(childNodes); 
// NodeList(11) [text, h3#first.title, text, comment, text, section.methods, text, h3#last.title, text, comment, text]
// 0: text
// 1: h3#first.title
// 2: text
// 3: comment
// 4: text
// 5: section.methods
// 6: text
// 7: h3#last.title
// 8: text
// 9: comment
// 10: text
// length: 11
// [[Prototype]]: NodeList

// Соседние и родительские узлы
const previousSiblingNode = bodyElement.previousSibling;
const nextSiblingNode = bodyElement.nextSibling;
const parentNode = bodyElement.parentNode;
// console.log(previousSiblingNode); // #text
// console.log(nextSiblingNode); // <!-- previousElementSibling (null) -->
// console.log(parentNode); // <html lang="ru"><head>…</head><body>…</body></html>

// SECTION elements
// const bodyElement = document.body;
const section = bodyElement.querySelector('.methods');
// console.log(section); // <section class="methods">…</section>

// Получаем коллекцию всех дочерних узлов
const sectionNodes = section.childNodes;
// console.log(sectionNodes); 
// NodeList(5) [text, h2, text, div.methods-content, text]
// 0: text
// 1: h2
// 2: text
// 3: div.methods-content
// 4: text
// length: 5
// [[Prototype]]: NodeList

// Получаем коллекцию всех дочерних элементов
const sectionElements = section.children;
// console.log(sectionElements); // h2, div.methods-content
// HTMLCollection(2) [h2, div.methods-content]
// 0: h2
// 1: div.methods-content
// length: 2
// [[Prototype]]: HTMLCollection

const h2 = section.querySelector('h2');
// console.log(h2); // <h2>Методы NodeList</h2>
// console.log(h2.textContent); // Методы NodeList

// h2.innerHTML = 'This is <b>innerHTML</b>'
// h2.textContent = 'This is <b>textContent</b>'


const divMain = section.querySelector('.methods-content');
// console.log(divMain); // <h2>Методы NodeList</h2>
// console.log(divMAinElem.children); 
// HTMLCollection(5) [div#item_index, div#entries, div#foreach, div#keys, div#values, item_index: div#item_index, entries: div#entries, foreach: div#foreach, keys: div#keys, values: div#values]

const divElems = divMain.querySelectorAll('div');
// console.log(divElems); 
// NodeList(5) [div#item_index, div#entries, div#foreach, div#keys, div#values]
// 0: div#item_index
// 1: div#entries
// 2: div#foreach
// 3: div#keys
// 4: div#values
// length: 5
// [[Prototype]]: NodeList

for (let div of divElems) {
    
    // console.log(div); 
    // console.log(div.children); 

    // output 
    // div#item_index
    // HTMLCollection(2) [h4, p]
    // div#entries
    // HTMLCollection(2) [h4, p]
    // div#foreach
    // HTMLCollection(2) [h4, p]
    // div#keys
    // HTMLCollection(2) [h4, p]
    // div#values
    // HTMLCollection(2) [h4, p]

    // console.log(div.classList); // DOMTokenList [value: '']
    }

    divElems.forEach(div => {

        // Поиск дочерних элементов <h4></h4> и <p></p>
        const firstChild = div.firstElementChild;
        const lastChild = div.lastElementChild;
        // console.log(firstChild); // <h4> ... </h4> 
        // console.log(lastChild); // <p> ... </p>

        // output
        /*
        <h4>item (index)</h4>
        <p> ... </p>

        <h4>entries()</h4>
        <p> ... </p>

        <h4>forEach()</h4>
        <p> ... </p>

        <h4>keys()</h4>
        <p> ... </p>

        <h4>values()</h4>
        <p> ... </p>
        */

        // Проверка текста внутри элемента <h4> ... </h4> 
        // console.log(firstChild.innerHTML); 
        // item (index)
        // entries()
        // forEach()
        // keys()
        // values()

        // Изменить текст внутри элемента <p> ... </p>
        // lastChild.innerHTML = 'Test Text'
        // lastChild.textContent = 'Test Text'

        // Добавить стиль <p> ... </p>
        // lastChild.style.color = 'red';
        // console.log(lastChild.innerHTML); 

        // Проверка класса элемента <h4> ... </h4>
        // console.log(firstChild.classList); // DOMTokenList [value: '']

        // Добавить класс элементу <h4> ... </h4>
        // firstChild.classList.add('test')
    });



    // divElems.forEach(div => {
    //     div.classList.add('div');
    // });




